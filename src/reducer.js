import data from "./data.json";
import { ADD_CART, REMOVE_CART } from "./actionTypes";
const INITIAL_STATE = {
  products: data.products,
  cart: {},
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART:
      console.log(action);
      return {
        ...state,
        cart: { ...state.cart, [action.id]: state.cart[action.id] + 1 || 1 },
      };
    case REMOVE_CART:
      console.log(state.cart);
      if (state.cart[action.id] > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.id]: state.cart[action.id] - 1,
          },
        };
      } else {
        let newCart = { ...state.cart };
        delete newCart[action.id];
        return {
          ...state,
          cart: { ...newCart },
        };
      }
    default:
      console.log(state);
      return state;
  }
}

export default reducer;
