import './projects.css';

export default function Projects() {
  const projects = [
    {
      name: 'Jessamine King Cottage',
    },
    {
      name: 'The Halcyon Residence',
    },
    {
      name: 'Linne Garden Pavilion'
    },
    {
      name: 'Verte Private Estate'
    },
    {
      name: 'The Meridian Lofts'
    }
  ]
  return (
    <section className="relative top-0 h-dvh w-screen bg-cream flex flex-col pt-16 items-center">

      <span className="max-w-4xl text-center" id='projects-container'>
        {
          projects.map(project => (
            <h1 className="inline-flex project text-4xl font-condensed underline hover:no-underline mx-2 my-2 text-bg duration-300 ease-in-out">{project.name},</h1>
          ))
        }
      </span>
    </section>
  );
}