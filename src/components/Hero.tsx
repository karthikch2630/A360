import { useState, useEffect } from "react";
import { ChevronsLeft, ChevronsRight, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753445371/04_tp1czz.jpg",
    name: "BuildBox jj Gardens",
  },
  {
    url: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753445377/09_sswiep.jpg",
    name: "Sahithi Comercial Complex",
  },
  {
    url: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753445372/05_mmqtcu.jpg",
    name: "Navanaami Willow Greens",
  },
  {
    url: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753445368/06_sgov3z.jpg",
    name: "MRS Renuka Residency",
  },
  {
    url: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753445370/08_dpx2am.jpg",
    name: "MMRDA Metro Station",
  },
  {
    url: "https://res.cloudinary.com/diqux3y0a/image/upload/v1753445375/02_x7k1g3.jpg",
    name: "Vasavi BuildBox Bhuvi",
  },
];



const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(nextImage, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const nextIndex = (currentImage + 1) % backgroundImages.length;
  const nextImage = new Image();
  nextImage.src = backgroundImages[nextIndex].url;
}, [currentImage]);


  return (
    <section
      className="relative bg-black overflow-hidden box-border antialiased"
      style={{ height: "98dvh" }}
    >
       <div className="fixed top-8 right-8 z-30 hidden md:block">
        <div className="w-20 h-[2px] bg-white"></div>
        <div className="h-20 w-[2px] bg-white ml-auto"></div>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.img
      key={backgroundImages[currentImage].url}
      src={backgroundImages[currentImage].url}
      alt="Hero Background"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    />
  </AnimatePresence>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
</div>


      {/* Arrows */}
      {/* Left Chevron */}
      <button
        onClick={prevImage}
        className="absolute bottom-6 left-6 sm:bottom-8 sm:left-28 z-40 bg-black/40 text-white p-3 rounded-full hover:bg-white hover:text-black transition"
        aria-label="Previous"
      >
        <ChevronsLeft />
      </button>

      {/* Right Chevron */}
      <button
        onClick={nextImage}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-black/40 text-white p-3 rounded-full hover:bg-white hover:text-black transition"
        aria-label="Next"
      >
        <ChevronsRight />
      </button>

      {/* Animated Name - Right Center */}
      <div className="absolute bottom-24 right-10 transform -translate-y-1/2 z-20 max-w-[80%] md:max-w-[40%]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={backgroundImages[currentImage].name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg text-right sm:text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px]"
          >
            {backgroundImages[currentImage].name}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div
  className="absolute bottom-4 sm:bottom-9 left-1/2 sm:left-auto sm:right-24 transform -translate-x-1/2 sm:translate-x-0 
             z-30 bg-black/70 px-4 py-2 rounded-md shadow-md text-white text-xs sm:text-sm 
             flex flex-col sm:flex-row items-center gap-1 sm:gap-4 w-[90%] sm:w-auto max-w-sm sm:max-w-none"
>
  <a
    href="mailto:a360studio.shiva@gmail.com"
    className="flex items-center gap-1 hover:text-gray-300 transition"
  >
    <Mail size={14} />
    <span className="truncate">a360studio.shiva@gmail.com</span>
  </a>

  <span className="hidden sm:inline text-gray-400">|</span>

  <a
    href="tel:+917673989854"
    className="flex items-center gap-1 hover:text-gray-300 transition"
  >
    <Phone size={14} />
    <span>+91 7673989854</span>
  </a>
</div>

    </section>
  );
};

export default Hero;
