import React, { useRef } from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-100px',
  });

  return (
    <div className='border-b border-neutral-900 pb-4' ref={ref}>
      <h2 className='pt-10 my-20 text-center text-5xl'>
        About <span className='text-neutral-500'>Me</span>
      </h2>

      <div className='flex flex-wrap items-center'>

        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full lg:w-1/2 flex justify-center p-4'
        >
          <div className='w-[300px] md:w-[350px] lg:w-[400px] aspect-square'>
            <img
              src={aboutImg}
              alt="About"
              className='rounded-xl shadow-lg w-full h-full object-cover'
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className='w-full lg:w-1/2 px-4'
        >
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 text-neutral-400 leading-relaxed tracking-tight text-lg'>
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
