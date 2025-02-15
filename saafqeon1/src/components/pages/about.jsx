import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 text-center">
        {/* Heading with Animation */}
        <motion.h1 
          className="text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Saafqeon
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Saafqeon is a dynamic and innovative software house dedicated to crafting 
          high-quality solutions. Our team of passionate professionals leverages cutting-edge 
          technology to deliver impactful digital experiences.
        </motion.p>

        {/* Image Section */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://source.unsplash.com/random/800x400?team,work" 
            alt="Saafqeon Team" 
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </motion.div>

        {/* Our Mission Section */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            We aim to empower businesses and individuals with cutting-edge digital solutions, 
            fostering growth through technology, creativity, and innovation.
          </p>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To be a global leader in software innovation, transforming ideas into reality 
            and setting new standards in the tech industry.
          </p>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li>Innovation: We embrace creativity and new ideas.</li>
            <li>Integrity: We uphold honesty and transparency.</li>
            <li>Excellence: We strive for the highest quality in everything we do.</li>
            <li>Collaboration: We believe in teamwork and partnership.</li>
          </ul>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img 
                  src={`https://source.unsplash.com/random/200x200?person,${index}`} 
                  alt={`Team Member ${index}`} 
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">Team Member {index}</h3>
                <p className="text-gray-700">Software Engineer</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="bg-red-600 p-6 rounded-lg shadow-md text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Join Us Today!</h2>
          <p className="mb-4">
            Be a part of our journey and let's create something amazing together.
          </p>
          <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;