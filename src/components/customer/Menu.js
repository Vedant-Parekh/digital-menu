import { useState, useEffect } from "react";

const Menu = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Item 1, Item 2, Item 3");
  }, []);

  return <div style={{ textAlign: "center" }}>Menu - {name}</div>;
};

export default Menu;