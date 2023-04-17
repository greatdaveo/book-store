import React from "react";
import EmptyCart from "./components/EmptyCart";
import CartList from "./components/CartList";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cartList } = useCart();
  // const cartListLength = 2;

  return (
    <main>
      <div>{cartList.length ? <CartList /> : <EmptyCart />}</div>
    </main>
  );
};

export default CartPage;
