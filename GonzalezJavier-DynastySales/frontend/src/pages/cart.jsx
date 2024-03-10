import React, { useState, useEffect } from "react";
import useCart from "../global/useProducts";
import {
  CartContainer,
  CartHeader,
  ClearCartButton,
  CartList,
  ProductCardContainer,
  BuyLink,
  ProductQuantityButton,
  TotalPrice,
} from "../components/cart/cartStyles";

const Cart = () => {
  const { cart, clearCart, removeProduct, setCart } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart, setTotalPrice]);

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId && product.Quantity > 1) {
        return { ...product, Quantity: product.Quantity - 1 };
      }
      return product;
    });
    setTotalPrice(calculateTotalPrice(updatedCart));
    setCart(updatedCart);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, Quantity: product.Quantity + 1 };
      }
      return product;
    });
    setTotalPrice(calculateTotalPrice(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotalPrice = (cart) => {
    return cart.reduce((acc, product) => {
      return acc + product.Quantity * product.Price;
    }, 0);
  };

  return (
    <CartContainer>
      <CartHeader>Shopping Cart</CartHeader>
      <ClearCartButton onClick={() => clearCart()}>Clear cart </ClearCartButton>
      <CartList>
        {cart.map((product) => (
          <ProductCardContainer key={product.id}>
            <div>
              <img
                src={product.Url}
                alt={`Product: ${product.Artist} - ${product.Album}`}
              />
              {product.Artist}: {product.Album} (x{product.Quantity}) - Price: $
              {product.Price}
              <ProductQuantityButton
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                -
              </ProductQuantityButton>
              <ProductQuantityButton
                onClick={() => handleIncreaseQuantity(product.id)}
              >
                +
              </ProductQuantityButton>
              <button onClick={() => handleRemoveProduct(product.id)}>
                Remove Item
              </button>
            </div>
          </ProductCardContainer>
        ))}
      </CartList>
      <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
      <BuyLink to={cart.length > 0 ? "/buy" : "#"} hasItems={cart.length > 0}>
        BUY!
      </BuyLink>
    </CartContainer>
  );
};

export default Cart;
