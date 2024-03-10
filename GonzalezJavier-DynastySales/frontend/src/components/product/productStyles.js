import styled from "styled-components";

export const Container = styled.div`
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

export const ProductCardContainer = styled.div`
  flex: 0 0 calc(25% - 1rem);
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  margin: 0.625rem;
  padding: 1rem;
  background-color: rgba(187, 243, 255, 1);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    text-transform: capitalize;
  }

  button {
    background-color: white;
    border: none;
    border-radius: 0.938rem;
    width: 7rem;
    height: 2rem;
    cursor: pointer;
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.938rem;
  }
`;

export const ProductImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 0.625rem;
`;

export const ProductTitle = styled.h2`
  font-family: "Grandstander";
  font-size: 0.938rem;
  text-align: center;
  margin: 1rem 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 171, 237, 1);
  padding: 2rem;
  margin: 2rem;
  font-family: "Arial, Helvetica, sans-serif";
`;

export const InputContainer = styled.div`
  flex: 0 0 calc(25% - 1rem);
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  margin: 0.625rem;
  padding: 1rem;
  background-color: rgba(187, 243, 255, 1);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    text-transform: capitalize;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.938rem;
`;

export const ErrorContainer = styled.div`
  color: red;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const Button = styled.div`
  width: 75px;
  cursor: pointer;
`;
