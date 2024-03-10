// 1) pagina de inicio: debe mostrar un formulario de login donde colocar un usuario y botón de submit, al enviar el form debe guardarse en un estado global de zustand
// 2) luego de iniciar sesión debe renderizar un botón para dirigirnos a /productos

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./components/form";
import useUserStore from "./store/useUserStore";

const HomePage = () => {
  const { user } = useUserStore();
  return (
    <>
      <h1>Login form</h1>
      {user}
      {user ? <Link to={"/productos"}>Ir a productos.</Link> : <Form />}
    </>
  );
};

const ProductsPage = () => {
  useEffect(() => {
    console.log("ProductsPage");
  }, []);
  return (
    <>
      <h1>Productos Page</h1>
      si no hay usuario, mostrar un mensaje de volver a login
      <Link to={"/"}>Ir al error.</Link>
      si hay usuario, mostrar los productos
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route
          path="*"
          element={
            <>
              <h1>Página no encontrada</h1>
              <Link to={"/"}>Ir al inicio.</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
