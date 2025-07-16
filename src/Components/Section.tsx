import "./Section.css";
import { motion } from "framer-motion";

const Section = () => {
  const images = [
    "one.jpg",
    "two.jpg",
    "three.jpg",
    "four.jpg",
    "five.jpg",
    "six.jpg",
    "seven.jpg",
    "eight.jpg",
    "nine.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
  ];
  return (
    <>
      <div className="container mx-auto px-4 max-w-11/12" id="SectionContainer">
        <div className="p-4 sm:p-6 md:p-8">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
            id="gallery"
          >
            Gallery
          </h1>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="rounded-lg aspect-square overflow-hidden shadow-md group"
              >
                <img
                  src={src}
                  alt={`Item ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Section;
