import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-12">
      <div className="max-w-7xl mx-auto px-16 pt-6 pb-12">
        
        {/*  (Top Section) */}
        <div className="flex justify-between items-start gap-12">
          
          {/* Left side: Logo, description and social link*/}
          <div className="max-w-xs">
            <a href="#">
              <img src={logo} alt="DevStack Logo" className="h-7 w-auto object-contain" />
            </a>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-5 mt-5 text-xs font-medium text-slate-700">
              <a href="#" className="hover:text-pink-600 transition">GitHub</a>
              <a href="#" className="hover:text-pink-600 transition">Twitter</a>
              <a href="#" className="hover:text-pink-600 transition">LinkedIn</a>
            </div>
          </div>

          {/* Right Side: 3 column equal space disribution */}
          <div className="w-1/2 flex justify-between">
            
            {/*  PRODUCT */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                Product
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
                <li><a href="#" className="hover:text-pink-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Technologies</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Projects</a></li>
              </ul>
            </div>

            {/*  COMPANY */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
                <li><a href="#" className="hover:text-pink-600 transition">About</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Contact</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Careers</a></li>
              </ul>
            </div>

            {/* LEGAL content  Right side align   */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-500">
                <li><a href="#" className="hover:text-pink-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* (Divider) */}
        <div className="border-t border-gray-100 mt-10 mb-6"></div>

        {/* (Bottom Section) */}
        <div className="flex justify-between items-center text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
