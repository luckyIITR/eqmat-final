import React from "react";
import Nav from "./Homecompo/Nav";
import Logo from "./Homecompo/Logo";
import Footer from "./Homecompo/Footer";

function Abstract() {
  return (
    <div>
      <div className="bg-light">
        <Logo />
        <Nav />
      </div>
      <div className="container mt-5" style={{ height: "60vh" }}>
        <p className="text-center h2 pt-3 mb-5 font-weight-bold">Abstract</p>
      </div>
      <Footer />
    </div>
  );
}

export default Abstract;
