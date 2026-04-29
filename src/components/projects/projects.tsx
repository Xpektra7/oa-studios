import "./projects.css";
import cottageImg from "../../assets/images/projects/cottage.webp?url";
import halcyonImg from "../../assets/images/projects/halcyon.webp?url";
import defaultImg from "../../assets/images/projects/default.webp?url";
import oseiImg from "../../assets/images/projects/osei.webp?url";
import linneImg from "../../assets/images/projects/linne.webp?url";
import meridianImg from "../../assets/images/projects/meridian.webp?url";
import verteImg from "../../assets/images/projects/verte.webp?url";

export default function Projects() {
  const projects = [
    {
      name: "Jessamine King Cottage",
      tag: "cottage",
      img: cottageImg,
      location: "ENG",
    },
    {
      name: "The Halcyon Residence",
      tag: "halcyon",
      img: halcyonImg,
      location: "USA",
    },
    {
      name: "Linne Garden Pavilion",
      tag: "linne",
      img: linneImg,
      location: "JAP",
    },
    {
      name: "Osei Commercial Tower",
      tag: "osei",
      img: oseiImg,
      location: "FRA",
    },
    {
      name: "Verte Private Estate",
      tag: "verte",
      img: verteImg,
      location: "GER",
    },
    {
      name: "The Meridian Lofts",
      tag: "meridian",
      img: meridianImg,
      location: "NOR",
    },
  ];

  return (
    <section
      id="projects"
      className="relative top-0 h-dvh w-screen space-y-8 z-0 flex flex-col pt-16 items-center"
      style={
        {
          "--cottage-bg": `url(${cottageImg})`,
          "--halcyon-bg": `url(${halcyonImg})`,
          "--linne-bg": `url(${linneImg})`,
          "--default-bg": `url(${defaultImg})`,
          "--osei-bg": `url(${oseiImg})`,
          "--verte-bg": `url(${verteImg})`,
          "--meridian-bg": `url(${meridianImg})`,
        } as React.CSSProperties
      }
    >
      <h1 className="font-condensed font-bold text-xl">— OUR WORK</h1>
      <div
        className="max-w-4xl px-8 flex gap-4 flex-wrap justify-center text-center"
        id="projects-container"
      >
        {projects.map((project) => (
          <h1
            key={project.tag}
            id={project.tag}
            className="inline-flex project text-4xl font-display font-semibold  m-0 p-0 text-white duration-600 ease-in-out"
          >
            {project.name}
            <span className="font-body text-xs">({project.location})</span>
          </h1>
        ))}
      </div>
      <div
        id="cottage-bg"
        className="project-bg h-full w-full absolute top-0 -z-2 opacity-0"
      ></div>
      <div
        id="halcyon-bg"
        className="project-bg h-full w-full absolute top-0 -z-1 opacity-0"
      ></div>
      <div
        id="linne-bg"
        className="project-bg h-full w-full absolute top-0 -z-1 opacity-0"
      ></div>
      <div
        id="osei-bg"
        className="project-bg h-full w-full absolute top-0 -z-1 opacity-0"
      ></div>
      <div
        id="verte-bg"
        className="project-bg h-full w-full absolute top-0 -z-1 opacity-0"
      ></div>
      <div
        id="meridian-bg"
        className="project-bg h-full w-full absolute top-0 -z-1 opacity-0"
      ></div>
    </section>
  );
}
