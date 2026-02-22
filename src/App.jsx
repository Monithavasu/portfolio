import About from "./Components/About"
import Contact from "./Components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"


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