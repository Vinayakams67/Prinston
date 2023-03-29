import React from "react";

const Right = () => {
  return (
    <div className="right_buy">
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery</p> <br />
        <span style={{ color: "#565959" }}>
          Select this option at checkout. Details
        </span>
        <h3>
          Subtotal (1 items) :{" "}
          <span style={{ fonteWeight: 700, color: "#111" }}>₹625.00</span>
          <button className="rightbuy_btn">Proceed to Buy</button>
          <div className="emi">EMI available</div>
        </h3>
      </div>
    </div>
  );
};

export default Right;
