import About from "./Components/About.jsx"
import Contact from "./Components/Contact.jsx"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar"
import Projects from "./Components/Projects.jsx"
import Skills from "./Components/Skills.jsx"


const App = () => {
  return ( 
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </>
  )
}
export default App