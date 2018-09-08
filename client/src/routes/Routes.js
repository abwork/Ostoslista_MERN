import React from 'react';

import { Switch, Route } from 'react-router-dom';

// components
import Home from '../containers/Home/Home';
import Cart from '../containers/Cart/Cart';


const Routes = () => {
  return (
  <Switch>
    <Route path="/" component={ Home } exact />  
    <Route path="/cart" component={ Cart } exact />      
  </Switch>
  );
};

export default Routes;