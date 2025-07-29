import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 bg-black sm:pl-36">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ABOUT <span className="text-white">A360</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="grayscale">
                Architecture team of skilled professionals that pride themselves
                on delivering design excellence and quality construction. We
                have experience in various building types and sectors, providing
                clients with creative solutions.
              </p>
              <p className="grayscale">
                Design is our foundation, and we believe sustainable design is
                the best sustainable practice. We are committed to environmental
                responsibility and innovative green technologies.
              </p>
              <p className="grayscale">
                Our team of architects, engineers, and interior designers work
                together to create spaces that meet the needs of our clients
                while enhancing the built environment.
              </p>
            </div>
            <Link to="/about">
              <button className="mt-8 border border-white text-white px-8 py-3 font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                ABOUT OUR TEAM
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="istockphoto-1326999265-612x612.jpg"
              alt="Modern Office Interior"
              className="w-full h-96 object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transform scale-100 hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
