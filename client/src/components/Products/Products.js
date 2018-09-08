import React from "react";
import "./Products.css";
import PropTypes from 'prop-types';
import Product from "../Product/Product";


const Products = props => {
  const productList = props.products.map( (product, i) => (
    <Product
      key={product._id}
      {...product}
    />
  ));
  return <div className="Products-Container">
    <div className="Products-Wrapper">
      {productList}
    </div>
  </div>;
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
