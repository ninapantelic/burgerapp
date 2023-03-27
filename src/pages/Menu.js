import React from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { MenuList } from "../helpers/MenuList";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            ></MenuItem>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
