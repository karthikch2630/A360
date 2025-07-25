import React from "react";
import { Users, Award, Target, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-20 bg-black text-white sm:pl-24">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 transition-all duration-300 hover:text-gray-300">
            About <span className="text-gray-400">A360 Studios</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto transition duration-300 hover:text-white">
            A360studio is a vibrant and expanding architecture design studio, powered by a talented team of architects and designers. Our diverse portfolio includes projects across commercial, institutional, residential, recreational, and community sectors, ranging from intimate urban residences to large-scale housing developments, retail interiors, multiplexes, and malls.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Image Section */}
      <div className="sm:w-[75%] sm:h-[75%] max-h-[500px] overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://res.cloudinary.com/diqux3y0a/image/upload/v1753434032/40503_a9dzf8.jpg"
          alt="Philosophy"
          className="rounded-lg shadow-lg object-cover w-full h-full max-h-[500px]"
        />
      </div>

      {/* Text Section */}
      <div className="text-left">
        <h2 className="text-4xl font-bold mb-4 hover:text-gray-300 transition duration-300">
          Our Philosophy
        </h2>
        <p className="text-xl text-gray-400 mb-6 hover:text-white transition duration-300">
          Our guiding philosophy centers on architectural honesty and the importance of creating enriching spatial experiences. We adopt a pragmatic approach that carefully considers the project's context, client aspirations, materials, and technological advancements to develop solutions that are both appropriate and meaningful.
        </p>
        <p className="text-xl text-gray-400 hover:text-white transition duration-300">
          Emphasizing modern, tropical architecture, we aim to balance aesthetic appeal with functional excellence, respecting cultural and environmental nuances. By engaging with diverse communities and employing a multifaceted approach, a360studio is dedicated to developing culturally sensitive, evolving design solutions that foster authentic and impactful spatial experiences.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Leadership Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 hover:text-gray-300 transition duration-300">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto hover:text-white transition duration-300">
              At the core of our success is a dynamic leadership team of architects who bring a wealth of experience and a passion for innovation to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {[ 
              {
                name: "Srikanth Sada",
                role: "Principal Architect",
                desc: "Leading innovative design solutions with 15+ years of experience.",
                img: "/src/Assests/Srikanth-Sada.jpg",
              },
              {
                name: "Jane Doe",
                role: "Design Director",
                desc: "Championing design excellence and team creativity.",
                img: "/src/Assests/Srikanth-Sada.jpg",
              },
              {
                name: "Michael Lee",
                role: "Operations Head",
                desc: "Driving operational efficiency and quality execution.",
                img: "/src/Assests/Srikanth-Sada.jpg",
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center group transition duration-500 hover:scale-105">
                <div className="w-48 h-48 bg-black rounded-full mx-auto mb-6 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-300 transition duration-300 group-hover:text-white">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
