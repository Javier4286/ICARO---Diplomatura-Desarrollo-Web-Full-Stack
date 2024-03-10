// import styled from "styled-components";

// export const Container = styled.div`
//   padding: 2rem;
//   margin: 2rem;
//   background-color: rgba(0, 171, 237, 1);
//   min-height: 100vh;
//   font-family: "Arial, Helvetica, sans-serif";
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// export const SearchInput = styled.input`
//   width: 700 px;
//   margin: 0.5rem 0;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 0.938rem;
//   font-size: 0.875rem;
// `;

// export const SelectInput = styled.select`
//   width: 2000 px;
//   margin: 0.5rem 0;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 0.938rem;
//   font-size: 0.875rem;
// `;

// export const ResetButton = styled.button`
//   width: auto;
//   margin: 0.5rem 0;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 0.938rem;
//   font-size: 0.875rem;
//   cursor: pointer;
// `;

import { Link } from "react-router-dom";
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

export const SearchInput = styled.input`
  width: 200px; /* Sin espacio antes de px */
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  font-size: 0.875rem;
`;

export const SelectInput = styled.select`
  width: 200px; /* Sin espacio antes de px */
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  font-size: 0.875rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const ResetButton = styled.button`
  width: auto;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const LoginButton = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.938rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: rgba(177, 234, 163, 1);
  text-decoration: none;
`;
