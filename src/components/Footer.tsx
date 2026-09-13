import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-12">
        
        {/* top content: mobile 1-column, desktop multi-column */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          
          {/* brand info */}
          <div className="w-full lg:max-w-sm">
            <a href="#">
              <img src={logo} alt="DevStack Logo" className="h-8 sm:h-9 w-auto object-contain" />
            </a>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-6 mt-6 text-sm font-medium text-slate-700">
              <a href="#" className="hover:text-pink-600 transition">GitHub</a>
              <a href="#" className="hover:text-pink-600 transition">Twitter</a>
              <a href="#" className="hover:text-pink-600 transition">LinkedIn</a>
            </div>
          </div>

          {/* links columns: 1 clean column on mobile, 3 columns on tablet & desktop */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            
            {/* product */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">
                Product
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-pink-600 transition">Home</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Technologies</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Projects</a></li>
              </ul>
            </div>

            {/* company */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-pink-600 transition">About</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Contact</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Careers</a></li>
              </ul>
            </div>

            {/* legal */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-pink-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-600 transition">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* divider */}
        <div className="border-t border-gray-100 my-8"></div>

        {/* bottom copyright & links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-800 transition">Privacy</a>
            <a href="#" className="hover:text-gray-800 transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
