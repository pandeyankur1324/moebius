import React from "react";
import "./css/hero.css";

const Hero = () => {
  return (
    <>
      <header className="hero">
        <div className="center-content">
          <h1>ODOP</h1>
          <h3>Unveiling Local Excellence</h3>
          <a href={"/contact"} className="button">
            Contact Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Hero;
