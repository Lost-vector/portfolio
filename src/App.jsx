import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Section from "./components/ui/Section"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Section id="experience" title="Experience" className="section-short">
          <p> Experience coming soon. </p>
        </Section>
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
