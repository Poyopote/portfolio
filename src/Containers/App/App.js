import React from "react";
import './App.css';
import Home from '../../Components/Home/Home';
import Projects from "../../Components/Projects/Projects";
import Profil from "../../Components/Profil/Profil";
import BackToTopButton from "../../Components/BackToTopButton";


function App() {
  return (
    <>
      <Home />
      <main>
        <Profil/>
        <Projects/>
        <Profil/>
      </main>
      <BackToTopButton/>

    </>

  );
}



export default App;
