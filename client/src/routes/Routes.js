import React from 'react';

import { Switch, Route } from 'react-router-dom';

// components
import Home from '../containers/Home/Home';
import Cart from '../containers/Cart/Cart';
import Checkout from '../containers/Checkout/Checkout';


const Routes = () => {
  return (
  <Switch>
    <Route path="/" component={ Home } exact />  
    <Route path="/cart" component={ Cart } exact />
    <Route path="/checkout" component={ Checkout } exact />          
  </Switch>
  );
};

export default Routes;