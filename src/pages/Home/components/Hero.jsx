import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/hero.avif";
import "../../../styles/Home/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>The Ultimate eBook Store</h1>
        <p>
          CodeBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link to="/products">
          <button>Explore eBooks</button>
        </Link>
      </div>

      <div>
        <img src={HeroImage} alt="" width="600px" />
      </div>
    </section>
  );
};

export default Hero;
