import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    
<BrowserRouter>
<Navbar></Navbar>
  <Routes>
    <Route>
     <About path="/about">element={About}</About>
    </Route>
    <Route>
     <About path="/projects">element={Projects}</About>
    </Route>
    <Route>
     <About path="/contact">element={Contact}</About>
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
