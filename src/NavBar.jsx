import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  NavbarText,
} from "reactstrap";

function NavBar() {
  const products = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  let cartTotal = () => {
    if (Object.values(cart).length > 0) {
      return Object.values(cart).reduce((acc, curr) => (acc += curr));
    }
    return 0;
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink to="/">Shoply</NavLink>
        {/* <NavbarBrand to="/">Shoply</NavbarBrand> */}
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="mr-2" to="/cart">
              Cart
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>{`${cartTotal()}  items | ${0}`}</NavbarText>
      </Navbar>
    </div>
  );
}

export default NavBar;
