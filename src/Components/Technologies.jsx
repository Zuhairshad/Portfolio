import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiGithub, DiJavascript1 } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';

const techStack = [
  { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, label: 'React' },
  { icon: <SiMongodb className='text-7xl text-green-500' />, label: 'MongoDB' },
  { icon: <DiGithub className='text-7xl text-white' />, label: 'GitHub' },
  { icon: <FaNode className='text-7xl text-green-500' />, label: 'Node.js' },
  { icon: <DiJavascript1 className='text-7xl text-yellow-400' />, label: 'JavaScript' },
  { icon: <SiTailwindcss className='text-7xl text-cyan-400' />, label: 'Tailwind CSS' },
  { icon: <SiExpress className='text-7xl text-gray-300' />, label: 'Express.js' },
];

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80 },
  },
};

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <div className='border-b border-neutral-800 pb-24' ref={ref}>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <motion.div
        className='flex flex-wrap items-center justify-center gap-4'
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className='rounded-2xl border-4 border-neutral-800 p-4 w-36 h-36 flex flex-col items-center justify-center'
            variants={itemVariants}
          >
            <motion.div
              animate={{
                y: index % 2 === 0 ? [0, -12, 0] : [0, 12, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              {tech.icon}
            </motion.div>
            <p className='text-center mt-2 text-sm'>{tech.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
