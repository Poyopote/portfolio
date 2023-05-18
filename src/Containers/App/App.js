import React from "react";
import Home from '../../Components/sections/Home/Home';
import Projects from "../../Components/sections/Projects/Projects";
import About from "../../Components/sections/About/About";
import BackToTopButton from "../../Components/common/BackToTopButton";


function App() {
  return (
    <>
      <Home />
      <main>
        <About/>
        <Projects/>
        <About/>
      </main>
      <BackToTopButton/>

    </>

  );
}



export default App;
