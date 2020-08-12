import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, removeItem } from "./actions";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((store) => store.products);
  const { name, price, description, image_url, number } = products[id];
  const dispatch = useDispatch();
  const add = (id) => dispatch(addItem(id));
  const remove = (id) => dispatch(removeItem(id));

  return (
    <Col sm="8" className="m-2 mx-auto">
      <Card body>
        <CardImg top src={image_url} alt={name} />

        <CardTitle>{`${name} $${price}`}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>{number}</CardText>

        <Button onClick={() => add(id)}>add</Button>
        {/* <Button onClick={() => remove(id)}>remove</Button> */}
      </Card>
    </Col>
  );
}

export default ProductDetails;
