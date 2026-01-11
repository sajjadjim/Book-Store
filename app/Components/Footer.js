import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#cfc4a9] text-base-content">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left side - Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">BookStore</h2>
          <p className="mb-4">
            Discover a world of books, from timeless classics to modern bestsellers.  
            We bring stories closer to you, anytime, anywhere.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="mailto:info@bookstore.com" aria-label="Email" className="hover:text-primary">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right side - Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h6 className="font-semibold mb-2">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Support</h6>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright strip */}
      <div className="bg-[#A27B5C] py-4 text-center text-sm">
        © {new Date().getFullYear()} BookStore — All Rights Reserved
      </div>
    </footer>
  )
}

