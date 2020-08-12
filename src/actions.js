import { ADD_CART, REMOVE_CART } from "./actionTypes";

export function addItem(id) {
  return { type: ADD_CART, id };
}

export function removeItem(id) {
  return { type: REMOVE_CART, id };
}
