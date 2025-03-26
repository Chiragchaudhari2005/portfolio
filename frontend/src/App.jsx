import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css";
import Navbar from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import {Home} from './components/sections/Home';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  debugger;
  for(let i=1;i<=10;i++){
    console.log(i);
  }

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min h-screen transition-opacity bg-primary duration-800 ${isLoaded ? "opacity-100" : "opacity-0"}`}> //adds transition and slowly shows content
        <Navbar  menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
