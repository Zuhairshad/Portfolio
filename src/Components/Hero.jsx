import React, { useRef } from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/1.png'; // Make sure this path points to your image
import { motion, useInView } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '50px' });

  return (
    <div ref={ref} className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>

        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center lg:text-left'>
              Zuhair Ahmed
            </h1>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className='bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl text-center lg:text-left'
            >
              Full Stack Developer
            </motion.span>

            <p className='my-4 max-w-xl py-6 font-light tracking-tight text-neutral-400 text-center lg:text-left whitespace-pre-line'>
              {HERO_CONTENT}
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        
        <div className='w-full lg:w-1/2 flex items-start justify-center lg:mt-14 lg:-mt-8 lg:ml-[-100px]'>
  <div className='w-[60%]'>
    <img
      src={profilePic}
      alt="Profile"
      className='rounded-2xl w-full h-auto shadow-2xl'
    />
  </div>
</div>


      </div>
    </div>
  );
};

export default Hero;