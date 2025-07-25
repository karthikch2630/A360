import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Navigation items
const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/services", label: "SERVICES" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/contact", label: "CONTACT" },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]" : "bg-transparent"
      }`}
    >
      {/* Desktop Header */}
      <div className=" md:flex items-center justify-between px-6 h-[100px] ">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="px-14 py-2 ml-3 rounded">
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752649007/A360_Logo_ylazhu.svg"
              alt="Logo"
              className="w-28 h-28 object-contain sm:hidden"
            />
          </div>
        </Link>

        <nav className="flex space-x-6 pr-28 pt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-[#1a1a1a]">
        <Link to="#" >
          <img
            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1751462340/a360_Studio_logo_White_q0tee6.png"
            alt="A360 Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-md w-64 p-4 flex flex-col space-y-4 z-50">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 pt-4 border-t border-white/10 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.6l-.4 3h-2.2v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2C4.5 2 2 4.5 2 7.5v9C2 19.5 4.5 22 7.5 22h9c3 0 5.5-2.5 5.5-5.5v-9C22 4.5 19.5 2 16.5 2h-9zm0 2h9C18 4 20 6 20 8.5v7c0 2.5-2 4.5-4.5 4.5h-9C6 20 4 18 4 15.5v-7C4 6 6 4 7.5 4zm4.5 2.5A5 5 0 0012 17a5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.3-2a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.49 7h4V24h-4V7zM8.49 7h3.8v2.44h.05c.53-1 1.82-2.05 3.76-2.05 4.02 0 4.76 2.64 4.76 6.08V24h-4v-7.76c0-1.85-.03-4.22-2.57-4.22-2.58 0-2.98 2.01-2.98 4.09V24h-4V7z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
