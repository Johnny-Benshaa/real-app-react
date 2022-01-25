import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Signup from "./components/signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="minh-900">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
