import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                BH
              </div>
              <span className="text-xl font-bold text-white">
                Book<span className="text-amber-500">Haven</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Your premier online bookstore in Bangladesh. We bring you timeless Bengali masterpieces alongside international English bestsellers, delivered fast across all 64 districts.
            </p>
            <div className="flex gap-3 text-slate-300">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-white flex items-center justify-center transition">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-white flex items-center justify-center transition">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-white flex items-center justify-center transition">
                <FaInstagram />
              </a>
              <a href="mailto:support@bookhaven.com.bd" aria-label="Email" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-white flex items-center justify-center transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="#books" className="hover:text-amber-400 transition">All Books</a></li>
              <li><a href="#categories" className="hover:text-amber-400 transition">Genres & Categories</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Bangladeshi Literature */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Bangla Books</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-400">Humayun Ahmed Series</span></li>
              <li><span className="text-slate-400">Rabindranath Tagore</span></li>
              <li><span className="text-slate-400">Bibhutibhushan Bandyopadhyay</span></li>
              <li><span className="text-slate-400">Syed Waliullah</span></li>
              <li><span className="text-slate-400">Tin Goyenda Series</span></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact & Support</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-500 shrink-0" />
                <span>Shahbagh, Dhaka-1000, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-amber-500 shrink-0" />
                <span>+880 1711-000000</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-amber-500 shrink-0" />
                <span>orders@bookhaven.com.bd</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[11px] text-slate-500 mb-2 font-medium">We Accept:</p>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                <span className="px-2 py-1 bg-pink-900/50 text-pink-300 rounded border border-pink-700/50">bKash</span>
                <span className="px-2 py-1 bg-orange-900/50 text-orange-300 rounded border border-orange-700/50">Nagad</span>
                <span className="px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} BookHaven Bangladesh. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition">Return & Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
