import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productData, setProductData] = useState({
    Artist: "",
    Album: "",
    Year: "",
    Price: "",
    Categorie: "",
    Url: "",
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProductData(response.data.data);
      } catch (err) {
        console.error("Error loading product data:", err);
      }
    };

    fetchData();
  }, [id]);

  const handleEditProduct = () => {
    axios
      .put(`/api/products/${id}`, productData)
      .then(() => {
        setUpdateSuccess(true);

        setTimeout(() => {
          navigate("/products");
        }, 2000);
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setValidationErrors(err.response.data.ERRORS);
        } else {
          console.error("Error updating product:", err);
        }
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <label>Artist:</label>
      <input
        type="text"
        value={productData.Artist}
        onChange={(e) =>
          setProductData({ ...productData, Artist: e.target.value })
        }
      />
      <label>Album:</label>
      <input
        type="text"
        value={productData.Album}
        onChange={(e) =>
          setProductData({ ...productData, Album: e.target.value })
        }
      />
      <label>Year:</label>
      <input
        type="number"
        value={productData.Year}
        onChange={(e) =>
          setProductData({ ...productData, Year: e.target.value })
        }
      />
      <label>Price:</label>
      <input
        type="number"
        value={productData.Price}
        onChange={(e) =>
          setProductData({ ...productData, Price: e.target.value })
        }
      />
      <label>Categorie:</label>
      <select
        value={productData.Categorie}
        onChange={(e) =>
          setProductData({ ...productData, Categorie: e.target.value })
        }
      >
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
      <label>URL:</label>
      <input
        type="text"
        value={productData.Url}
        onChange={(e) =>
          setProductData({ ...productData, Url: e.target.value })
        }
      />
      <button onClick={handleEditProduct}>Save Changes</button>

      {validationErrors && (
        <div>
          <p>Error updating product:</p>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        </div>
      )}

      {updateSuccess && <p>Product data updated successfully!</p>}
    </div>
  );
};

export default EditProductPage;
