import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

// sum the total price for the items in the cart
const totalPrice = cart => {
  return cart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );
};

const NavBar = props => (
  <nav className="NavBar-Wrapper">
    <div>
      <Link to="/">
       <p>Online Dress Shop</p>
      </Link> 
    </div>
    <Link to="/cart">
      <div className="Cart-Info">
        <span className="Cart-Item-Counter">{props.cart.length}</span>
        <i className="fa fa-shopping-bag"></i>
        <p>Cart: {totalPrice(props.cart)}€</p>
      </div>
    </Link>
  </nav>
);

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(NavBar);

