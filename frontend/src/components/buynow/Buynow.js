import { Divider } from "@mui/material";
import React from "react";
import Option from "./Option";
import "./buynow.css";
import Subtotal from "./Subtotal";
import Right from "./Right";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all Items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />

          <div className="item_containert">
            <img
              src="https://agribegri.com/productthumbimage/thumb222255_c4492df9ad357161d0acba3289113e0a-09-27-22-09-13-25.jpeg?q=70"
              alt=""
            />
            <div className="item_details">
              <h3>
                Pad Corp Rolling Hose Reel Retractable Hose Reel Portable Garden
                Hose Reels, 8 Function Sprayer Nozzle With 12 Mtr Hideaway Hose
                Reel for Gardening
              </h3>
              <h3>Portable Garden Hose Reels</h3>
              <h3 className="differentprice">₹625.00</h3>
              <p className="unusuall">Usually dispatched in 8 days</p>
              <p>Eligible for FREE Shipping</p>
              <Option />
            </div>
            <h3 className="item_price">₹625.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Buynow;
