import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Committee from "./components/Committee";
import Speakers from "./components/Speakers";
import Programs from "./components/Programs";
import Abstract from "./components/Abstract";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/abstract" element={<Abstract />} />
      </Routes>
    </Router>
  );
}

export default App;
