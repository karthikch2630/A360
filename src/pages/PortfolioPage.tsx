
 import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ananda Homes",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752640685/01_1_-min_bnyubs.jpg",
  },
  {
    id: 2,
    title: "Buildbox Gardens",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641172/View_04-min_it030l.jpg",
  },
  {
    id: 3,
    title: "Countryard Mansion",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641726/Final_03_1_-min_vycw6b.jpg",
  },
  {
    id: 4,
    title: "Scintilla Apartments",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642124/Final_4-min_io9eve.jpg",
  },
  {
    id: 5,
    title: "Vasavi BuildBox Bhuvi",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642403/Gate_With_Tower_14-5-23-min_vdwx7b.jpg",
  },
  {
    id: 6,
    title: "Sahithi Complex",
    image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752643596/CXGS2864_i35rjp.jpg",
  },
];

const PortfolioPage = () => {
  return (
    <div className="pt-20 bg-black text-white sm:pl-28">
      {/* Hero Section */}
      <motion.section
        className="py-16 sm:py-24 bg-black"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="underline underline-offset-4 decoration-white/50">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Discover our innovative architectural projects showcasing excellence and sustainable design.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        className="py-16 sm:py-24 bg-black"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <Link to={`/portfolio/${project.title.replace(/\s+/g, "-")}`} key={project.id}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioPage; //