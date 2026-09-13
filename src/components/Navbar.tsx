import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-16 py-5">
        
        {/* Logo */}
        <div>
          <a href="#">
            <img src={logo} alt="DevStack Logo" className="h-8" />
          </a>
        </div>

        {/* Menu Link*/}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#" className="text-pink-600 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">
              Technologies
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Button*/}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-pink-600 transition">
            Sign In
          </a>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full cursor-pointer transition">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;