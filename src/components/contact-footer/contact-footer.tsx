import "./contact-footer.css"
import portraitImg from "../../assets/images/contact/portrait.webp?url"
import lagosImg from "../../assets/images/contact/lagos.webp?url"
import londonImg from "../../assets/images/contact/london.webp?url"
import accraImg from "../../assets/images/contact/accra.webp?url"

const offices = [
  {
    id: "lagos",
    city: "Lagos",
    address: ["12A Awolowo Road", "Ikoyi, Lagos"],
    phone: "+234 812 090 5387",
    email: "lagos@oastudios.com",
  },
  {
    id: "london",
    city: "London",
    address: ["47 Broadway", "London, SW1H 0BL"],
    phone: "+44 20 7946 0958",
    email: "london@oastudios.com",
  },
  {
    id: "accra",
    city: "Accra",
    address: ["15 Independence Ave", "Accra, Ghana"],
    phone: "+233 30 245 6789",
    email: "accra@oastudios.com",
  },
]

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8H13M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ContactFooter() {
  return (
    <section
      id="contact-footer"
      className="relative w-screen bg-bg"
      style={
        {
          "--lagos-bg": `url(${lagosImg})`,
          "--london-bg": `url(${londonImg})`,
          "--accra-bg": `url(${accraImg})`,
        } as React.CSSProperties
      }
    >
      {/* Background overlays */}
      <div id="lagos-bg" className="office-bg" />
      <div id="london-bg" className="office-bg" />
      <div id="accra-bg" className="office-bg" />

      {/* Content */}
      <div className="container-oa py-24 lg:py-32 relative z-20">
        {/* ── CTA Upper ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Portrait */}
          <div className="w-32 lg:w-44 shrink-0 contact-text transition-all duration-300">
            <img
              src={portraitImg}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>

          {/* Headline + buttons */}
          <div>
            <h2 className="contact-text font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-cream leading-tight-oa max-w-2xl transition-all duration-300">
              For project enquiries,
              <br />
              we're just a click away.
            </h2>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="contact-text inline-flex items-center gap-2 bg-cream text-bg px-6 py-3 text-xs font-condensed font-semibold tracking-wide-oa uppercase transition-all duration-300 hover:bg-cream-dark cursor-pointer">
                Start a Project
                <Arrow />
              </button>
              <button className="contact-text inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-3 text-xs font-condensed font-semibold tracking-wide-oa uppercase transition-all duration-300 hover:bg-white-ghost cursor-pointer">
                Get in Touch
                <Arrow />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 mb-16 lg:mb-20" />

        {/* ── Footer Lower ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1 — Copyright + Social */}
          <div className="flex flex-col gap-6">
            <p className="contact-text font-body text-sm text-cream-muted transition-all duration-300">
              &copy; OA Studios 2026
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="contact-text text-cream-muted hover:text-cream transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                className="contact-text text-cream-muted hover:text-cream transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="contact-text text-cream-muted hover:text-cream transition-all duration-300 cursor-pointer"
                aria-label="Behance"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.109 1.844H15.14c0 2.754 1.633 3.5 3.254 3.5 1.582 0 2.594-.826 2.94-1.675l1.392.5zM11.02 14c-.08 1.076-.788 2.475-3.124 2.475-2.246 0-3.319-1.333-3.319-3.475h9.66c-.262-3.54-2.291-5.525-5.584-5.525C4.732 7.475 2 9.989 2 14c0 4.162 2.886 6.5 6.652 6.5 3.247 0 5.096-2.025 5.275-4.5H11.02zM2 0h7v2H2V0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columns 2-4 — Offices */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12">
            {offices.map((office) => (
              <div
                key={office.id}
                id={`office-${office.id}`}
                className="office cursor-pointer"
              >
                <div className="office-text transition-all duration-300">
                  <h3 className="font-condensed text-lg tracking-wide-oa text-cream mb-4">
                    {office.city}
                  </h3>
                  {office.address.map((line) => (
                    <p
                      key={line}
                      className="font-body text-sm text-cream-muted leading-normal mb-1"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="font-body text-sm text-cream-muted leading-normal mt-3">
                    {office.phone}
                  </p>
                  <p className="font-body text-sm text-cream-muted leading-normal">
                    {office.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
