import { Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 pt-16 pb-6 sm:pl-36 sm:pb-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 sm:gap-y-0 px-1">
        {/* Logo & Description */}
        <div>
          <img
            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752649007/A360_Logo_ylazhu.svg"
            alt="A360 Logo"
            className="w-28 h-auto mb-2"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Creating innovative architectural solutions that inspire and
            transform communities.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <div className="mt-10">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-200 ease-in-out"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <div className="mt-10">
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              {[
                "Architectural Design",
                "Interior Design",
                "Urban Design",
                "Master Planning",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition duration-200 ease-in-out"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="mt-10">
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-start gap-x-3">
              <MapPin className="w-9 h-9 text-white mt-1" />
              <span>
                B5, Second Floor, Kapil Complex, KPHB 6th Phase, Kukatpally,
                Hyderabad - 500085
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              <span>+91 7013306457</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white" />
              <span>a360studiohyd@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 pt-4 text-center text-gray-500 text-xs sm:text-sm md:text-base">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-1 flex-wrap">
          <span>© 2024 A360 Architecture. All rights reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span className="sm:hidden">•</span>
          <span className="flex items-center gap-1 ">
            Designed by
            <a
              href="https://www.tactadvertising.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-500 "
              aria-label="Tact Advertising Website"
            >
              <img
                src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752647568/tact_favicon_z3qdye.png"
                alt="Tact Logo"
                className="w-4 h-4 object-contain"
              />
              <span>Tact Advertising</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
