import React, { useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <div className='border-b border-neutral-900 pb-4' ref={ref}>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
<div key={index} className='mb-8 flex flex-wrap items-start lg:justify-center lg:gap-x-12 px-4'>

            {/* Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className='w-full lg:w-1/4 px-4 flex justify-center lg:justify-end'
            >
              <p className='mb-2 text-3xl text-neutral-400'>{experience.year}</p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='w-full max-w-xl lg:w-3/4 px-4'
            >
              <h6 className='mb-2 font-semibold'>
                {experience.role} - <span className='text-sm text-purple-200'>{experience.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
