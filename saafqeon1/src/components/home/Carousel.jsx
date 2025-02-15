import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaCode } from "react-icons/fa";
import { SiVite, SiCplusplus } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";

const icons = [
  { icon: <FaHtml5 size={64} />, label: "HTML" },
  { icon: <FaCss3Alt size={64} />, label: "CSS" },
  { icon: <FaJs size={64} />, label: "JavaScript" },
  { icon: <FaReact size={64} />, label: "React" },
  { icon: <FaCode size={64} />, label: "C#" }, // Using a placeholder icon
  { icon: <FaPython size={64} />, label: "Python" },
  { icon: <AiFillAndroid size={64} />, label: "Android" },
  { icon: <SiVite size={64} />, label: "Vite" },
  { icon: <SiCplusplus size={64} />, label: "C++" },
];

// Duplicate the icons for a seamless effect
const loopIcons = [...icons, ...icons];

const Carousel = () => {
  return (
    <div className="min-h-screen text-white bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 top-1/4 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-1/4 right-1/4"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl font-bold text-center pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Trusted By Leading Innovators
        </motion.h1>

        {/* Smooth Infinite Loop Carousel */}
        <div className="w-full overflow-hidden py-14 relative">
          <motion.div
            className="flex space-x-6"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              width: "max-content",
            }}
          >
            {[...loopIcons, ...loopIcons].map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-32 h-32 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {icon.icon}
                <p className="mt-2 text-black text-sm font-semibold">{icon.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* New Section: Statistics with Count-Up Animation */}
        <div className="py-20">
          <motion.h2
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="flex justify-center space-x-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            >
              <CountUp end={100} duration={10} suffix="+" className="text-5xl font-bold" />
              <p className="text-xl mt-2">Projects Completed</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            >
              <CountUp end={50} duration={10} suffix="+" className="text-5xl font-bold" />
              <p className="text-xl mt-2">Happy Clients</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
            >
              <CountUp end={8} duration={8} suffix="+" className="text-5xl font-bold" />
              <p className="text-xl mt-2">Years of Experience</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;