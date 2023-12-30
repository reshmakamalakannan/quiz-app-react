import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import "./components/style.css";
import Footer from "./components/Footer";
import thank from "./components/images/thank.GIF";
const Thank = () => (
  <center>
    <div>
      {React.createElement("img", {
        src: thank,
        width: "1200px",
        height: "120px",
      })}
    </div>
  </center>
);
const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <br />
      <Thank />
    </div>
  </Router>
);
export default App;
