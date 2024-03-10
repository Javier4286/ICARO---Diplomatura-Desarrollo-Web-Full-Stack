import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import CreateProduct from "./pages/create";
import Products from "./pages/products";
import Navbar from "./layouts/navbar";
import ConfirmarOrden from "./pages/order";
import useCart from "./global/useProducts";
import EditProductPage from "./pages/edit";
import DeleteProductPage from "./pages/delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <div>
              <Navbar />
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:id/delete"
                  element={<DeleteProductPage />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/create" element={<CreateProduct />} />
                <Route
                  path="/buy"
                  element={<ConfirmarOrden useCart={useCart} />}
                />
                <Route
                  path="/products/:id/edit"
                  element={<EditProductPage />}
                />
              </Routes>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
