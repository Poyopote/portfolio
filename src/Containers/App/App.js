import React from "react";
import Home from '../../Components/sections/Home/Home';
import Projects from "../../Components/sections/Projects/Projects";
import About from "../../Components/sections/About/About";
import BackToTopButton from "../../Components/common/BackToTopButton";
import Skill from "../../Components/sections/Skill/Skill";
import Footer from "../../Components/sections/Footer";


function App() {
  return (
    <>
      <Home />
      <main>
        <About/>
        <Projects/>
        <Skill/>
      </main>
      <Footer/>
      <BackToTopButton/>
    </>

  );
}

export default App;