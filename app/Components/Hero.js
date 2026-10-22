"use client";
import { useState, useEffect } from "react";

export default function Hero({ onBrowseClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      headline: "Discover Stories That Inspire",
      sub: "Bangladesh's finest books — from Humayun Ahmed to Tagore — plus the world's greatest English literature, all in one place.",
      cta: "Browse Books",
      badge: "🇧🇩 Bangladeshi & English Collection",
      accent: "from-amber-500 to-orange-600",
    },
    {
      headline: "Bangladeshi Literature at Your Fingertips",
      sub: "Explore the rich heritage of Bengali writing — Lalsalu, Pather Panchali, Misir Ali, and hundreds more.",
      cta: "View Bengali Books",
      badge: "📚 বাংলা সাহিত্য",
      accent: "from-green-500 to-emerald-600",
    },
    {
      headline: "World's Best Books, Delivered to You",
      sub: "Harry Potter, Atomic Habits, 1984, Sapiens — the greatest English books shipped right to your door.",
      cta: "Shop English Books",
      badge: "🌍 International Bestsellers",
      accent: "from-blue-500 to-indigo-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/70" />

      {/* Floating Books (decorative) */}
      <div className="absolute top-20 right-16 opacity-20 hidden lg:block">
        <div className="w-32 h-44 bg-amber-400 rounded-lg transform rotate-12 shadow-2xl animate-[float_6s_ease-in-out_infinite]" />
      </div>
      <div className="absolute bottom-32 left-12 opacity-15 hidden lg:block">
        <div className="w-24 h-36 bg-blue-400 rounded-lg transform -rotate-12 shadow-2xl animate-[float_8s_ease-in-out_infinite_1s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          {slide.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight transition-all duration-700">
          {slide.headline}
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700">
          {slide.sub}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBrowseClick}
            className={`px-8 py-4 bg-gradient-to-r ${slide.accent} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base`}
          >
            {slide.cta} →
          </button>
          <a
            href="#categories"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 text-base"
          >
            Browse Categories
          </a>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { label: "Books Available", value: "2,400+" },
            { label: "Happy Readers", value: "18K+" },
            { label: "Languages", value: "Bengali & English" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-white/60 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Slide Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-amber-400" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
