import "./Navigation.css";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <nav className="flex items-center px-6 py-4 w-[95%]  mx-auto" id="test">
        <motion.div
          className="text-2xl font-bold text-brown-800"
          initial={{
            x: -50,
            y: -40,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            type: "spring",
          }}
          whileHover={{
            rotateY: -40,
            scale: 1.3,
            rotate: -12,
            transition: { duration: 0.8, type: "spring" },
          }}
        >
          Musubae
        </motion.div>

        <motion.ul
          className="flex gap-6 mx-auto text-brown-700 font-medium"
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
          }}
        >
          <motion.li
            whileHover={{
              scale: 1.2,
              color: "#a05a2c",
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{
              scale: 1.3,
            }}
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              color: "#a05a2c",
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{
              scale: 1.3,
            }}
          >
            <a href="#Products">Products</a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              color: "#a05a2c",
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{
              scale: 1.3,
            }}
          >
            <a href="#SectionContainer">Gallery</a>
          </motion.li>
        </motion.ul>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61577387721319"
            target="blank"
          >
            <motion.button
              className="text-white  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#6f3e1d]   dark:border-gray-700 "
              id="buttondis"
              initial={{
                x: 50,
                y: -40,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                type: "spring",
              }}
              whileHover={{
                backgroundColor: "#a05a2c",
                scale: 1.05,
                transition: {
                  duration: 0.8,
                  type: "spring",
                },
              }}
            >
              Order Now
            </motion.button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
