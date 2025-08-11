import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782689/Aerial-view-1_yzdhc2.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782688/Aerial-View---2_kmpyd2.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782687/View-03_jop0tw.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782685/Club-House_uxoqja.jpg",
  "https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782687/View-03_jop0tw.jpg",
];

const BuildDoxGarden = () => {
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
          src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1753782689/View-04_xfnfkg.jpg"
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
            BuildBox JJ Gardens
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
                className="w-full h-auto object-cover hover:scale-105 transition-all duration-300"
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
              alt="selected"
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

export default BuildDoxGarden;
