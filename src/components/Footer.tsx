import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-2 sm:pl-36">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752649007/A360_Logo_ylazhu.svg"
              alt="A360 Logo"
              className="w-32 h-32 object-contain  text-center justify-center mx-auto ml-8 mb-0 mt-5"
            />

            <p className="text-gray-400 leading-relaxed hover:text-white transition-colors duration-300">
              Creating innovative architectural solutions that inspire and
              transform communities.
            </p>
          </div>

          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 mt-14 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 mt-14 text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Architecture",
                "Interior Design",
                "Urban Planning",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 mt-14">Contact Info</h4>
            <div className="space-y-1">
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
                  +91 7013306457
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-gray-400 hover:text-white transition-colors duration-300">
                  a360studiohyd@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800  text-center"></div>
      <div className="w-full text-center py-4 bg-black text-gray-400 text-[10px] sm:text-xs">
        <p className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
          <span>© 2024 A360 Architecture. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://www.tactadvertising.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            <span>Designed by</span>
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752647568/tact_favicon_z3qdye.png"
              alt="Tact Logo"
              className="w-3 h-3 object-contain sm:w-4 sm:h-4"
            />
            <span>Tact Advertising</span>
          </a>
        </p>
      </div>


    </footer>
  );
};

export default Footer;
