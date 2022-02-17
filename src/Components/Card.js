import React from "react";
// import Chips from "../Images/Chips.svg";
// import Mastercard from "../Images/Mastercard.svg";
import Chips from "../Logos/Chips.svg";
import Mastercard from "../Logos/Mastercard.svg";
import Stripe from "../Logos/Stripe.svg";
import Visa from "../Logos/Visa.svg";

import "../Styles/Card.css";

function Card({
  label,
  customerName,
  cardNumber,
  expiryDate,
  backgroundImage,
}) {
  return (
    <div>
      <div
        className="cardFrame"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="rows">
          <div className="rowTop">
            <span className="topLeft"> {label}</span>
            <img src={Chips} className="wifiIcon" />
          </div>

          <div className="rowMiddle">
            <span className="name">name</span>
            <div className="cardDetail">
              <span className="customerName">{customerName}</span>
              <span className="cardNumber">{cardNumber}</span>
            </div>
          </div>

          <div className="rowEnd">
            {/* <div className="cardDetail"> */}
            <span className="customerName">EXP {expiryDate}</span>
            <img src={Visa} className="paymentMethod" />

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
