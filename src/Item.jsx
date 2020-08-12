import React from "react";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./actions";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";

function Item({ id, name, price, description, image_url, number, isCart }) {
  const dispatch = useDispatch();
  const add = (id) => dispatch(addItem(id));
  const remove = (id) => dispatch(removeItem(id));

  return (
    <Col sm="4" className="mb-2">
      <Card body>
        <Link d-block to={`/products/${id}`}>
          <CardImg
            top
            className={"img-fluid"}
            style={{ maxHeight: "200px", width: "auto" }}
            src={image_url}
            alt={name}
          />
        </Link>

        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{price}</CardSubtitle>
        <CardText>{number}</CardText>
        <Button onClick={() => add(id)}>add</Button>
        {isCart && <Button onClick={() => remove(id)}>remove</Button>}
      </Card>
    </Col>
  );
}

export default Item;
