import './hero.css'
import heroImg from '../../assets/images/hero.webp?url'
import ideasImg from '../../assets/images/ideas.webp?url'
import placesImg from '../../assets/images/places.webp?url'
import { useScroll, useTransform, motion, type MotionStyle } from 'motion/react'

export default function Hero() {

  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.section
      id='hero'
      className="h-dvh w-dvw sticky top-0 bg-transparent flex flex-col pt-16 items-center"
      style={{
        '--hero-bg': `url(${heroImg})`,
        '--ideas-bg': `url(${ideasImg})`,
        '--places-bg': `url(${placesImg})`,
        rotate,
        scale
      } as MotionStyle}
    >
      <h1 className="font-condensed font-bold uppercase p-8 text-2xl">OA Studios — Est. 2018</h1>
      <div className="space-y-8 p-8 w-fit self-center">
        <div id='hero-headline' className="font-condensed text-center text-hero leading-hero mx-0 text-white">
          <span className="inline-block mr-2 duration-300 ease-in-out">Where</span>

          <span id='ideas' className="inline-block mx-2 underline underline-offset-16 hover:no-underline duration-300 ease-in-out">ideas</span>
          <br />
          <span className="inline-block mr-2 duration-300 ease-in-out">becomes</span>

          <span id='places' className="inline-block mx-2 underline underline-offset-16 hover:no-underline duration-300 ease-in-out">spaces</span>

        </div>
        <p className="text-xl text-center font-body">Architecture and design that make people feel something.</p>
      </div>
      <div id="hero-bg" className="hero-bg h-full w-full absolute top-0 -z-2"></div>
      <div id="ideas-bg" className="hero-bg h-full w-full absolute top-0 -z-1 opacity-0"></div>
      <div id="places-bg" className="hero-bg h-full w-full absolute top-0 -z-1 opacity-0"></div>
    </motion.section>
  )
}