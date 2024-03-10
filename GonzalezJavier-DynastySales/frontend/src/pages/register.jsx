import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RegisterContainer,
  RegisterHeader,
  RegisterForm,
  RegisterButton,
  ErrorMessage,
  SuccessMessage,
} from "../components/register/registerStyles";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Surname: "",
    Email: "",
    Address: "",
    Password: "",
    Telephone: "",
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessages([]);

        if (errorData && errorData.ERRORS && errorData.ERRORS.length > 0) {
          setErrorMessages(errorData.ERRORS.map((error) => error.msg));
        } else if (errorData.message) {
          if (errorData.message.includes("Email is already registered")) {
            alert(
              "This email is already registered. Please use a different email."
            );
          } else {
            setErrorMessages(["Something went wrong"]);
          }
        } else {
          setErrorMessages(["Something went wrong"]);
        }

        return;
      }

      setRegistrationSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error({ error });
      setErrorMessages(["Something went wrong"]);
    }
  };

  return (
    <RegisterContainer>
      <RegisterHeader>Sign In</RegisterHeader>
      <RegisterForm onSubmit={handleSubmit}>
        {registrationSuccess && (
          <SuccessMessage>
            Registration successful. You will be redirected to the login page...
          </SuccessMessage>
        )}
        {errorMessages.length > 0 && (
          <div>
            {errorMessages.map((message, index) => (
              <ErrorMessage key={index}>{message}</ErrorMessage>
            ))}
          </div>
        )}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="Surname"
            value={formData.Surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Telephone:</label>
          <input
            type="number"
            name="Telephone"
            value={formData.Telephone}
            onChange={handleChange}
            required
          />
        </div>
        <RegisterButton type="submit">Sign In</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
