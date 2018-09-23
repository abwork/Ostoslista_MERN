import React, { Component } from 'react';
import Modal from 'react-modal';
import Buy from '../../components/Buy/Buy';
import './Checkout.css';

import { connect } from 'react-redux';

const customStyles = {
  content: {
    backgroundColor: "#fff",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};


class Checkout extends Component {
  state = {
    name: "",
    email: "",
    country: "",
    modalIsOpen: false
  };

  validate = (name, email, country) => {
    const errors = {
      name: /^[a-zA-Z ,.'-]{3,30}$/.test(name)
        ? ""
        : "only alphabetic characters",
      email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
        ? ""
        : "invalid email address",
      country: /^[a-zA-Z ,.'-]{3,30}$/.test(country)
        ? ""
        : "only alphabetic characters",
    }
    return errors;
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {

    if (!this.props.cart.length)
      return <Buy message={"Cart is empty to checkout!"} />

    return (
      <div className="Checkout-Wrapper">
        <h1 className="Checkout-Title">Checkout</h1>
        <form className="Checkout-Form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={this.onChangeHandler}
            className="Checkout-Input"
          />
          <button
            className="product-button Checkout-Button"
            onClick={this.openModal}
          >
            Place order
          </button>
        </form>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Thanks"
          ariaHideApp={false}
        >
          <i className="fa fa-times Close-Modal" onClick={this.closeModal}></i>
          <p style={{ color: "#000", padding: '20px' }}>
            Thanks <strong>{this.state.name}</strong> for shopping!
          </p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, null)(Checkout);
