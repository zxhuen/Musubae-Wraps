import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="MainHome" className="container mx-auto px-4 max-w-11/12 max">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="md:col-start-1">
          <motion.img
            src="transparentLogo.png"
            alt="Center Image"
            className="mx-auto w-full max-w-4xl rounded-lg"
            id="img"
            initial={{
              scale: 0.1,
              rotate: 80,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              rotate: -20,
              scale: 0.8,
            }}
            whileTap={{
              scale: 1.1,
            }}
          />
        </div>

        <div className="md:col-start-2 text-center md:text-left">
          <motion.h2
            className="font-['Comic_Neue']"
            id="Title"
            initial={{
              y: -120,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              rotateY: -20,
            }}
          >
            Musubae and Wraps
          </motion.h2>
          <motion.p
            id="desc"
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              scale: 1.2,
            }}
          >
            Fall in love at first bite with MUSUBAE!
          </motion.p>
          <br />
          <br />
          <a href="#Products">
            <motion.button
              className="rounded-full px-4 py-2 bg-[#3e1f00] text-white "
              initial={{
                y: 50,
                opacity: 0,
                x: -50,
              }}
              animate={{
                y: 0,
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              whileHover={{
                rotate: -5,
                color: "#ff8843",
                rotateY: 360,
                transition: { duration: 1.2, type: "spring" },
              }}
            >
              View Products
            </motion.button>
          </a>
          <motion.button
            className="rounded-full px-4 py-2  text-[#3e1f00] ml-5 border-[#3e1f00] border-[2px]"
            id="OrderNow"
            initial={{
              y: 50,
              opacity: 0,
              x: 50,
            }}
            animate={{
              y: 0,
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              backgroundColor: "#3e1f00",
              color: "white",
              rotate: 370,
            }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
