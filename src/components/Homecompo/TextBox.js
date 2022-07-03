import React from "react";
import { Link } from "react-router-dom";

function TextBox() {
  return (
    <div className="carouselImage">
      <div className="container pt-5 text-center text-white">
        <h1 style={{ lineHeight: "normal" }} className="font-weight-bold">
          CONFERENCE
          <br /> ON <br />
          EMERGENT PHENOMENA IN QUANTUM MATERIALS
        </h1>

        <p id="iit" style={{ lineHeight: "normal" }} className="mt-5">
          Organized by
        </p>
        <p id="iit" style={{ lineHeight: "normal", fontWeight: "bold" }}>
          Department of Physics, IIT Roorkee
        </p>
        <div>
          <span className="date p-2">October 12-14, 2022</span>
        </div>

        <Link to="/Registration" className="btn mt-5">
          Register Now &#8594;
        </Link>
      </div>
    </div>
  );
}
export default TextBox;
