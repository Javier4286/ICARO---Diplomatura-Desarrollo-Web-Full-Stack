const OrderDetails = require("../../models/index").OrderDetail;
const Order = require("../../models/index").Orders;

const createOrder = async (req, res) => {
  try {
    const { user_id, shipping_type, shipping_address, products } = req.body;

    if (shipping_type === "domicilio" && !shipping_address) {
      return res
        .status(400)
        .json({ error: "Por favor, ingrese una dirección de envío." });
    }

    let total_price = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      total_price += product.Price * product.Quantity;
    }

    const order = await Order.create({
      user_id,
      shipping_address:
        shipping_type === "domicilio" ? shipping_address : shipping_address,
      total_price,
      shipping_type,
    });

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      await OrderDetails.create({
        order_id: order.id,
        product_id: product.id,
        quantity: product.Quantity,
        price: product.Price,
      });
    }

    res.status(201).json({ message: "Orden creada exitosamente", order });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ error: "Error al crear la orden" });
  }
};

const addToCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.session.userId;
    console.log("userId in addToCart:", userId);
    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    console.log("typeof req.session.cart:", typeof req.session.cart);
    console.log("req.session.cart:", req.session.cart);

    // req.session.cart = req.session.cart || { userId, products: [] };

    // req.session.cart.products.push(productId);

    // Recupera el carrito de la sesión o inicialízalo si no existe
    req.session.cart = req.session.cart || { products: [] };

    // Asigna el userId al producto antes de agregarlo al carrito
    const productWithUserId = { productId, userId };

    req.session.cart.products.push(productWithUserId);

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const viewCart = async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Obtener el carrito específico del usuario actual desde la sesión
    const userCart = req.session.cart || { products: [] };

    // Obtener detalles de productos usando los IDs en el carrito
    const productIds = userCart.products.map((productId) => productId);

    // Hacer una solicitud al backend para obtener detalles de productos usando los IDs
    const productDetails = await Product.findAll({
      where: { id: productIds },
    });

    // Combinar detalles de productos con la cantidad en el carrito
    const cartWithDetails = productDetails.map((productDetail) => {
      const cartItem = userCart.products.find(
        (productId) => productId === productDetail.id
      );
      return { details: productDetail, quantity: cartItem.quantity };
    });

    res.status(200).json({ data: cartWithDetails });
  } catch (error) {
    console.error("Error fetching user cart:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  req.session.cart = req.session.cart.filter(
    (item) => !(item.userId === userId && item.productId === productId)
  );

  res.status(200).json({ message: "Product removed from cart successfully" });
};

module.exports = { createOrder, addToCart, viewCart, removeFromCart };
