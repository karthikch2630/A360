import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-2">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752649007/A360_Logo_ylazhu.svg"
              alt="A360 Logo"
              className="w-32 h-32 object-contain  text-center justify-center mx-auto ml-8"
            />

            <p className="text-gray-400 leading-relaxed hover:text-white transition-colors duration-300">
              Creating innovative architectural solutions that inspire and
              transform communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services#architecture"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="/services#interior-design"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="/services#urban-planning"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Urban Planning
                </a>
              </li>
              <li>
                <a
                  href="/services#consulting"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-gray-400 hover:text-white transition-colors duration-300">
                  B5, Second Floor, Kapil Complex,
                  <br />
                  KPHB 6th Phase, Kukatpally, Hyderabad - 500085.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 7673989854
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-gray-400 hover:text-white transition-colors duration-300">
                  a360studio.shiva@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800  text-center"></div>
      <div className="w-full text-center py-4 flex justify-center items-center gap-4 text-sm text-gray-500 hover:text-white transition-colors">
  <p className="m-0">
    © 2024 A360 Architecture. All rights reserved.
  </p>
  <span>|</span>
  <a
    href="https://www.tactadvertising.in"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-white transition-colors"
  >
    <span>Designed by</span>
    <img
      src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752647568/tact_favicon_z3qdye.png"
      alt="Tact Logo"
      className="w-4 h-4 object-contain"
    />
    <span>Tact Advertising</span>
  </a>
</div>

    </footer>
  );
};

export default Footer;
