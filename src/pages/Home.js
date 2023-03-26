import React from "react";
import { Link } from "react-router-dom";

import Banner from "../assets/bur.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1>React Burger</h1>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
