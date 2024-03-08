import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
