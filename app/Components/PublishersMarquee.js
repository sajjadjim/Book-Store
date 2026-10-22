"use client";
import Marquee from "react-fast-marquee";

export default function PublishersMarquee() {
  const publishers = [
    { name: "Sheba Prokashani", tag: "সেবা প্রকাশনী" },
    { name: "Penguin Random House", tag: "International" },
    { name: "Ananya Prokashani", tag: "অনন্যা" },
    { name: "HarperCollins", tag: "International" },
    { name: "Mowla Brothers", tag: "মওলা ব্রাদার্স" },
    { name: "Simon & Schuster", tag: "International" },
    { name: "Batighar", tag: "বাতিঘর" },
    { name: "Macmillan Publishers", tag: "International" },
    { name: "Somoy Prokashan", tag: "সময় প্রকাশন" },
    { name: "Oxford University Press", tag: "International" },
  ];

  return (
    <section className="bg-slate-50 py-12 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
          Trusted Partners & Publications
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mt-1">
          Books From Leading Bangladeshi & Global Publishers
        </h3>
      </div>

      <Marquee pauseOnHover={true} gradient={true} gradientColor="rgb(248, 250, 252)" speed={40}>
        {publishers.map((pub, i) => (
          <div
            key={i}
            className="mx-4 px-6 py-3 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3 hover:border-amber-400 hover:shadow-sm transition"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm">
              📚
            </div>
            <div>
              <p className="font-bold text-xs text-slate-800 whitespace-nowrap">{pub.name}</p>
              <p className="text-[10px] text-slate-400 font-medium">{pub.tag}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
