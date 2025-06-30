import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <p className="mx-1 text-4xl w-20">Za</p>
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
        <a
          href="https://linkedin.com/in/zuhair-ahmed1048"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/zuhairshad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaTwitter />
        </a>

      
      </div>
    </nav>
  );
};

export default Navbar;
