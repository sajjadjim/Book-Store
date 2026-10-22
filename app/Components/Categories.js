"use client";

export default function Categories({ onSelectCategory }) {
  const categories = [
    {
      name: "Classic Literature",
      titleBn: "চিরায়ত সাহিত্য",
      count: "120+ Books",
      icon: "📜",
      color: "from-amber-500/10 to-amber-600/20 text-amber-700 border-amber-200",
      img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80",
    },
    {
      name: "Fiction",
      titleBn: "কাল্পনিক ও উপন্যাস",
      count: "340+ Books",
      icon: "✨",
      color: "from-purple-500/10 to-purple-600/20 text-purple-700 border-purple-200",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
    },
    {
      name: "Mystery",
      titleBn: "রহস্য ও গোয়েন্দা",
      count: "85+ Books",
      icon: "🔍",
      color: "from-slate-700/10 to-slate-800/20 text-slate-800 border-slate-200",
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    },
    {
      name: "Self-Help",
      titleBn: "আত্ম-উন্নয়ন",
      count: "95+ Books",
      icon: "🌱",
      color: "from-emerald-500/10 to-emerald-600/20 text-emerald-700 border-emerald-200",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    },
    {
      name: "History",
      titleBn: "ইতিহাস ও ঐতিহ্য",
      count: "70+ Books",
      icon: "🏛️",
      color: "from-orange-500/10 to-orange-600/20 text-orange-700 border-orange-200",
      img: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&q=80",
    },
    {
      name: "Science",
      titleBn: "বিজ্ঞান ও মহাকাশ",
      count: "60+ Books",
      icon: "🔭",
      color: "from-cyan-500/10 to-cyan-600/20 text-cyan-700 border-cyan-200",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    },
  ];

  const handleCategoryClick = (name) => {
    if (onSelectCategory) {
      onSelectCategory(name);
    }
    const elem = document.getElementById("books");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
            Curated Genres
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Explore by Category
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Select your favorite genre to quickly find your next favorite read from our Bangladeshi & International libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className="group relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-white flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-2xl mr-2">{cat.icon}</span>
                    <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full font-medium">
                      {cat.count}
                    </span>
                  </div>
                  <span className="text-xs text-amber-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{cat.titleBn}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Browse titles</span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center transition-colors">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
