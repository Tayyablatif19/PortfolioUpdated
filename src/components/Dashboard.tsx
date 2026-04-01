import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Code, Terminal as TerminalIcon, Mail, FileText, Award, ShieldAlert, Camera } from 'lucide-react';
import Window from './Window';

const pfp = new URL('../gallery/pfp.png', import.meta.url).href;
import About from './About';
import ExperienceTimeline from './ExperienceTimeline';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Terminal from './Terminal';
import Gallery from './Gallery';
import { Section } from '../types';

interface DashboardProps {
  isLowPower?: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isLowPower }) => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  const toggleSection = (section: Section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
      // Random alert chance
     if (!isLowPower && Math.random() > 0.7) {
        const newAlert = Math.random() > 0.5 ? "New decision node detected" : "System recalibrated";
        setAlerts(prev => [...prev, newAlert]);
        setTimeout(() => setAlerts(prev => prev.filter(a => a !== newAlert)), 3000);
      }
    }
  };

  const menuItems = [
    { id: 'about', label: 'Mission Brief', icon: <User size={24} />, component: <About /> },
    { id: 'experience', label: 'Mission Logs', icon: <Briefcase size={24} />, component: <ExperienceTimeline /> },
    { id: 'skills', label: 'Capabilities', icon: <Code size={24} />, component: <Skills /> },
    { id: 'projects', label: 'Deployed Systems', icon: <Award size={24} />, component: <Projects /> },
    { id: 'gallery', label: 'Visual Recon', icon: <Camera size={24} />, component: <Gallery /> },
    { id: 'contact', label: 'Signal Channel', icon: <Mail size={24} />, component: <Contact /> },
  ];

  return (
    <div className="relative min-h-screen pt-20 pb-12 px-6 font-mono overflow-y-auto custom-scrollbar">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Sidebar Menu */}
        <div className="md:col-span-3 space-y-4">
          <div className="glass-panel p-4 border border-radar-green/20 rounded-sm space-y-6">
            <div className="flex flex-col items-center space-y-2 pb-4 border-b border-radar-green/10">
              <div className="w-16 h-16 bg-dim-green/20 border border-radar-green/30 rounded-full overflow-hidden">
                <img src={pfp} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-radar-green uppercase tracking-widest">M. Tayyab Latif</div>
                <div className="text-[9px] text-radar-green/40 uppercase tracking-tighter">Rank: Student</div>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleSection(item.id as Section)}
                  className={`w-full flex items-center space-x-4 p-3 rounded-sm transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'bg-radar-green/20 border border-radar-green/40 text-radar-green' 
                      : 'hover:bg-radar-green/5 border border-transparent text-radar-green/60'
                  }`}
                >
                  <div className={`${activeSection === item.id ? 'text-radar-green' : 'text-radar-green/40 group-hover:text-radar-green'}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-radar-green/10 space-y-2">
              <button 
                onClick={() => setIsTerminalOpen(true)}
                className="w-full flex items-center space-x-4 p-3 rounded-sm hover:bg-radar-green/5 text-radar-green/60 transition-all group"
              >
                <TerminalIcon size={18} className="text-radar-green/40 group-hover:text-radar-green" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Open Terminal</span>
              </button>
              <a 
                href="/resume.pdf" 
                download="Muhammad_Tayyab_Latif_Resume.pdf"
                className="w-full flex items-center space-x-4 p-3 rounded-sm hover:bg-radar-green/5 text-radar-green/60 transition-all group"
              >
                <FileText size={18} className="text-radar-green/40 group-hover:text-radar-green" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Download Resume</span>
              </a>
            </div>
          </div>

          {/* System Status Panel */}
          <div className="glass-panel p-4 border border-radar-green/20 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase font-bold tracking-widest text-radar-green/40">System Load</span>
              <span className="text-[9px] text-radar-green">22%</span>
            </div>
            <div className="h-1 bg-dim-green/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-radar-green"
                animate={isLowPower ? { width: "12%" } : { width: ["10%", "15%", "12%"] }}
                transition={isLowPower ? { duration: 0 } : { duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase font-bold tracking-widest text-radar-green/40">Network Latency</span>
              <span className="text-[9px] text-radar-green">26ms</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-9 relative">
          <AnimatePresence mode="wait">
            {!activeSection ? (
              <motion.div
                key="welcome"
                  initial={isLowPower ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center space-y-8 text-center p-12"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-radar-green/10 blur-3xl rounded-full" />
                 <ShieldAlert size={80} className={`text-radar-green/20 relative ${isLowPower ? '' : 'animate-pulse'}`} />
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-radar-green glow-text uppercase tracking-tighter">System Idle</h1>
                  <p className="text-sm text-radar-green/40 max-w-md uppercase tracking-widest leading-relaxed">
                    Select a module from the sidebar to initialize mission data retrieval.
                  </p>
                </div>
                 {!isLowPower && (
                  <div className="flex space-x-4">
                    <div className="w-2 h-2 bg-radar-green rounded-full animate-ping" />
                    <div className="w-2 h-2 bg-radar-green rounded-full animate-ping [animation-delay:0.2s]\" />
                    <div className="w-2 h-2 bg-radar-green rounded-full animate-ping [animation-delay:0.4s]\" />
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="h-full">
                {menuItems.map((item) => (
                  <Window
                    key={item.id}
                    title={item.label}
                    isOpen={activeSection === item.id}
                    onClose={() => setActiveSection(null)}
                    className="w-full"
                  >
                    {item.component}
                  </Window>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Terminal Modal */}
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* System Alerts Overlay */}
      <div className="fixed bottom-8 right-8 space-y-4 z-[300] pointer-events-none">
        <AnimatePresence>
          {alerts.map((alert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="bg-bg-black border border-radar-green/40 p-4 flex items-center space-x-3 glow-border"
            >
              <ShieldAlert size={16} className="text-radar-green" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-radar-green">{alert}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
