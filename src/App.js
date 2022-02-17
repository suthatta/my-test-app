import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    
<div>
<Navbar></Navbar>
  <Routes>
    <Route>
     <About path="/about">element={About}</About>
    </Route>
    <Route>
     <Projects path="/projects">element={Projects}</Projects>
    </Route>
    <Route>
     <Contact path="/contact">element={Contact}</Contact>
    </Route>
  </Routes>
</div>
  );
}

export default App;
