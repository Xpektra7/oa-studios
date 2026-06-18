import About from "./components/about/about"
import Hero from "./components/hero/hero"
import Process from "./components/process/process"
import Projects from "./components/projects/projects"
import Services from "./components/services/services"
import Testimonials from "./components/testimonials/testimonials"
import './index.css'

export default function App() {
  return (
    <main className="relative min-h-[200dvh]">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
    </main>
  )
}