import React from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Fixed duplicate import
import { motion } from "framer-motion";

function FloatingCube({ position, size, color }) {
  const cubeRef = React.useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.005;
      cubeRef.current.position.y =
        position[1] + Math.sin(Date.now() * 0.0015) * 0.3;
    }
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.4} />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [5, 5, 20] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 10, 10]} intensity={1.5} />

          {/* Floating cubes */}
          <FloatingCube position={[-40, 2, -10]} size={[3, 3, 3]} color="purple" />
          <FloatingCube position={[40, -2, -10]} size={[2, 2, 2]} color="purple" />
          <FloatingCube position={[-35, -10, -10]} size={[4, 4, 4]} color="purple" />
          <FloatingCube position={[35, -10, -10]} size={[2.5, 2.5, 2.5]} color="purple" />
        </Canvas>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 p-6 rounded-lg shadow-lg">
        <motion.h1
          className="text-4xl text-white font-bold text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Welcome to My Website
        </motion.h1>
        <motion.h1
          className="text-4xl text-white font-bold text-center mt-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          BlockChain
        </motion.h1>
        <motion.p
  className="text-sm text-white mt-2 text-justify leading-6" // Removed 'text-center'
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 2, ease: "easeIn" }}
>
  Welcome to Pixelette Technologies, where we transform the elusive
  ‘what if’ into the tangible ‘what is’. As specialists in AI <br /> and
  Blockchain, we deliver end-to-end IT solutions from conception through
  deployment, ensuring seamless integration and support.
</motion.p>
        <div className="flex justify-center items-center mt-16">
          {/* Left Button */}
          <motion.button
            className="p-2 mx-2 rounded-lg bg-[#333233] text-white text-sm uppercase"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Begin Your Journey
          </motion.button>

          {/* Right Button */}
          <motion.button
            className="p-2 mx-2 rounded-lg bg-[#333233] text-white text-sm uppercase"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Begin Your Journey
          </motion.button>
        </div>
      </div>
    </div>
  );
}
