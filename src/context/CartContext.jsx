import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const cartInitialState = {
  cartList: [],
  totalPrice: 0,
};

// CartInitialize, Cart context, Cart Provider, useCart

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    const updatedList = state.cartList.concat(product);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
      },
    });
  }

  function removeFromCart(product) {
    const updatedList = state.cartList.filter(
      (cartItem) => cartItem.id !== product.id
    );

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
      },
    });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        totalPrice: 0,
      },
    });
  }

  //   UPDATED PRICE
  function updateTotalPrice() {
    const addedTotal = state.totalPrice + product.price;
    const subtractedTotal = state.totalPrice - product.price;

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        addedTotal: addedTotal,
        subtractedTotal: subtractedTotal,
      },
    });
  }

  const value = {
    cartList: state.cartList,
    totalPrice: state.totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      <>{children}</>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext();

  return context;
};
