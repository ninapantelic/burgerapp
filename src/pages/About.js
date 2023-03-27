import React from "react";
import AboutUs from "../assets/about.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutUs})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Every day, more than 11 million guests visit Burger React restaurants
          around the world. And they do so because our restaurants are known for
          serving high-quality, great-tasting, and affordable food. Founded in
          1954, Burger React is the second largest fast food hamburger chain in
          the world. The original Home of the Whopper, our commitment to premium
          ingredients, signature recipes, and family-friendly dining experiences
          is what has defined our brand for more than 50 successful years.
        </p>
      </div>
    </div>
  );
}

export default About;
