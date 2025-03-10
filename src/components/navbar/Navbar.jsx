import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState ("home");
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>setMenu('items')} className={menu==='items'?'active':''}>Items</li>
        <li onClick={()=>setMenu('app')} className={menu==='app'?'active':''}>App</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
