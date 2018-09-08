import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_WHOLE_ITEM } from '../actions/types';

const initialState = [];

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem._id === item._id)[0];
const emptyCart = (cart, item) => cart.filter(cartItem => cartItem._id !== item._id);

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...emptyCart(cart, item), { ...item, quantity: 1 }]
    : [...emptyCart(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
};

const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...emptyCart(cart, item)]
    : [...emptyCart(cart, item), {...item, quantity: item.quantity - 1}]
};

const removeWholeItem = (cart, item) => {
  return [...emptyCart(cart, item)]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case REMOVE_FROM_CART: 
      return removeFromCart(state, action.payload);
   case REMOVE_WHOLE_ITEM:
      return removeWholeItem(state, action.payload) 
    default:
      return state;
  }
};


