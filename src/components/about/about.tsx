import './about.css'

export default function About() {
  return (
    <section id="about" className="sticky h-dvh top-0 w-screen bg-cream rounded-t-3xl p-8 space-y-8">
      <h1 className="text-5xl font-italic font-bold text-bg">About</h1>
      <p className="font-body text-bg-alt max-w-3xl">OA Studios is a Lagos-based architectural practice working at
        the intersection of form, function, and feeling. We don't just
        design buildings — we shape the way people move through the world.

        From the first sketch to the final finish, every decision is
        deliberate, every detail considered.
      </p>
    </section>
  )
}