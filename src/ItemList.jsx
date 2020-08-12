import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";

function ItemList() {
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  console.log(products);
  const items = Object.entries(products).map(([key, value]) => (
    <Item
      key={key}
      id={key}
      name={value.name}
      price={value.price}
      image_url={value.image_url}
    ></Item>
  ));

  let cartTotal = () => {
    if (Object.values(cart).length > 0) {
      return Object.values(cart).reduce((acc, curr) => (acc += curr));
    }
    return 0;
  };
  return <div className="d-flex flex-row  flex-wrap">{items}</div>;
}

export default ItemList;
