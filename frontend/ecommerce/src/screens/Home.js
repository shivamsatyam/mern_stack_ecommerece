import React, { useState } from "react";
import { BiMouse } from "react-icons/bi";
import "../css/Home.css";
import Element from "../components/Element";
import "../css/element.css";

import MenuBar from "../screens/MenuBar"

function Home() {

  return (
      <>
      <MenuBar/>
    <div className="home">
     
      <div
        className="home__header"
        style={{ backgroundImage: "url('/public/img/cover.e2edeab1.jfif')" }}
      >
        <p>Welcome to Ecommerce</p>
        <h2>Find amazing products below</h2>

        <button className="home__header__button">
          <p>Scroll</p>
          <BiMouse color={"#000"} size={12} />
        </button>
      </div>

      <div className="home_feature">
        <div className="home_feature_product">Featured Products</div>
      </div>

      <div className="home_element">
        <div className="home_element_main">
          <Element />
          <Element />
          <Element />
          <Element />
          <Element />
          <Element />
          <Element />
          <Element />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
