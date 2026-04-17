import { motion, useMotionValue } from "motion/react"
import React, { useEffect } from "react"
import './services.css'
import archImg from '../../assets/images/architecture.webp?url'
import intImg from '../../assets/images/interior.webp?url'
import extImg from '../../assets/images/exterior.webp?url'
import consultImg from '../../assets/images/consultation.webp?url'

export default function Services() {


  const services = [
    {
      name: 'Architecture Design',
      bg: archImg,
      tag: 'architecture'
    },
    {
      name: 'Interior Design',
      bg: intImg,
      tag: 'interior'

    },
    {
      name: 'Exterior Design',
      bg: extImg,
      tag: 'exterior'

    },
    {
      name: 'Consultation Services',
      bg: consultImg,
      tag: 'consultation'
    }
  ]

  function useMouse() {
    const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0)
    }

    const mousemove = (e: MouseEvent) => {
      const { x, y } = e
      mouse.x.set(x);
      mouse.y.set(y);
    }

    useEffect(() => {
      window.addEventListener('mousemove', mousemove);
      return () => window.removeEventListener('mousemove', mousemove);
    }, []);

    return mouse;
  }

  const rawMouse = useMouse();
  const smoothMouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const lerp = (start: number, end: number, factor: number): number => start * (1 - factor) + end * factor;

  useEffect(() => {
    let rafId: number;
    const updateSmooth = () => {
      const rawX = rawMouse.x.get();
      const rawY = rawMouse.y.get();
      const smoothX = smoothMouse.x.get();
      const smoothY = smoothMouse.y.get();

      if (Math.abs(rawX - smoothX) > 0.1 || Math.abs(rawY - smoothY) > 0.1) {
        smoothMouse.x.set(lerp(smoothX, rawX, 0.1));
        smoothMouse.y.set(lerp(smoothY, rawY, 0.1));
      }
      rafId = requestAnimationFrame(updateSmooth);
    };
    rafId = requestAnimationFrame(updateSmooth);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative h-dvh w-screen bg-bg p-8 flex items-center justify-center " style={{
      '--interior': `url(${intImg})`,
      '--consultation': `url(${consultImg})`,
      '--exterior': `url(${extImg})`,
      '--architecture': `url(${archImg})`

    } as React.CSSProperties}>
      <div id="services" className="max-w-4xl text-center p-1" >
        {/* <h1 className="text-5xl inline-block font-italic font-bold text-bg">Emirates Stadium</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">*</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">Allianz Arena</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">*</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">Camp Nou</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">*</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">Old Trafford</h1> */}
        {
          services.map(service => (
            <div className="text-5xl font-italic font-bold text-cream leading-20 service" key={service.tag} id={service.tag}>
              <h1 className="inline" >{service.name}</h1>
              <motion.div id="scope" className="w-0 h-0 -rotate-5 top-0 left-0 absolute" style={{ x: smoothMouse.x, y: smoothMouse.y }} >
                {services.map(service => (
                  <div key={service.name} className={`scope-bg bg-cream! absolute w-full h-full hidden`} ></div>
                ))}
              </motion.div>

            </div>
          )
          )
        }
      </div>
      {/* <motion.div id="scope" className="w-0 h-0 -rotate-5 bg-cream rounded-md top-0 left-0 absolute" style={{ x: smoothMouse.x, y: smoothMouse.y }} >
        {services.map(service => (
          <div key={service.name} className={`scope-bg absolute w-full h-full ${active == service.name ? '' : 'hidden'}`} style={{ background: `url(${service.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        ))}
      </motion.div> */}
    </section >
  )
}