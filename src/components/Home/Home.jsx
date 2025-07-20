import React from "react";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import Choose from "../Choose/Choose";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Team />
      <Choose />
  
      <Contact />
   
    </div>
  );
};

export default Home;
