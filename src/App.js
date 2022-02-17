import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
<Navbar></Navbar>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/projects"element={<Projects />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/" element={<Home />} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
