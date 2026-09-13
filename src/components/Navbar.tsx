import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 lg:px-20 py-4 bg-white border-b border-gray-100">
      
      {/*  (Logo) */}
      <div>
        <a href="#">
          <img src={logo} alt="DevStack Logo" className="h-7" />
        </a>
      </div>

      {/* ২. (Menu Links) */}
      <ul className="flex items-center gap-8 text-sm">
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

      {/* ৩. (Buttons) */}
      <div className="flex items-center gap-6 text-sm">
        <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">
          Sign In
        </a>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded-full cursor-pointer transition">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;