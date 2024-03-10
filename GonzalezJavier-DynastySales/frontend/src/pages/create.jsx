import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  InputContainer,
  Input,
  ErrorContainer,
} from "../components/product/productStyles";

function CreateProduct() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [producto, setProducto] = useState({
    Artist: "",
    Album: "",
    Year: "",
    Price: "",
    Categorie: "",
    Url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (errorData.ERRORS && errorData.ERRORS.length > 0) {
          setError(errorData.ERRORS[0].msg);
        } else {
          setError(errorData.error || "An unexpected error occurred");
        }

        return;
      }

      const data = await response.json();

      setProducto(data);
      navigate("/products");
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <FormContainer>
      <h2>Create product</h2>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label>
            Artist:
            <Input
              type="text"
              id="Artist"
              name="Artist"
              value={producto.Artist}
              onChange={handleChange}
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Album:
            <Input
              type="text"
              id="Album"
              name="Album"
              value={producto.Album}
              onChange={handleChange}
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Year:
            <Input
              type="number"
              id="Year"
              name="Year"
              value={producto.Year}
              onChange={handleChange}
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Price:
            <Input
              type="number"
              id="Price"
              name="Price"
              value={producto.Price}
              onChange={handleChange}
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Categorie:
            <select
              id="Categorie"
              name="Categorie"
              value={producto.Categorie}
              onChange={handleChange}
              required
            >
              <option value="">Select Categorie</option>
              <option value="Blues">Blues</option>
              <option value="Classical">Classical</option>
              <option value="Country">Country</option>
              <option value="Disco">Disco</option>
              <option value="Electronic">Electronic</option>
              <option value="Folk">Folk</option>
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="Jazz">Jazz</option>
              <option value="Metal">Metal</option>
              <option value="Pop">Pop</option>
              <option value="Punk">Punk</option>
              <option value="R&B">R&B</option>
              <option value="Reggae">Reggae</option>
              <option value="Rock">Rock</option>
            </select>
          </label>
        </InputContainer>
        <InputContainer>
          <label>
            Url:
            <Input
              type="text"
              id="Url"
              name="Url"
              value={producto.Url}
              onChange={handleChange}
              required
            />
          </label>
        </InputContainer>
        <InputContainer>
          <button type="submit" className="button-style">
            Create product
          </button>{" "}
        </InputContainer>
        {error && <ErrorContainer>{error}</ErrorContainer>}
      </form>
    </FormContainer>
  );
}

export default CreateProduct;
