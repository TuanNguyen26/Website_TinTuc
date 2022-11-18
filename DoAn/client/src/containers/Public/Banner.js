import React from "react";
import bannerlogo from "../../assets/banner-logo.png";

function Banner() {
  return (
    <div>
      <div class="h-120 bg-cover w-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <img src={bannerlogo}></img>
      </div>
    </div>
  );
}

export default Banner;