import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import RadarBackground from './components/RadarBackground';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  const playSound = (type: 'click' | 'ping' | 'boot') => {
    if (isMuted) return;
    console.log(`Playing sound: ${type}`);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleLowPower = () => {
    setIsLowPower(!isLowPower);
  };

  return (
    <div className={`min-h-screen bg-bg-black text-white selection:bg-radar-green selection:text-bg-black ${isLowPower ? 'low-power' : ''}`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="main"
            initial={isLowPower ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <RadarBackground isLowPower={isLowPower} />
            <TopBar 
              isMuted={isMuted} 
              toggleMute={toggleMute} 
              isLowPower={isLowPower} 
              toggleLowPower={toggleLowPower} 
            />
            <Dashboard isLowPower={isLowPower} />
            
            {!isLowPower && (
              <div className="fixed inset-0 pointer-events-none z-500 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
