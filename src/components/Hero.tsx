import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

const backgroundImages = [
  "https://res.cloudinary.com/diqux3y0a/image/upload/v1752562302/Image-1_sdfnt5.jpg",
  "https://res.cloudinary.com/diqux3y0a/image/upload/v1752562405/CXGS2864_y9zat1.jpg",
  "https://res.cloudinary.com/diqux3y0a/image/upload/v1752562481/c_11_vblt7w.jpg",
  "https://res.cloudinary.com/diqux3y0a/image/upload/v1752562852/C_1_Final_bopwag.jpg",
  "https://res.cloudinary.com/diqux3y0a/image/upload/v1752562854/Final_01_1_olkjse.jpg",
  "https://res.cloudinary.com/diqux3y0a/image/upload/v1752562858/450_syds_evening_view_ua3sln.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Decorative top-right corner "L" shape */}
      <div className="fixed top-8 right-8 z-30">
        <div className="w-20 h-[2px] bg-white"></div>
        <div className="h-20 w-[2px] bg-white ml-auto"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImages[currentImage]}
          alt="Background"
          className="w-full h-full object-cover transition duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute bottom-8 left-8 md:left-[145px] z-40 bg-black/40 text-white p-3 rounded-full hover:bg-white hover:text-black transition"
      >
        <ChevronsLeft />
      </button>

      <button
        onClick={nextImage}
        className="absolute bottom-8 right-8 z-40 bg-black/40 text-white p-3 rounded-full hover:bg-white hover:text-black transition"
      >
        <ChevronsRight />
      </button>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center justify-center md:justify-end pr-0">
        <div className="text-white max-w-2xl text-center md:text-right">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
           ARCHITECTURE. INNOVATION.
<span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">A360.</span>

          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Architecture planning, education, interior design and sustainable
            development. Combining creative & innovative building solutions.
          </p>
          <div className="flex justify-center md:justify-end">
            <Link to="/portfolio">
            <button className="bg-white text-black px-8 py-3 font-semibold tracking-wider hover:bg-gray-300 transition-colors duration-300">
              Explore A360
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center w-full z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
