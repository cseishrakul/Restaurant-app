import React, { useState } from "react";
import "./SignInPopUp.css";
import { assets } from "../../assets/assets";

const SignInPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currState} </h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" className="" />
          )}
          <input type="email" placeholder="Your email address" className="" />
          <input type="password" placeholder="Your Password" className="" />
          <button>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" name="" id="" />
            <p>By continuing this,I agree with terms & conditions</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click Here</span>{" "}
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={()=>setCurrState('Login')}>Click Here</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPopUp;
