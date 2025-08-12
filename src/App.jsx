import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Starfield from "./components/Starfield";

function App() {
  return (
    <div className="relative min-h-screen bg-blue-900 text-white">
  <div className="absolute inset-0 z-0">
    <Starfield />
  </div>

  <div className="relative z-10">
    <Navbar />
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="services"><Services /></section>
    <section id="feedback"><Feedback /></section>
    <section id="contact"><Contact /></section>
  </div>
</div>
  );
}

export default App;
