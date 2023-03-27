import React from "react";
import AboutUs from "../assets/about.jpg";
import "../styles/About.css";

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
          is what has defined our brand for more than 50 successful years. A
          hamburger, or simply burger, is a sandwich consisting of
          fillings—usually a patty of ground meat, typically beef—placed inside
          a sliced bun or bread roll. Hamburgers are often served with cheese,
          lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as
          ketchup, mustard, mayonnaise, relish, or a "special sauce," often a
          variation of Thousand Island dressing; and are frequently placed on
          sesame seed buns. A hamburger patty topped with cheese is called a
          cheeseburger. The term burger can also be applied to the meat patty on
          its own, especially in the United Kingdom, where the term patty is
          rarely used or can even refer to ground beef.
        </p>
      </div>
    </div>
  );
}

export default About;
