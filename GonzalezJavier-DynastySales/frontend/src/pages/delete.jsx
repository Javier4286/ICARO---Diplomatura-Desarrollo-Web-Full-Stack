import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        navigate("/products");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, navigate]);

  return (
    <div>
      <h2>Eliminar Producto</h2>
      <p>Eliminando el producto...</p>
    </div>
  );
};

export default DeleteProductPage;
