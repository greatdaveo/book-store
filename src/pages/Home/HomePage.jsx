import React from "react";
import Hero from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimonial />
    </main>
  );
};

export default Home;
