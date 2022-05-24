import React from "react";
import logo from "../images/logo.webp";

const Navbar = () => {
  return (
    <>
      <div className="topHeader">
        <p>
          <span className="green">CASH ON DELIVERY</span> now available on
          orders below INR 3000
        </p>
      </div>
      <nav>
        <div className="navbar">
          {/* div  */}
          <div className="mobile-nav">
            <div className="mobile-nav-icons">
              <i class="fa-solid fa-bars"></i>
              <p>Menu</p>
            </div>
            <div className="mobile-nav-icons">
              <i class="fa-solid fa-house"></i>
              <p>Home</p>
            </div>
            <div className="mobile-nav-icons">
              <i class="fa-solid fa-magnifying-glass"></i>
              <p>Search</p>
            </div>
            <div className="mobile-nav-icons">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
            </div>
            <div className="mobile-nav-icons">
              <i class="fa-solid fa-user"></i>
              <p>Profile</p>
            </div>
          </div>
          {/* div  */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="navList">
            <li className="green">First Flush</li>
            <li>Chai</li>
            <li>Green</li>
            <li className="green">Hearble</li>
            <li>Darjeeling</li>
            <li>Shop By +</li>
            <li>Gifts</li>
            <li>Sale</li>
          </ul>
          <div className="icons">
            <i className="fa-solid fa-user  ">
              <p>LOGIN</p>
            </i>
            <i className="fa-solid fa-cart-shopping  ">
              <p>CART</p>
            </i>
            <i className="fa-solid fa-magnifying-glass  ">
              <p>SEARCH</p>
            </i>
          </div>
        </div>
      </nav>
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="#home">Home {">"} </a>
            <a href="#home">Black {">"} </a>
            <a href="#home">Teabox Kadak (CTC) Chai</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
