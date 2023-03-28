import React from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { MenuList } from "../helpers/MenuList";

import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function Menu() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="menu" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
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
    </ThemeContext.Provider>
  );
}

export default Menu;
