"use client";

export default function About() {
  const highlights = [
    {
      icon: "🇧🇩",
      title: "Bangladeshi Classics",
      desc: "Authentic editions from Sheba, Ananya, Mowla Brothers, and renowned national publishers.",
    },
    {
      icon: "🌍",
      title: "World Literature",
      desc: "Curated international bestsellers, award-winners, and English self-help masterpieces.",
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      desc: "Fast delivery all over Bangladesh — 24-48 hours inside Dhaka, 3-5 days across all 64 districts.",
    },
    {
      icon: "💳",
      title: "Flexible Payment",
      desc: "Pay easily using Cash on Delivery (COD), bKash, Nagad, or credit/debit cards.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with overlay badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1000&q=80"
                alt="BookStore reading sanctuary"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-white text-slate-900 p-5 rounded-2xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl font-bold">
                  📖
                </div>
                <div>
                  <h4 className="text-sm font-bold">100% Authentic Books</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Original prints straight from publishers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text and Values */}
          <div>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
              Connecting Readers to Words That Move the World
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded with a passion for literature, <span className="text-amber-400 font-semibold">BookHaven</span> brings together the rich legacy of Bangladeshi writers and the pinnacle of global storytelling. Whether you seek the nostalgic warmth of Humayun Ahmed, the lyrical depth of Rabindranath Tagore, or transformative modern self-development from James Clear, we are your gateway.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition duration-300"
                >
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <h4 className="font-bold text-sm text-white">{h.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{h.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <a
                href="#books"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-sm transition shadow-lg"
              >
                Explore Books Now
              </a>
              <span className="text-xs text-slate-400">Over 18,000 satisfied book lovers across BD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
