export default function Hero2() {
  return (
    <div
      className="hero h-150 sm:h-100"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2015/09/10/09/50/library-934285_1280.jpg')",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Discover Stories That Inspire</h1>
          <p className="py-6 text-xl">
            From timeless classics to the latest bestsellers — explore our
            collection  and let every page take you on a new journey.
          </p>
          <button className="btn btn-outline rounded-2xl">Start Reading</button>
        </div>
      </div>
    </div>
  )
}

