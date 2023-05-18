import React from "react";
import './App.css';
import Home from '../../Components/Home/Home';
import Projects from "../../Components/Projects/Projects";
import About from "../../Components/About/About";
import BackToTopButton from "../../Components/BackToTopButton";


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
