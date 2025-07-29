import { motion } from "framer-motion";
import { useEffect } from "react";

const images = [
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783380/IMMX9058_nprcvy.jpg",
];

const SahitiCom = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Fullscreen Cover Image */}
      <section className="relative h-screen w-full">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1753783368/GQAH1053_x5uqpa.jpg"
          alt="Cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white text-4xl font-bold drop-shadow-md"
          >
            <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 text-2xl font-semibold rounded-md shadow-lg">
              Sahiti commercial
            </h1>
          </motion.h1>
        </div>
      </section>

      {/* Scrolling Images */}
      <section className=" py-20 px-4 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`img-${idx}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SahitiCom;
