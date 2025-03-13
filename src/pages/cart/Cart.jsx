import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qunatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="">
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p> ${item.price} </p>
                  <p> {cartItems[item._id]} </p>
                  <p> ${item.price * cartItems[item._id]} </p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    {" "}
                    x{" "}
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      
      <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="">
              <div className="cart-total-details">
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
              </div>
              <hr />
            </div>
            <button className="" onClick={()=>navigate('/order')}>Proceed To Checkout</button>
            {/* <a href="/order" className="">Proceed To Checkout</a> */}
          </div>
          <div className="cart-promocode">
            <div className="">
              <p>If you have a promo code,Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;
