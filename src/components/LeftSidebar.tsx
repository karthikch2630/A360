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
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-24 bg-[#1a1a1a] z-30 flex-col items-center py-6">
        {/* Centered Logo */}
        <div className="mt-2">
          <Link to="/" className="flex flex-col items-center space-y-1"></Link>
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
