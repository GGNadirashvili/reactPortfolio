import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Error from "./components/Error/Error";
import Testimonial from "./components/Testimonial/Testimonial";
// import ScrollToTop from "./components/Scroll/ScrollToTop";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <ScrollToTop /> */}
    </Router>
  );
}

export default App;
