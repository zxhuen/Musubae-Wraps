import "./Content.css";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 max-w-11/12 mt-10"
        id="ContentContainer"
      >
        <br></br>
        <br></br>
        <motion.h1
          className="text-center font-['Comic_Neue'] text-4xl font-bold mb-10 text-white"
          id="Products"
          initial={{
            opacity: 0,
            y: -40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          viewport={{
            once: true,
            amount: 1,
          }}
        >
          Products
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* First Photo */}
          <div className="text-center">
            <motion.div
              className="border-4 border-white rounded-xl shadow-lg overflow-hidden"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              <img
                src="Musubae.jpg"
                alt="Photo 1"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold mt-4 text-white font-['Comic_Neue']"
              id="SpamMusubi"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              Plain Spam Musubi
            </motion.h2>
            <motion.p
              className="text-white text-base mt-1 font-['Comic_Neue']"
              id="SpamMusubiDesc"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              Flavor-packed seasoned rice layered with crispy pan-seared Spam,
              wrapped in roasted seaweed, drizzled with creamy Japanese mayo and
              a savory sweet sauce.
            </motion.p>
            <motion.p
              className="text-white  text-xl mt-2 font-['Comic_Neue']"
              id="price"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              ₱49
            </motion.p>
          </div>

          <div className="text-center">
            <motion.div
              className="border-4 text-white rounded-xl shadow-lg overflow-hidden"
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              <img
                src="Musubae.jpg"
                alt="Photo 2"
                className="w-full object-cover"
              />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold mt-4 text-white font-['Comic_Neue']"
              id="SpamMusubi"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              Classic Spam Musubi
            </motion.h2>
            <motion.p
              className="text-white text-base mt-1 font-['Comic_Neue']"
              id="SpamMusubiDesc"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              Seasoned rice, fluffy egg, and crispy Spam wrapped in seaweed,
              topped with creamy Japanese mayo and a sweet, savory house-made
              sauce.
            </motion.p>
            <motion.p
              className="text-white text-xl mt-2 font-['Comic_Neue']"
              id="price"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              viewport={{
                once: false,
              }}
            >
              ₱59
            </motion.p>
          </div>

          <motion.div
            className="text-center md:text-center"
            id="addons"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            viewport={{
              once: false,
            }}
          >
            <h2 className="text-white text-5xl font-bold font-['Comic_Neue']">
              Add ons:
            </h2>
            <p className="text-white font-['Comic_Neue'] mt-2">
              Japanese Mayo - ₱5
            </p>
            <p className="text-white font-['Comic_Neue'] mt-2">
              Beef Sauce - ₱10
            </p>
            <p className="text-white font-['Comic_Neue'] mt-2">Cheese - ₱10</p>
            <p className="text-white font-['Comic_Neue'] mt-2">Spam - ₱25</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Content;
