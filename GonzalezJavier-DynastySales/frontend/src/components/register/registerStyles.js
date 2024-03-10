import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem;
  background-color: rgba(0, 171, 237, 1);
  min-height: 100vh;
  font-family: "Arial, Helvetica, sans-serif";
`;

export const RegisterHeader = styled.h2`
  color: white;
  font-size: 24px;
  margin: 0;
  padding: 20px 0;
  text-align: center;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    label {
      color: white;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      border: none;
      border-radius: 8px;
      background-color: white;
      font-family: "Arial, Helvetica, sans-serif";
      margin: 0;
      font-size: 16px;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: white;
  text-align: center;
  margin: 20px 0;
`;

export const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin: 20px 0;
`;

export const RegisterButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  margin: 20px 0;

  &:hover {
    background-color: floralwhite;
  }
`;
