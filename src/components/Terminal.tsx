import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['TL-OS v3.0 Terminal Ready.', 'Type "help" for a list of commands.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory(prev => [...prev, `> ${input}`]);

    switch (cmd) {
      case 'help':
        setHistory(prev => [...prev, 'Available commands: help, about, skills, download resume, exit, clear, override']);
        break;
      case 'about':
        setHistory(prev => [...prev, 'Muhammad Tayyab Latif: Systems Strategist, Engineer, Finance Professional.']);
        break;
      case 'skills':
        setHistory(prev => [...prev, 'Technical: C++, Python, MATLAB, JS/TS. Finance: Analysis, Excel, Power BI.']);
        break;
      case 'download resume':
        setHistory(prev => [...prev, 'Initiating secure document retrieval...', 'Resume download started.']);
        const link = document.createElement('a');
        const resumeUrl = new URL('/TayyabLatifResume.pdf', import.meta.url).href;
        link.href = resumeUrl;
        link.download = 'Muhammad_Tayyab_Latif_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'exit':
        onClose();
        break;
      case 'override':
        setHistory(prev => [...prev, 'CRITICAL ALERT: Resilience protocol acknowledged. System recalibrated.']);
        break;
      default:
        setHistory(prev => [...prev, `Command not found: ${cmd}`]);
    }
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-bg-black/40 backdrop-blur-sm"
        >
          <div className="w-full max-w-2xl h-100 bg-bg-black border border-radar-green/40 shadow-[0_0_30px_rgba(0,255,156,0.1)] flex flex-col font-mono">
            {/* Header */}
            <div className="h-8 bg-dim-green/30 border-b border-radar-green/20 flex items-center justify-between px-3 shrink-0">
              <div className="flex items-center space-x-2">
                <TerminalIcon size={14} className="text-radar-green" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-radar-green/80">System Terminal</span>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={onClose} className="text-radar-green/40 hover:text-radar-green transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* History */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-1 text-xs text-radar-green/80 custom-scrollbar"
            >
              {history.map((line, i) => (
                <div key={i} className={line.startsWith('CRITICAL') ? 'text-red-500 font-bold' : ''}>
                  {line}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleCommand} className="p-4 border-t border-radar-green/20 flex items-center space-x-2">
              <span className="text-radar-green font-bold shrink-0">{">"}</span>
              <input 
                autoFocus
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xs text-radar-green placeholder:text-radar-green/20"
                placeholder="Enter command..."
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
