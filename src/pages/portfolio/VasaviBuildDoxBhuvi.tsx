import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782527/Gate-With-Tower--14-5-23_t93z06.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782527/9-_1_tij5cy.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782527/Club-House-Aerial---03-14-5-23_qa6vwp.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782526/Basketball-Court--15-4-23_1_irnpms.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782526/Entrance-Gate-14-5-23_vqjaib.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782526/Club2_umzhyy.jpg",
];

const VasaviBuildDoxBhuvi = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Fullscreen Cover Image */}
      <section className="relative h-screen w-full">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782527/Aerial-View-2-15-5-23_iblkba.jpg"
          alt="Cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 text-2xl font-semibold rounded-md shadow-lg"
          >
            Vasavi BuildBox Bhuvi
          </motion.h1>
        </div>
      </section>

      {/* Scrolling Images */}
      <section className="py-20 px-4 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`img-${idx}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="fullscreen"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VasaviBuildDoxBhuvi;
