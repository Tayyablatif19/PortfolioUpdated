import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  const messages = [
    "Initializing system...",
    "Loading mission logs...",
    "Decrypting user profile...",
    "Access Granted."
  ];

  useEffect(() => {
    let currentMessageIndex = 0;
    const interval = setInterval(() => {
      if (currentMessageIndex < messages.length) {
        setLogs(prev => [...prev, messages[currentMessageIndex]]);
        currentMessageIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 800);

    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-bg-black flex items-center justify-center z-[200] font-mono p-8"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-md w-full">
        <div className="space-y-2">
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-radar-green"
            >
              <span className="mr-2">{">"}</span>
              {log}
            </motion.div>
          ))}
          <div className="text-radar-green">
            <span className="mr-2">{">"}</span>
            <span className={cursorVisible ? 'opacity-100' : 'opacity-0'}>_</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
