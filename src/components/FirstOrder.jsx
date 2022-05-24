import React from "react";

const FirstOrder = () => {
  return (
    <div>
      <div className="first-order">
        <h2>Save an additional 10% on your first order</h2>
        <div className="first-order-inputs">
          <input type="email" placeholder="Your Email" />
          <button>Get Code</button>
        </div>
      </div>
      <div className="crafter-master">
        <h2>CRAFTED BY TEA MASTERS</h2>
        <p className="tea-years">with 65+ years of collective experience</p>
        <div className="tea-img">
          <div className="tea">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/StringentQualtiy_372x240_ec928967-cfe0-48c2-bea4-c5e279ee1793_480x.jpg?v=1627726784"
              alt=""
            />
            <h3>Stringent Quality Checked</h3>
            <span>
              Our teas goes through rigorous 8-step quality checklist to get the
              final approval
            </span>
          </div>
          <div className="tea">
            <img
              src="https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927"
              alt=""
            />
            <h3>Nurtured at every step</h3>
            <span>
              Keeping the 4 enemies of Tea at bay - Light, Moisture, Heat &
              Oxygen
            </span>
          </div>
          <div className="tea">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/Finest_Cup_480x.jpg?v=1627726880"
              alt=""
            />
            <h3>Nothing but the finest cup</h3>
            <span>
              Our teas goes through rigorous 8-step quality checklist to get the
              final approval
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstOrder;
