import { useState, useEffect } from "react";

const Cart = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return <div style={{ textAlign: "center" }}>Happy Coding - {name}</div>;
};

export default Cart;