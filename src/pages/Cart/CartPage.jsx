import React from "react";
import EmptyCart from "./components/EmptyCart";
import CartList from "./components/CartList";

const CartPage = () => {
  const cartListLength = 2;
  return (
    <main>
      <div>{cartListLength ? <CartList /> : <EmptyCart />}</div>
    </main>
  );
};

export default CartPage;
