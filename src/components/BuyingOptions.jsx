import React from "react";

const BuyingOptions = () => {
  return (
    <div className="all-options">
      <div className="offers">
        <div className="offerTin">Save 4%</div>
        <div className="offerCarton">Save 10%</div>
      </div>
      <div className="options">
        <div className=" tinOption">
          <p>
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/tin-green.svg?v=14594836206862621176"
              alt="tin"
            />
            Tin
          </p>
          <p>250 gm | 100 Cups</p>
        </div>
        <div className="cartonOption ">
          <p>
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/mono-carton.svg?v=984564067371085175"
              alt="box"
            />
            Mono Carton
          </p>
          <p>1 Kg | 400 Cups</p>
        </div>
      </div>
      <div className="price">
        <p>
          <span>₹ 250</span> ₹ 238
        </p>
        <button>Save 4%</button>
      </div>
      <div className="order">
        <div className="quantity">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button className="sipnow">SIP NOW</button>
      </div>
      <div className="review">
        <p>
          “The experience/taste was Refreshing, Kadak and Enjoyable. A must try
          Item” <span>-Randhir</span>
        </p>
      </div>
    </div>
  );
};

export default BuyingOptions;
