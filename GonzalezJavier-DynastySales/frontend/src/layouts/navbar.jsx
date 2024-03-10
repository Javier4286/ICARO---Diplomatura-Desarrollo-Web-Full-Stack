import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserLogin from "../global/useUserLogin";

function Navbar() {
  const { user, setIsLogged, setIsAdmin, clearUser } = useUserLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogged(false);
    setIsAdmin(false);
    clearUser();
    navigate("/");
  };

  const ButtonCreateProduct = () => {
    if (user.isAdmin) {
      return (
        <Link to="/create">
          {" "}
          <button>
            <img
              src="https://icons.iconarchive.com/icons/fasticon/isimple-system/48/cd-new-icon.png"
              alt=""
            />
            Create product
          </button>
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {!user.isAdmin && (
        <Link to="/cart">
          <img
            src="https://ps.w.org/added-to-cart-popup-woocommerce/assets/icon-256x256.png?rev=1588875"
            alt="Go to Cart"
            style={{ width: "30px", marginRight: "10px" }}
          />
          <p>Go to Cart</p>
        </Link>
      )}
      <ButtonCreateProduct />{" "}
      <button onClick={handleLogout}>
        {" "}
        <img
          src="https://www.iconshock.com/image/Vista/Communications/sign_out"
          alt=""
        />{" "}
        Sign off
      </button>
    </div>
  );
}

export default Navbar;
