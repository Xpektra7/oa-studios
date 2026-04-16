import About from "./components/about/about"
import Hero from "./components/hero/hero"
import './index.css'

export default function App() {
  return (
    <main className="relative h-[300dvh]">
      <Hero />
      <About />
    </main>
  )
}