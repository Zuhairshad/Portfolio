import React, { useRef } from "react";
import { HERO_CONTENT } from "../constants";
import { motion, useInView } from "framer-motion";
import AnimatedMacbook from "../components/AnimatedMacbook";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "50px" });

  return (
    <div
      ref={ref}
      className="border-b border-neutral-900 pb-4 lg:mb-35 min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      {/* Text Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <h1 className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
          Zuhair Ahmed
        </h1>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl"
        >
          Full Stack Developer
        </motion.span>

        <p className="my-4 max-w-xl py-6 font-light tracking-tight text-neutral-400 whitespace-pre-line mx-auto">
          {HERO_CONTENT}
        </p>
      </motion.div>

      {/* Animated MacBook */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-10 w-full max-w-4xl"
      >
        <AnimatedMacbook className="mx-auto max-w-2xl" />
      </motion.div>
    </div>
  );
};

export default Hero;
