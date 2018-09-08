import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Buy.css";

const Buy= ({message="Cart is empty!"}) => (
  <div className="Cart-Empty-Wrapper">
    {" "}
    <h1 className="Cart-Empty">{message}</h1>{" "}
    <Link to="/" className="Go-To-Products">
      Please buy something.
    </Link>
  </div>
);

Buy.propTypes = {
  message: PropTypes.string
};

export default Buy;