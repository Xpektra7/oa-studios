import './hero.css'
import heroImg from '../../assets/images/hero.webp?url'
import ideasImg from '../../assets/images/ideas.webp?url'
import placesImg from '../../assets/images/places.webp?url'

export default function Hero() {
  return (
    <section
      id='hero'
      className="h-dvh w-dvw sticky top-0 bg-transparent flex flex-col pt-16 items-center"
      style={{
        '--hero-bg': `url(${heroImg})`,
        '--ideas-bg': `url(${ideasImg})`,
        '--places-bg': `url(${placesImg})`
      } as React.CSSProperties}
    >
      <h1 className="font-condensed font-bold uppercase p-8 text-2xl">OA Studios — Est. 2018</h1>
      <div className="space-y-8 p-8 w-fit self-center">
        <div id='hero-headline' className="font-condensed text-center text-hero leading-30 mx-0 text-white">
          <span className="inline-block mr-2 duration-300 ease-in-out">Where</span>

          <span id='ideas' className="inline-block mx-2 duration-300 ease-in-out">ideas</span>
          <br />
          <span className="inline-block mr-2 duration-300 ease-in-out">becomes</span>

          <span id='places' className="inline-block mx-2 duration-300 ease-in-out">spaces</span>

        </div>
        <p className="text-xl text-center font-body">Architecture and design that make people feel something.</p>
      </div>
      <div id="hero-bg" className="h-full w-full absolute top-0 -z-1"></div>
    </section>
  )
}
