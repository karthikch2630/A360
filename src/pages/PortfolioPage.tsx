import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Vasavi BuildDox by Bhuvi", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782527/Aerial-View-2-15-5-23_iblkba.jpg" },
  { id: 2, title: "Bhuvi by Vasavi BuildDox", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782689/View-04_xfnfkg.jpg" },
  { id: 3, title: "Scintilla Apartment", image: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642124/Final_4-min_io9eve.jpg" },
  { id: 4, title: "Navanaami", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782764/Revised-01_enfwvq.jpg" },
  { id: 5, title: "Big Bull Pub", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782808/v1-_1_ni2obk.jpg" },
  { id: 6, title: "Courtyard Mansion", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782861/Final-03-_1_dpdg2x.jpg" },
  { id: 7, title: "Dwellings", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782923/Comm_View22_y093yy.jpg" },
  { id: 8, title: "Chirala Resort", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782959/scene-07_uwr9jp.jpg" },
  { id: 9, title: "Ananda Homes", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782997/03-_1_vsdhhd.jpg" },
  { id: 10, title: "ASR Memorial", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783065/v-2-grey_aktulx.jpg" },
  { id: 11, title: "RR Homes", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783103/06-copy_hc2lmq.jpg" },
  { id: 12, title: "Sahiti DPS", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783126/CXGS2864_ppdzti.jpg" },
  { id: 13, title: "Sindhuja Constructions", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783173/5_fe5apm.jpg" },
  { id: 14, title: "CRDA Office", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783217/SCENE-04_svfvwl.jpg" },
  { id: 15, title: "Prasad Commercial Building", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783258/c-11_ec7vzo.jpg" },
  { id: 16, title: "DS Dwellings", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783298/4-copy_niv5dv.jpg" },
  { id: 17, title: "Pulsus Corporate Office", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783346/WTFG4143_xqsxaz.jpg" },
  { id: 18, title: "Sahiti Commercial", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783368/GQAH1053_x5uqpa.jpg" },
  { id: 19, title: "RR Farmhouse", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783401/Front-Angle-View_gzbrhs.jpg" },
  { id: 20, title: "Vinod Mall", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784169/silpa-commercial-_1_zw3nzt.jpg" },
  { id: 21, title: "Gangavaram Port Office", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784222/41_eabhtj.jpg" },
  { id: 22, title: "OSR Infra", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784279/011_gubux3.jpg" },
  { id: 23, title: "Perupalem Beachfront Shiva Temple", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784331/0101-_16_uletch.jpg" },
  { id: 24, title: "DP Villa", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784357/scene-0101-_2_zwtzh0.jpg" },
  { id: 25, title: "YTD 450 Sq Yds", image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753784371/450-syds-evening-view_ocglyi.jpg" }
];


const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-20 bg-black text-white sm:pl-36">
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
              At A360 Architecture, we believe that great design goes beyond aesthetics — it’s about purpose, innovation, and impact. Our portfolio showcases a diverse range of architectural projects, each thoughtfully crafted to harmonize with its environment while meeting the highest standards of functionality and sustainability. From contemporary residences and commercial spaces to eco-conscious developments, our work reflects a commitment to timeless design, technical excellence, and client-focused solutions. Explore how we bring ideas to life through architecture that inspires and endures.
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
              <Link to={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`} key={project.id.toString()}>
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

export default React.memo(PortfolioPage);