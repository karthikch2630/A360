import { useState } from "react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Ananda Homes",
      category: "Residential",
      location: "Toronto, ON",
      year: "2024",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752640685/01_1_-min_bnyubs.jpg",
      description:
        "A modern residential complex featuring sustainable design and innovative living spaces.",
    },
    {
      id: 2,
      title: "Buildbox jj Gardens",
      category: "Commercial",
      location: "Vancouver, BC",
      year: "2023",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641172/View_04-min_it030l.jpg",
      description:
        "A cutting-edge commercial development with state-of-the-art facilities.",
    },
    {
      id: 3,
      title: "Countryard Mansion",
      category: "Mixed-Use",
      location: "Calgary, AB",
      year: "2023",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641726/Final_03_1_-min_vycw6b.jpg",
      description:
        "An eco-friendly mixed-use development combining retail, office, and residential spaces.",
    },
    {
      id: 4,
      title: "Scintilla Apartments",
      category: "Apartments",
      location: "Montreal, QC",
      year: "2022",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642124/Final_4-min_io9eve.jpg",
      description:
        "A contemporary cultural center designed to serve the community with flexible spaces.",
    },
    {
      id: 5,
      title: "Vasavi BuildBox Bhuvi",
      category: "Residential",
      location: "Toronto, ON",
      year: "2022",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642403/Gate_With_Tower_14-5-23-min_vdwx7b.jpg",
      description:
        "Luxury high-rise residential towers with panoramic city views.",
    },
    {
      id: 6,
      title: "Sahithi DPS",
      category: "Mixed-Use",
      location: "Ottawa, ON",
      year: "2021",
      image:
        "https://res.cloudinary.com/diqux3y0a/image/upload/v1752643596/CXGS2864_i35rjp.jpg",
      description:
        "A modern office complex designed to foster innovation and collaboration.",
    },
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Mixed-Use",
    "Institutional",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OUR{" "}
              <span className="underline underline-offset-4">PORTFOLIO</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our collection of innovative architectural projects that
              showcase our commitment to excellence and sustainable design.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-black font-semibold"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-3 py-1 text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-sm">
                    {project.year}
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 group-hover:decoration-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{project.location}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <p className="text-gray-400 text-center col-span-full">
                No projects found in this category.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
