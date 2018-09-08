import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => (
  <nav className="NavBar-Wrapper">
    <div>
      <Link to="/">
       <p>Online Shoping Cart</p>
      </Link> 
    </div>
  </nav>
);

export default NavBar;