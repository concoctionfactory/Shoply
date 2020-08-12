import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const showCart = () => {
    console.log(Object.keys(cart));
    if (Object.keys(cart).length === 0) {
      return (
        <div>
          <p>cart empty</p>
          <Link to="/">click here to add </Link>
        </div>
      );
    }
    let res = Object.entries(cart).map(([key, value]) => {
      console.log(key, value);

      const { name, price, image_url } = products[key];
      return (
        <Item
          key={key}
          id={key}
          name={name}
          price={price}
          number={value}
          image_url={image_url}
          isCart={true}
        ></Item>
      );
    });
    return res;
  };
  return (
    <div>
      <div className="d-flex flex-column  align-items-center">{showCart()}</div>
    </div>
  );
}

export default Cart;
