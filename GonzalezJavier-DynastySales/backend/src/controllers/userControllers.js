const bcrypt = require("bcrypt");

const User = require("../../models/index").Users;

const createUserAccount = async (req, res) => {
  try {
    const { ...newUser } = req.body;
    const { Name, Surname, Email, Address, Password, Telephone } = newUser;

    if (!Name || !Surname || !Email || !Address || !Password || !Telephone) {
      throw new Error(
        "You must provide Name, Surname, Email, Address, Password, and Telephone"
      );
    }

    const existingUser = await User.findOne({ where: { Email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    const user = await User.create({ ...newUser, Password: hashedPassword });

    res.status(201).json({ message: "User created successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await User.findOne({ where: { Email } });
    console.log("User logged in. UserId:", user.id);

    if (!user) {
      return res.status(400).json({
        message: "User not found. Please check your credentials and try again.",
      });
    }

    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (!passwordMatch) {
      return res.status(400).json({
        message:
          "Invalid password. Please double-check your password and try again.",
      });
    }
    req.session.cart = [];

    req.session.userId = user.id;
    console.log("User ID set in session:", user.id);

    res.status(200).json({
      message: "Login successful",
      data: {
        id: user.id,
        isAdmin: user.isAdmin,
        Name: user.Name,
        Surname: user.Surname,
        Email: user.Email,
        Address: user.Address,
        Telephone: user.Telephone,
        cart: req.session.cart,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};

module.exports = { createUserAccount, userLogin };
