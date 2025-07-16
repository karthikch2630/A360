import React from "react";
import { Users, Award, Target, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transition-all duration-300 hover:text-gray-300">
            A360 <span className="text-gray-400">Studios</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto transition duration-300 hover:text-white">
            For over 25 years, A360 Architecture has been at the forefront of innovative
            design, creating spaces that inspire and transform communities across Canada.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "25+", label: "Years Experience" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="transition duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 hover:text-white transition duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 hover:text-gray-300 transition duration-300">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto hover:text-white transition duration-300">
              These principles guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Innovation",
                description:
                  "We push boundaries and explore new possibilities in architectural design.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-white" />,
                title: "Quality",
                description: "Excellence in every detail, from concept to completion.",
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Collaboration",
                description:
                  "Working together with clients to achieve extraordinary results.",
              },
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "Sustainability",
                description:
                  "Commitment to environmentally responsible design practices.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center transition duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 hover:text-white transition duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 hover:text-gray-300 transition duration-300">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto hover:text-white transition duration-300">
              Meet the visionaries behind A360 Architecture's success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group transition duration-500 hover:scale-105">
              <div className="w-48 h-54 bg-black rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/src/Assests/Srikanth-Sada.jpg"
                  alt="Srikanth Sada"
                  className="w-full h-full object-cover filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Srikanth Sada</h3>
              <p className="text-gray-400 mb-3">Principal Architect</p>
              <p className="text-gray-300 transition duration-300 group-hover:text-white">
                Leading innovative design solutions with 15+ years of experience.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group transition duration-500 hover:scale-105">
              <div className="w-48 h-54 bg-black rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/src/Assests/Srikanth-Sada.jpg"
                  alt="Jane Doe"
                  className="w-full h-full object-cover filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
              <p className="text-gray-400 mb-3">Design Director</p>
              <p className="text-gray-300 transition duration-300 group-hover:text-white">
                Championing design excellence and team creativity.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group transition duration-500 hover:scale-105">
              <div className="w-48 h-54 bg-black rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/src/Assests/Srikanth-Sada.jpg"
                  alt="Michael Lee"
                  className="w-full h-full object-cover filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Lee</h3>
              <p className="text-gray-400 mb-3">Operations Head</p>
              <p className="text-gray-300 transition duration-300 group-hover:text-white">
                Driving operational efficiency and quality execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
