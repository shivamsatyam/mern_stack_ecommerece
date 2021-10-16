import React,{useState} from "react";
import ecommerce from "../images/ecommerce.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";

import "../css/menubar.css";
const menuData = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Products",
    link: "Products",
  },
  {
    name: "contact",
    link: "/contact",
  },
  {
    name: "about",
    link: "/about",
  },
];

function MenuBar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [menuColor, setMenuColor] = useState("#fff");
    const [showMenu,setShowMenu] = useState(false)
  
    const openMenuModal = () => {
      console.log("openIng modal");
      setOpenMenu(!openMenu)
      setShowMenu(!showMenu)
    };
  
  return (
    <>
      <div
        className="hamburger"
        onMouseMove={() => setMenuColor("red")}
        onMouseLeave={() => setMenuColor("#fff")}
        onClick={openMenuModal}
      >
        {openMenu ? (
          <GiCrossMark size={45} color={"red"} />
        ) : (
          <AiOutlineMenuUnfold size={45} color={"red"} />
        )}
      </div>

      <div className="menubar" style={{ display: `${showMenu ? "flex" : "none"}` }}>
        <div className="menubar_img">
          <img src={ecommerce} alt="ecommerce" />
        </div>

        <div className="menubar_links">
          {menuData.map((item, index) => {
            return <a href={item.link}>{item.name}</a>;
          })}
        </div>
        <div className="menubar_logo">
          <a href="/search">
            <AiOutlineSearch size={25} color={"black"} />
          </a>
          <a href="/contact">
            <IoMdContact size={25} color={"black"} />
          </a>
          <a href="/cart">
            <MdAddShoppingCart size={25} color={"black"} />
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
