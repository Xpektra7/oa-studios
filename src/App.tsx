import About from "./components/about/about"
import Hero from "./components/hero/hero"
import Services from "./components/services/services"
import './index.css'

export default function App() {
  return (
    <main className="relative min-h-[200dvh]">
      <Hero />
      <About />
      <Services />
    </main>
  )
}