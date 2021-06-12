import React from "react";
import logo from "../../logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import "../../styles/navbar/navbar.css";

import ListItem from "../ListItemNav/listItemNav";


function NavBar() {
  
  const links = ["inicio", "tecnología", "hogar", "moda", "mas"];

  return (
    <nav>
      <a href="/">
        <img src={logo} className="Logo-Ec" alt="logo" />
        
      </a>
      <h2 className="title">GoShop</h2>
      <div className="nav-items">
        <label htmlFor="show-menu" className="nav-button ">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </label>
        <input type="checkbox" id="show-menu" className="nav-button" />

        <ListItem links={links} />
        <CartWidget />
    
      </div>
    </nav>
  );
}

export default NavBar;
