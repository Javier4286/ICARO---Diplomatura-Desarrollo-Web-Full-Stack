import React from "react";
import useUserLogin from "../../global/useUserLogin";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  ProductCardContainer,
  ProductImage,
  ProductTitle,
} from "./productStyles";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart }) => {
  const { user, isLogged } = useUserLogin();
  const navigate = useNavigate();

  const handleAddToCartWithAlert = () => {
    if (!isLogged) {
      const shouldRedirect = window.confirm(
        "You must log in to add products to the cart. Would you like to log in now?"
      );
      if (shouldRedirect) {
        navigate("/login");
      }
    } else {
      handleAddToCart(product);
      alert("Product added to the cart");
    }
  };

  const confirmDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (shouldDelete) {
      navigate(`/products/${product.id}/delete`);
    }
  };

  const renderActionButton = () => {
    if (user.isAdmin === true) {
      return (
        <div>
          <Link to={`/products/${product.id}/edit`}>Edit Product</Link>
          <button onClick={confirmDelete}>Delete Product</button>
        </div>
      );
    } else {
      return (
        <Button onClick={handleAddToCartWithAlert}>
          {" "}
          <img
            src="https://ps.w.org/added-to-cart-popup-woocommerce/assets/icon-256x256.png?rev=1588875"
            alt=""
          />{" "}
        </Button>
      );
    }
  };

  return (
    <ProductCardContainer>
      <ProductImage alt={product.Url} src={product.Url} />
      <ProductTitle> {product.Artist}</ProductTitle>
      <p>Album: {product.Album}</p>
      <p>Year: {product.Year}</p>
      <p>Price: ${product.Price}</p>
      <p>Categorie: {product.Categorie}</p>
      {renderActionButton()}
    </ProductCardContainer>
  );
};

const ProductGrid = ({ products, handleAddToCart }) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </Container>
  );
};

export default ProductGrid;
