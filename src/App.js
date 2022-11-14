import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Proyects from "./components/Proyects/Proyects.jsx";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<AboutMe/>}/>
        <Route exact path='/curriculum' element={<Resume/>}/>
        <Route exact path='/proyectos' element={<Proyects/>} />
      </Routes>
      <Contact/>
    </div>
  );
}

export default App;
