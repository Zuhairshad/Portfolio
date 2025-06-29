import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const bounceTransition = {
  repeat: Infinity,
  repeatType: 'reverse',
  duration: 1,
  ease: 'easeInOut',
};

const GetInTouch = () => {
  return (
    <div className="border-t border-neutral-900 py-16 text-center">
      <h2 className="text-4xl mb-6">Get in Touch</h2>
      <p className="text-neutral-400 mb-6">
        Feel free to reach out for collaborations, freelance work, or just a friendly hello.
      </p>

      <div className="flex justify-center items-center gap-8 text-3xl">
        {/* Email */}
        <motion.a
          href="mailto:zuhairshad140@gmail.com"
          className="text-neutral-300 hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [0, -10, 0] }}
          transition={{ ...bounceTransition, delay: 0 }}
        >
          <MdEmail />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://linkedin.com/in/zuhair-ahmed1048"
          className="text-neutral-300 hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [0, 10, 0] }}
          transition={{ ...bounceTransition, delay: 0.2 }}
        >
          <FaLinkedin />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/zuhairshad"
          className="text-neutral-300 hover:text-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [0, -10, 0] }}
          transition={{ ...bounceTransition, delay: 0.4 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </div>
  );
};

export default GetInTouch;
