import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 171, 237, 1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 18.688rem;
  height: 30.875rem;
  background-color: rgba(187, 243, 255, 1);
  border-radius: 0.938rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  height: 2.375rem;
  border-radius: 0.938rem;
  margin: 0.625rem 0;
  border: none;
  padding: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0.625rem 0;
`;

export const SubmitButton = styled.button`
  height: 2.375rem;
  width: 6.375rem;
  border-radius: 0.938rem;
  background-color: white;
  cursor: pointer;
  border: none;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: floralwhite;
  }
`;
