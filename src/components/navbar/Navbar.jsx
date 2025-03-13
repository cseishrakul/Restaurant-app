import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} className="logo" alt="" />
      </Link>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("items")}
          className={menu === "items" ? "active" : ""}
        >
          Items
        </li>
        <li
          onClick={() => setMenu("app")}
          className={menu === "app" ? "active" : ""}
        >
          App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount()===0?"":'dot'}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
