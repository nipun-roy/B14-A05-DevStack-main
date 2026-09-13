import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-18 flex items-center justify-between">
        
        {/* mobile hamburger button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 text-slate-700 hover:text-pink-600 cursor-pointer"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* logo */}
        <div className="flex items-center justify-center md:justify-start">
          <a href="#">
            <img src={logo} alt="DevStack" className="h-7 sm:h-8 w-auto object-contain" />
          </a>
        </div>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                i === 0 ? "text-pink-600 font-semibold" : "text-slate-600 hover:text-pink-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* buttons */}
        <div className="flex items-center gap-2 sm:gap-5 text-xs sm:text-sm font-medium">
          <a href="#signin" className="text-slate-700 hover:text-pink-600 px-2 py-1">
            Sign In
          </a>
          <button className="bg-brand-gradient hover:opacity-95 text-white px-4 sm:px-6 py-2 rounded-full cursor-pointer transition shadow-xs">
            Sign Up
          </button>
        </div>

      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-3">
            {links.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1.5 text-sm ${
                    i === 0 ? "text-pink-600 font-semibold" : "text-slate-600 hover:text-pink-600 font-medium"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;