import React from "react";
import BackToTopButton from "../../Components/common/BackToTopButton";
import About from "../../Components/sections/About/About";
import Footer from "../../Components/sections/Footer";
import Home from "../../Components/sections/Home/Home";
import Projects from "../../Components/sections/Projects/Projects";
import Skill from "../../Components/sections/Skill/Skill";

function App() {
  return (
    <>
      <Home />
      <main>
        <About />
        <Projects />
        <Skill />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
