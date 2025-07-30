import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  Linkedin,
  MoveDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-36 bg-[#1a1a1a] z-50 flex-col items-center pb-3">
        {/* Centered Logo - Hidden on mobile */}
        <div className="mb-6 hidden md:block">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="rounded flex items-center justify-center z-10">
              <img
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752649007/A360_Logo_ylazhu.svg"
                alt="Logo"
                className="w-32 h-32 object-cover mx-auto"
              />
            </div>
          </Link>
        </div>

        {/* Push social icons to bottom */}
        <div className="flex-grow"></div>

        {/* Social Icons */}
        <div className="flex flex-col space-y-6 items-center mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              className="text-gray-400 hover:text-white transition-colors duration-300"
              size={18}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              className="text-gray-400 hover:text-white transition-colors duration-300"
              size={18}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              className="text-gray-400 hover:text-white transition-colors duration-300"
              size={18}
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="text-gray-400 hover:text-white transition-colors duration-300"
              size={18}
            />
          </a>
        </div>

        {/* Bounce Down Icon */}
        <MoveDown className="text-white animate-bounce mb-4" size={20} />
      </div>

      {/* Mobile Bottom Bar */}
    </>
  );
};

export default LeftSidebar;
