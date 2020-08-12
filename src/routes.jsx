import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ItemList from "./ItemList";
import Cart from "./Cart";

function Routes() {
  return (
    <div className="mt-5">
      <Switch>
        <Route exact path="/">
          <ItemList></ItemList>
        </Route>
        <Route exact path="/products">
          <Redirect to="/"></Redirect>
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Route>cant find</Route>
      </Switch>
    </div>
  );
}

export default Routes;
