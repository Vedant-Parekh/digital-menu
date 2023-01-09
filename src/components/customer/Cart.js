import React from "react";
import CartItemCard from "../CartItemCard";
export default function Cart() {
  return (
    <div className="container rounded border my-3">
      <h1>Cart</h1>
      <CartItemCard itemName="Pav Bhaji" price="25" />
      <CartItemCard />
      <CartItemCard />
      <button className="btn btn-primary mb-2">Confirm Order</button>
      <button className="btn btn-danger mb-2 mx-3">Reset Cart</button>
    </div>
  );
}
