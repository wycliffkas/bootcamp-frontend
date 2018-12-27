import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <NavLink className="navbar-brand" to="/">Stack Overflow Lite</NavLink>
    </div>   

    <ul className="nav navbar-nav navbar-right">
      <li><NavLink to="/register"> Register</NavLink></li>
      <li><NavLink to="/login"> Login</NavLink></li>   
    </ul>

    <ul className="nav navbar-nav navbar-right">

    </ul>
 
    
  </div>
</nav>
);
export default Header;