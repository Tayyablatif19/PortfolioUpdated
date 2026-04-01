import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Minimize2 } from 'lucide-react';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Window: React.FC<WindowProps> = ({ title, isOpen, onClose, children, className = "" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`glass-panel glow-border rounded-sm overflow-hidden flex flex-col ${className}`}
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Header */}
          <div className="h-8 bg-dim-green/30 border-b border-radar-green/20 flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-radar-green rounded-full animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-radar-green/80">{title}</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-radar-green/40 hover:text-radar-green transition-colors">
                <Minimize2 size={12} />
              </button>
              <button className="text-radar-green/40 hover:text-radar-green transition-colors">
                <Maximize2 size={12} />
              </button>
              <button 
                onClick={onClose}
                className="text-radar-green/40 hover:text-radar-green transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {children}
          </div>

          {/* Footer Decoration */}
          <div className="h-1 bg-radar-green/10 flex">
            <motion.div 
              className="h-full bg-radar-green"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
