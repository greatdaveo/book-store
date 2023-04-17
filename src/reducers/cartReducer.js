export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };

    case "CLEAR_CART":
      return {
        ...state,
        cartList: payload.products, //[] can also be used instead of payload.products
        totalPrice: payload.totalPrice, //0 can also be used instead of payload.totalPrice
      };

    case "UPDATE_PRICE":
      return {
        ...state,
        totalPrice: payload.addedTotal,
        totalPrice: payload.subtractedTotal,
      };

    default:
      throw new Error("No case found!");
  }
};
