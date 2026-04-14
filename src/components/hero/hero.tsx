import './hero.css'
import heroImg from '../../assets/images/hero.webp?url'
import ideasImg from '../../assets/images/ideas.webp?url'
import placesImg from '../../assets/images/places.webp?url'

export default function Hero() {
  return (
    <section 
      id='hero' 
      className="h-screen w-screen bg-bg flex flex-col justify-left"
      style={{ 
        '--hero-bg': `url(${heroImg})`,
        '--ideas-bg': `url(${ideasImg})`,
        '--places-bg': `url(${placesImg})`
      } as React.CSSProperties}
    >
      <h1 className="font-condensed font-bold uppercase p-8 text-2xl mb-auto">OA Studios — Est. 2018</h1>
      <div className="space-y-8 p-8">
        <div id='hero-headline' className="font-display text-hero leading-30 mx-0 text-white">
          <span className="inline-block mr-2 duration-300 ease-in-out">Where</span>

          <span id='ideas' className="hover:text-white hover:font-italic inline-block mx-2 duration-300 ease-in-out">Ideas</span>
          <br />
          <span className="inline-block mr-2 duration-300 ease-in-out">Becomes</span>

          <span id='places' className="hover:text-white hover:font-italic inline-block mx-2 duration-300 ease-in-out">Places</span>

        </div>
        <p className="text-xl font-body">Architecture and design that make
          people feel something.</p>
      </div>
    </section>
  )
}
