import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

const Products = ({ product, id }) => {
  const [card, setCard] = useState("true");
  return (
    <div key={id} className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>
            {product.title}
            {product.price}
          </Card.Title>
        </Card.Body>
        <div className="p-4 pt-0 bg-transparent">
          <div className="text-center">
            {card === "true" ? (
              <button
                onClick={() => setCard(card === "true" ? "false" : "true")}
                className="btn btn-outline-dark mt-auto"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => setCard(card === "false" ? "true" : "false")}
                className="btn btn-outline-dark mt-auto"
              >
                Remove Item from Cart
              </button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Products;
