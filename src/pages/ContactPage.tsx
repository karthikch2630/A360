import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const imageData = [
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782861/Final-03-_1_dpdg2x.jpg",
  },
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782808/v1-_1_ni2obk.jpg",
  },
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784336/scene-07_p4vff7.jpg",
  },
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783344/TDVL9826_yo7rdx.jpg",
  },
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783173/5_fe5apm.jpg",
  },
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783380/IMMX9058_nprcvy.jpg",
  },
  {
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784169/silpa-commercial-_1_zw3nzt.jpg",
  },
  {
   
    img: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783255/c9_ycvdhl.jpg",
  },
];


const ContactPage = () => {
  return (
    <div className="pt-40 bg-black text-white sm:pl-36">
      {/* Hero Section */}
      <section className=" bg-black ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Contact <span className="text-white underline underline-offset-4">US</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to start your next architectural project? Get in touch with
              our team to discuss your vision and bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Get In Touch
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-400 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-400 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-gray-400 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="mixed-use">Mixed-Use</option>
                    <option value="institutional">Institutional</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 font-semibold tracking-wider hover:bg-gray-200 transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Address
                    </h3>
                    <p className="text-gray-400">
                      B5, Second Floor, Kapil Complex <br />
                      KPHB 6th Phase, Kukatpally,
                      <br /> Hyderabad - 500085.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-400">+91 7013306457</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-400">a360studiohyd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Office Hours
                    </h3>
                    <p className="text-gray-400">
                      Monday - : 10:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.443610273835!2d78.38578437479197!3d17.48632478341784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e788e3a649%3A0xd3ed8c701005cd1c!2sKapil%20complex!5e0!3m2!1sen!2sin!4v1752645614699!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-12 overflow-hidden">
        <h2 className="text-center text-white text-2xl font-bold mb-8">Our Projects</h2>

        <div className="relative w-full overflow-hidden">
          <div className="animate-slide flex gap-6 w-max">
            {[...imageData, ...imageData].map((project, idx) => (
              <div
                key={idx}
                className="w-64 h-64 flex-shrink-0 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.img}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default ContactPage;
