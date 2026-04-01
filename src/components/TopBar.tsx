import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Signal, Volume2, VolumeX, Clock, Zap, ZapOff } from 'lucide-react';

interface TopBarProps {
  isMuted: boolean;
  toggleMute: () => void;
  isLowPower: boolean;
  toggleLowPower: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isMuted, toggleMute, isLowPower, toggleLowPower }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-12 bg-bg-black/80 ${isLowPower ? '' : 'backdrop-blur-md'} border-b border-radar-green/20 z-100 flex items-center justify-between px-4 sm:px-6 font-mono text-xs text-radar-green`}>
      <div className="flex items-center space-x-2 sm:space-x-6">
        <div className="flex items-center space-x-2">
          <Shield size={14} className={`text-radar-green ${isLowPower ? '' : 'animate-pulse'}`} />
          <span className="font-bold tracking-widest glow-text hidden sm:inline">TayyabLatif-OS v1.0</span>
          <span className="font-bold tracking-widest glow-text sm:hidden">TL-OS</span>
        </div>          <div className="px-2 py-1 rounded-sm bg-yellow-500/20 border border-yellow-400 text-yellow-300 text-[10px] uppercase tracking-wider hidden sm:block">
            LOW POWER MODE
          </div>
          <div className="px-1 py-1 rounded-sm bg-yellow-500/20 border border-yellow-400 text-yellow-300 text-[8px] uppercase tracking-wider sm:hidden">
            LPM
          </div>        <div className="flex items-center space-x-2 border-l border-radar-green/20 pl-2 sm:pl-6">
          <Signal size={14} />
          <span className="uppercase tracking-tighter hidden sm:inline">Status: ACTIVE</span>
          <span className="uppercase tracking-tighter sm:hidden">ACTIVE</span>
          {!isLowPower && (
            <motion.div 
              className="w-2 h-2 bg-radar-green rounded-full shadow-[0_0_8px_#00FF9C]"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-6">
        <div className="flex items-center space-x-2">
          <Clock size={14} />
          <span>{time.toLocaleTimeString([], { hour12: false })}</span>
        </div>
        
        <div className="flex items-center space-x-4 border-l border-radar-green/20 pl-2 sm:pl-6">
          <button 
            onClick={toggleLowPower}
            className={`hover:text-white transition-colors cursor-pointer flex items-center space-x-1 ${isLowPower ? 'text-white' : ''}`}
            title={isLowPower ? "Disable Performance Mode" : "Enable Performance Mode"}
          >
            {isLowPower ? <Zap size={16} /> : <ZapOff size={16} />}
            <span className="text-[9px] uppercase font-bold tracking-tighter">PERF</span>
          </button>

          <button 
            onClick={toggleMute}
            className="hover:text-white transition-colors cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
