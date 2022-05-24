import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BuyingOptions from "./BuyingOptions";

const ProductImage = () => {
  return (
    <>
      <div className="productContainer">
        <div className="left">
          <Carousel className="carousel">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/TEABOX-KADAK-CHAI-TIN_1024x.jpg?v=1641116494" />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/KADAK-IMAGE-2_1024x.jpg?v=1641116494" />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/KADAK-IMAGE-3_1024x.jpg?v=1641116494" />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/KADAK-CHAI-BACK-IMAGE_1024x.jpg?v=1646389194" />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/Kadak_11_1_1024x.jpg?v=1646389194" />
            </div>
          </Carousel>
        </div>
        <div className="right">
          <h3>Teabox Kadak (CTC) Chai</h3>
          <div className="ratting">
            <a href="#">Chai</a>
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>(50)
            </div>
          </div>
          <ul>
            <li>Elevate your everyday experience with the freshest chai</li>
            <li>Blended with long Assam golden tips & whole leaf black tea</li>
            <li>See the highest grade CTC teas & no hidden flavors inside</li>
            <li>Sourced fresh from tea gardens of Assam & Dooars</li>
          </ul>
          <span>Buying Options</span>
          <BuyingOptions />
        </div>
      </div>
    </>
  );
};

export default ProductImage;
