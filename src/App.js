import React from "react";
import About from './components/About/about'
// import Contact from './components/Contact'
import Navbar from './components/Navbar/navbar'
import Projects from './components/Projects/projects'
import Skills from "./components/Skills/skills"


function App() {
  return (
    <div className="App">
     <Navbar />
     <About />
     <Skills />
     <Projects />
     {/* <main>
      <Contact />
      <Navbar />
      
     </main> */}

    </div>
  );
}

export default App;
