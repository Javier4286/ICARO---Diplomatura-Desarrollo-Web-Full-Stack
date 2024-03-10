import { useEffect, useState } from "react";
import "./App.css";

function Card({ title, image, price, description }) {
  return (
    <article className="card">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <h2>${price}</h2>
      <p>{description}</p>
      <button>Aceptar</button>
    </article>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((items) => items.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section>
      {products.map((something) => (
        <Card
          key={something.id}
          title={something.title}
          image={something.image}
          price={something.price}
          description={something.description}
        />
      ))}
    </section>
  );
}
export default App;
