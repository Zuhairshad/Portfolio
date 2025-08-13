// components/AnimatedMacbook.jsx
import { motion } from "framer-motion";

export default function AnimatedMacbook({ className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotateX: 0 }}
      animate={{ y: [-2, -8, -2], rotateX: [0, 8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ perspective: 800 }}
      aria-label="Animated MacBook"
    >
      <svg
        viewBox="0 0 900 580"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="title desc"
        className="w-full h-auto"
      >
        <title id="title">MacBook Illustration</title>
        <desc id="desc">Minimal, animated outline of a MacBook with no background.</desc>

        {/* defs */}
        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* screen frame */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <rect
            x="120"
            y="60"
            rx="18"
            ry="18"
            width="660"
            height="420"
            fill="none"
            stroke="url(#g)"
            strokeWidth="6"
            filter="url(#glow)"
          />
          {/* inner bezel */}
          <rect
            x="145"
            y="85"
            rx="12"
            ry="12"
            width="610"
            height="370"
            fill="none"
            stroke="url(#g)"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          {/* camera dot */}
          <circle cx="450" cy="78" r="4" fill="url(#g)" />
        </motion.g>

        {/* screen "content" shimmer (subtle) */}
        <motion.rect
          x="155"
          y="95"
          rx="10"
          ry="10"
          width="590"
          height="350"
          fill="url(#g)"
          opacity="0.06"
          initial={{ x: -50 }}
          animate={{ x: [ -50, 0, 50, 0, -50 ] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* hinge */}
        <rect
          x="220"
          y="480"
          width="460"
          height="10"
          rx="5"
          fill="url(#g)"
          opacity="0.5"
        />

        {/* base */}
        <motion.path
          d="M60 520 Q100 500 160 500 H740 Q800 500 840 520 Q820 540 760 540 H140 Q80 540 60 520 Z"
          fill="none"
          stroke="url(#g)"
          strokeWidth="6"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* trackpad */}
        <rect
          x="380"
          y="510"
          width="140"
          height="16"
          rx="8"
          fill="url(#g)"
          opacity="0.35"
        />

        {/* “logo” hint (neutral shape) */}
        <motion.path
          d="M450 300 c-24 0-44-20-44-44 s20-44 44-44 s44 20 44 44 s-20 44-44 44 z"
          fill="url(#g)"
          opacity="0.18"
          initial={{ scale: 0.8, opacity: 0.0 }}
          animate={{ scale: [0.8, 1, 0.95, 1], opacity: [0, 0.18, 0.14, 0.18] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
