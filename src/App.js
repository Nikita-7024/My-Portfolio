import React from "react";
import About from './components/About/about'
// import Contact from './components/Contact'
import Navbar from './components/Navbar/navbar'
// import Projects from './components/Projects'
// import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
     <Navbar />
     <About />


     {/* <main>
      <Contact />
      <Navbar />
      <Projects />
      <Skills />
     </main> */}

    </div>
  );
}

export default App;
