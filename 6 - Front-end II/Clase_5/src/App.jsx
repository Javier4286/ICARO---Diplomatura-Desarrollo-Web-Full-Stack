import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return products.map((item) => {
    return <Card product={item} key={item.id}></Card>;
  });
}

export default App;
