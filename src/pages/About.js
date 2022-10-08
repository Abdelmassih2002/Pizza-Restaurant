import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pizza is all about quality you can trust. As one of the original founding Pizza brands and 
        the 3rd largest Pizza chain in India, our sole mission is making the freshest,
        tastiest and funnest Pizza around.Our classic pan pizza will always be a fan favourite,
        with a soft and chewy crust perfectly balancing out the healthy tomato pure
        and mozzarella - cheddar blended cheese.Our authentic Italian crust for those who would 
        prefer a light and airy crust to more fully enjoy the toppings. Thin, light and delicious.
        Our newest addition of Puree sauces will blow your mind. Chose between a spicy buffalo,
        sweet bbq, tangy chipotle can creamy makhni to perfectly compliment your toppings and crust.
        Our suggestions of combinations might be helpful but ultimately the power lies with you.
        </p>
      </div>
    </div>
  );
}

export default About;
