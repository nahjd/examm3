import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../../pages/Hero/Hero";
import About from "../../pages/About/About";
import Menu from "../Menu/Menu";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
    </>
  );
};

export default Home;
