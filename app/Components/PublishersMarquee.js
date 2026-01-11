import Marquee from "react-fast-marquee"

export default function PublishersMarquee() {
  const logos = [
    "https://images.seeklogo.com/logo-png/10/2/penguin-group-logo-png_seeklogo-107306.png",
    "https://www.harperreach.com/wp-content/uploads/sites/70/2022/06/HarperCollins-Publishers-logo.png",
    "https://images.seeklogo.com/logo-png/41/1/simon-schuster-logo-png_seeklogo-411894.png",
    "https://logos-world.net/wp-content/uploads/2022/09/Macmillan-Logo-500x281.png",
    "https://prettylittlememoirs.com/wp-content/uploads/2023/08/a1.png",
  ]

  return (
    <section className="bg-[#DCD7C9] py-10">
      <h2 className="text-center text-4xl font-bold mb-6">
        Trusted by Leading Publishers
      </h2>
      <Marquee pauseOnHover gradient={false} speed={50}>
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Publisher Logo"
            className="h-16 mx-12 my-10"
          />
        ))}
      </Marquee>
    </section>
  )
}
