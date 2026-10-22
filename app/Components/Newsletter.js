"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/10 rounded-full blur-xl pointer-events-none" />

          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            Stay Connected
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get Special Discounts & Book Recommendations
          </h2>
          <p className="mt-3 text-amber-100 text-sm sm:text-base max-w-xl mx-auto">
            Subscribe to our weekly newsletter for newly arrived Bangladeshi titles, bestsellers discounts, and curated reading lists.
          </p>

          {submitted ? (
            <div className="mt-8 p-4 bg-white/20 backdrop-blur-md rounded-2xl max-w-md mx-auto text-sm font-semibold flex items-center justify-center gap-2">
              <span>🎉</span> Thank you for subscribing! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="px-5 py-3.5 rounded-2xl text-slate-800 placeholder-slate-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white text-sm flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-sm transition shadow-md hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-amber-100/70">
            No spam, ever. Unsubscribe at any time with one click.
          </p>
        </div>
      </div>
    </section>
  );
}
