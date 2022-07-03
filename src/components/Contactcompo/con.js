import React from "react";

function con() {
  return (
    <div className="container mt-5" style={{ height: "60vh" }}>
      <p className="text-center h2 pt-3 mb-5 font-weight-bold">
        Contact Information
      </p>
      <div className="row justify-content-between">
        <div className="col-sm-1"></div>
        <div className="col-sm-3 card">
          <p className="font-weight-bold mt-3">Tulika Maitra</p>
          <p>tulika.maitra@ph.iitr.ac.in</p>
        </div>
        <div className="col-sm-3 card">
          <p className="font-weight-bold mt-3">Vivek K. Malik</p>
          <p>vivek.malik@ph.iitr.ac.in</p>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}

export default con;
