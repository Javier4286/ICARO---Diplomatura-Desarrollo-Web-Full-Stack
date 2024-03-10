import React from "react";

const Card = ({ size, children, orientation }) => {
  const styles = {
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
    padding: size === "lg" ? "2rem" : "0.75rem",
    margin: "1rem",
    width: "20rem",
    display: "flex",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    color: "black",
  };
  return <div style={styles}>{children}</div>;
};

export default Card;
