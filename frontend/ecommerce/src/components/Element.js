import React from "react";
import image from "../logo.svg";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
function Element() {
  return (
    <div className="element">
      <div className="element_image">
        <img src={image} alt="imagess" />
      </div>
      <div className="element_name">WWE 2K20</div>
      <div className="element_stars">
        <AiFillStar size={25} color={"#ffc800"} />
        <AiFillStar size={25} color={"#ffc800"} />
        <AiFillStar size={25} color={"#ffc800"} />
        <AiFillStar size={25} color={"#ffc800"} />
        <AiFillStar size={25} color={"gray"} />
      </div>
      <div className="element_price">
        <BiRupee size={10} color={"orange"} />
        <span>2500</span>
      </div>
    </div>
  );
}

export default Element;
