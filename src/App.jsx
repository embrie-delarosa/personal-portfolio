import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/personal-portfolio" element={<Home />} />
      <Route path="/personal-portfolio/about" element={<About />} />
      <Route path="/personal-portfolio/projects" element={<Projects />} />
      <Route path="/personal-portfolio/skills" element={<Skills />} />
      <Route path="/personal-portfolio/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
