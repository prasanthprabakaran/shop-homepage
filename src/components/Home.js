import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import "./styles.css"

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="productsContainer ">
          <ProductList />
      </div>
    </div>
  );
};

export default Home;
