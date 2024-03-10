import React from "react";

const Button = ({ size, children }) => {
  const styles = {
    backgroundColor: "green",
    borderRadius: "1.5rem",
    // boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
    padding: size === "lg" ? "2rem" : "0.75rem",
    margin: "1rem",
  };
  return <button style={styles}>{children}</button>;
};

export default Button;
