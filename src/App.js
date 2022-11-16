import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Proyects from "./components/Proyects/Proyects.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Home/>
        <AboutMe/>
        <Resume/>
        <Proyects/>
      </main>
      <Contact/>
    </div>
  );
}

export default App;
