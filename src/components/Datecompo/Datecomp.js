import React from "react";

function Datecomp() {
  return (
    <div className="container" style={{ height: "50vh" }}>
      <p className="h2 text-center font-weight-bold mt-5">IMPORTANT DATES</p>
      <div className="row justify-content-center">
        <div className="col-md-6 card m-3 mt-4 m-md-5 p-2 pt-3 p-md-5">
          <p>
            <span className="font-weight-bold">Paper Submission </span> &emsp;:
            June 15 - July 15, 2022
          </p>
          <p>
            <span className="font-weight-bold">
              Intimation of Paper Acceptance
            </span>
            &emsp; : August 30, 2022
          </p>
          <p>
            <span className="font-weight-bold"> Registration</span>&emsp; :
            September 1 - September 30, 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Datecomp;
