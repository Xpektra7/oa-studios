export default function Services() {

  const services = [
    {
      name: 'Emirates Stadium'
    },
    {
      name: 'Camp Nou'
    },
    {
      name: 'Old Trafford'
    },
    {
      name: 'Allianz Arena'
    },
    {
      name: 'San Siro'
    },


  ]

  return (
    <section className="relative h-dvh w-screen bg-bg rounded-t-3xl p-8 flex items-center justify-center">
      <span className="max-w-4xl inline space-x-4 text-center">
        {/* <h1 className="text-5xl inline-block font-italic font-bold text-bg">Emirates Stadium</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">*</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">Allianz Arena</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">*</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">Camp Nou</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">*</h1>
        <h1 className="text-5xl inline-block font-italic font-bold text-bg">Old Trafford</h1> */}
        {
          services.map(service => (
            <h1 className="text-5xl inline-block font-italic font-bold text-cream">{service.name} /</h1>
          )
          )
        }
      </span>
    </section>
  )
}