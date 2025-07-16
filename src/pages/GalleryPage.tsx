

const GalleryPage = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641726/Final_03_1_-min_vycw6b.jpg",
      title: "Modern Mansion",
      category: "Residential",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642408/9_1_-min_sd6b5o.jpg",
      title: "Villa",
      category: "Residential",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642402/Single_Tower_14-5-23-min_gmcgyy.jpg",
      title: "Towers Complex",
      category: "Residential",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752642133/Final_1-min_rmk8wx.jpg",
      title: "Scintilla Towers",
      category: "Towers",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641189/Club_House-min_h6ymz4.jpg",
      title: "Innovation Hub",
      category: "club",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752643596/YBAW8357_dqxlmr.jpg",
      title: "Urban Development",
      category: "Mixed-Use",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752641719/Aerial_01_21-11-23-min_xcvqno.jpg",
      title: "masion",
      category: "Residential",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/diqux3y0a/image/upload/v1752573796/Comm_View22._s2k7ub.jpg",
      title: "Downtown Offices",
      category: "Commercial",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3735329/pexels-photo-3735329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Learning Campus",
      category: "Institutional",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Interior Hallway",
      category: "Interior",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Mixed-Use Block",
      category: "Mixed-Use",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Modern Villas",
      category: "Residential",
    },
    {
      id: 13,
      src: "https://images.pexels.com/photos/417321/pexels-photo-417321.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Innovation Park",
      category: "Commercial",
    },
    {
      id: 14,
      src: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Institutional Building",
      category: "Institutional",
    },
    {
      id: 15,
      src: "https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Creative Studio",
      category: "Interior",
    },
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Institutional",
    "Interior",
    "Mixed-Use",
  ];

  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            PROJECT <span className="text-white">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-400">
            Visual showcase of our architectural achievements and design
            excellence across various project types and scales.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer ${
                  index === 0 || index === 5
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full object-cover transition-all  duration-500 grayscale group-hover:grayscale-0 scale-110 ${
                      index === 0 || index === 5
                        ? "h-96 md:h-[400px]"
                        : "h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-3 py-1 text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold">
                      {image.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-gray-400">Awards Won</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
