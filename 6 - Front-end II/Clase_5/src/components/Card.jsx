import { useState } from "react";

function Card({ product }) {
  const [message, setMessage] = useState(false);
  function agregarProducto() {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }
  return (
    <>
      <p>{product.id}</p>
      <p>{product.price}</p>
      <button onClick={agregarProducto}>Comprar</button>
      {message && <div>Agregado al carrito</div>}
    </>
  );
}

export default Card;
