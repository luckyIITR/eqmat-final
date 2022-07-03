import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import TextBox from "./Homecompo/TextBox";
import AboutCon from "./AboutCompo/AboutCon";
import Footer from "./Homecompo/Footer";

function Home() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
        <TextBox />
      </div>
      <AboutCon />
      <Footer />
    </div>
  );
}

export default Home;
