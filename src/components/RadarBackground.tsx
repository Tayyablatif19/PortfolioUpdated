import React from 'react';
import { motion } from 'motion/react';

interface RadarBackgroundProps {
  isLowPower?: boolean;
}

const RadarBackground: React.FC<RadarBackgroundProps> = ({ isLowPower }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-black">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      
      {/* Radar Sweep */}
      {!isLowPower && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax]">
          <motion.div 
            className="w-full h-full border-l border-radar-green/20 origin-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'conic-gradient(from 0deg, rgba(0, 255, 156, 0.1) 0deg, transparent 60deg)'
            }}
          />
        </div>
      )}

      {/* Subtle Particles */}
      {!isLowPower && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-radar-green/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0.1
              }}
              animate={{ 
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      )}

      {/* Scanline */}
      {!isLowPower && <div className="scanline"></div>}
    </div>
  );
};

export default RadarBackground;
