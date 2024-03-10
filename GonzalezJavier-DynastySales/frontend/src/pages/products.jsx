import React, { useEffect, useState } from "react";
import {
  Container,
  FiltersContainer,
  LoginButton,
  ResetButton,
  SearchInput,
  SelectInput,
} from "../components/product/searchBarStyles";
import { Link } from "react-router-dom";
import useCart from "../global/useProducts";
import useUserLogin from "../global/useUserLogin";
import ProductGrid from "../components/product/productGrid";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("asc");
  const [loading, setLoading] = useState(true);
  const { isLogged } = useUserLogin();
  const { addProduct } = useCart();

  const handleAddToCart = (product) => {
    addProduct(product);
    console.log("Producto agregado al carrito:", product);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setCategory("");
    setSortBy("asc");
  };

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setFilteredProducts(data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = products.filter((product) => {
        const categoryMatch =
          category === "" ||
          product.Categorie.toLowerCase() === category.toLowerCase();
        const albumMatch = product.Album.toLowerCase().includes(
          searchTerm.toLowerCase()
        );
        const artistMatch = product.Artist.toLowerCase().includes(
          searchTerm.toLowerCase()
        );
        const priceMatch =
          product.Price >= (minPrice !== "" ? minPrice : 0) &&
          product.Price <= (maxPrice !== "" ? maxPrice : Infinity);

        return (albumMatch || artistMatch) && categoryMatch && priceMatch;
      });

      const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "asc") {
          return a.Price - b.Price;
        } else {
          return b.Price - a.Price;
        }
      });

      setFilteredProducts(sorted);
    };

    applyFilters();
  }, [searchTerm, minPrice, maxPrice, category, sortBy, products]);

  return (
    <Container>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <>
          <img
            src="https://i.ibb.co/j4j2GhM/234651779-57fda175-62bd-4930-909d-052836ccaeaa.png"
            alt="DynastySales"
          />
          <FiltersContainer>
            <SearchInput
              type="text"
              placeholder="Search by Artist or Album"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <SearchInput
                type="number"
                placeholder="Minimal price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <SearchInput
                type="number"
                placeholder="Maximum price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <SelectInput
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              </SelectInput>
              <SelectInput
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="asc">Ascending Price</option>
                <option value="desc">Descending Price</option>
              </SelectInput>

              <ResetButton onClick={handleResetFilters}>
                Reset Filters
              </ResetButton>
            </div>
          </FiltersContainer>
          {!isLogged && <LoginButton to="/login">Log In</LoginButton>}
          {filteredProducts.length > 0 ? (
            <ProductGrid
              products={filteredProducts}
              handleAddToCart={handleAddToCart}
            />
          ) : (
            <p>No products were found with the selected filters.</p>
          )}
        </>
      )}
    </Container>
  );
}

export default Products;
