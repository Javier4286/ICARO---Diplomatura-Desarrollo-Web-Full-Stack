import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  background-color: rgba(0, 171, 237, 1);
  min-height: 100vh;
  font-family: "Arial, Helvetica, sans-serif";
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartHeader = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
  padding: 20px 0;
  text-align: center;
`;

export const ClearCartButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 0 20px 20px auto;

  &:hover {
    background-color: floralwhite;
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0;
`;

export const ProductCardContainer = styled.div`
  flex: 0 0 calc(25% - 1rem);
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0.625rem;
  padding: 1rem;
  background-color: rgba(187, 243, 255, 1);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 0 0 20px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0 0 20px;

  p {
    margin: 5px 0;
    font-size: 18px;
    line-height: 1.4;
  }

  .label {
    font-weight: bold;
  }
`;

export const ProductPrice = styled.p`
  font-size: 20px;
  color: #ff5733;
  font-weight: bold;
  margin: 0 0 20px;
`;

export const CartLink = styled(Link)`
  text-decoration: none;
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  color: rgba(0, 171, 237, 1);
  font-weight: bold;
  display: block;
  margin: 20px auto;

  &:hover {
    background-color: floralwhite;
  }
`;

export const ProductQuantityButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  margin: 0 5px;
  font-size: 16px;

  &:hover {
    background-color: #eee;
  }
`;

export const TotalPrice = styled.p`
  font-size: 24px;
  color: #ff5733;
  font-weight: bold;
  margin: 20px 0;
`;

export const BuyLink = styled(CartLink)`
  background-color: ${({ hasItems }) => (hasItems ? "green" : "red")};
  cursor: ${({ hasItems }) => (hasItems ? "pointer" : "default")};
`;
