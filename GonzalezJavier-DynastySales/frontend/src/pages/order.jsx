import useCart from "../global/useProducts";
import useUserLogin from "../global/useUserLogin";
import { useState } from "react";

function ConfirmarOrden() {
  const { cart, setCart: updateCart } = useCart();
  const { user } = useUserLogin();
  const [orderData, setOrderData] = useState({
    user_id: user.id,
    total_price: 0,
    shipping_type: "retiro por el local",
    shipping_address: "",
  });

  const totalPrice = cart.reduce((total, product) => {
    return total + product.Price * product.Quantity;
  }, 0);

  const handleOrderConfirmation = async () => {
    if (
      orderData.shipping_type === "domicilio" &&
      orderData.shipping_address === ""
    ) {
      alert("Por favor, ingrese una dirección de envío.");
      return;
    }

    orderData.total_price = totalPrice;

    try {
      orderData.shipping_type =
        orderData.shipping_type === "retiro por el local"
          ? "retiro por el local"
          : "envío a domicilio";

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          products: cart,
          shipping_type: orderData.shipping_type,
          shipping_address:
            orderData.shipping_type === "envío a domicilio"
              ? orderData.shipping_address
              : "",
        }),
      });

      if (response.ok) {
        alert("Orden Creada con éxito");
        const emptyCart = [];
        updateCart(emptyCart);
      } else {
        console.error("Error al crear la orden");
      }
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    }
  };

  return (
    <>
      <div className="cartContent">
        <h1>Confirmar Orden de Compra</h1>
        <h2>Detalles de la Orden:</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.Artist} - {product.Album} ({product.Quantity} x $
              {product.Price})
            </li>
          ))}
        </ul>
        <p>Precio Total: ${totalPrice}</p>
        <h2>Datos de Contacto del Usuario:</h2>
        <p>
          Nombre: {user.Name} {user.Surname}
        </p>
        <p>Email: {user.Email}</p>
        <p>Teléfono: {user.Telephone}</p>
        <p>Dirección: {user.Address}</p>
        <h2>Dynasty-Sales</h2>
        <p>Correo de contacto: ventas@dynasty-sales.com</p>
        <p>Teléfono de contacto: +5493513414965</p>
        <h2>Opciones de Envío:</h2>
        <label>
          <input
            type="radio"
            name="shippingType"
            value="retiro"
            checked={orderData.shipping_type === "retiro por el local"}
            onChange={() =>
              setOrderData({
                ...orderData,
                shipping_type: "retiro por el local",
              })
            }
          />{" "}
          Retiro por el local
        </label>
        <label>
          <input
            type="radio"
            name="shippingType"
            value="domicilio"
            checked={orderData.shipping_type === "domicilio"}
            onChange={() =>
              setOrderData({ ...orderData, shipping_type: "domicilio" })
            }
          />{" "}
          Envío a domicilio
        </label>
        <h2>En caso de envío, ingrese su dirección:</h2>
        <input
          className="inputOrder"
          type="text"
          placeholder="Dirección de envío"
          value={
            orderData.shipping_type === "domicilio"
              ? orderData.shipping_address
              : ""
          }
          onChange={(e) => {
            setOrderData({ ...orderData, shipping_address: e.target.value });
          }}
        />
        <button className="ButtonOrder" onClick={handleOrderConfirmation}>
          Confirmar Compra
        </button>
      </div>
    </>
  );
}

export default ConfirmarOrden;
