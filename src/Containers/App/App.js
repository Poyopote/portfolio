import React from "react";
import './App.css';
// import { render } from "@testing-library/react";
import Home from '../../Components/Home/Home';
import Projects from "../../Components/Projects/Projects";
import Profil from "../../Components/Profil/Profil";


function App() {
  return (
    <>
      <Home />
      <main>
        <Profil/>
        <Projects/>
      </main>
      
    </>

  );
}



export default App;
