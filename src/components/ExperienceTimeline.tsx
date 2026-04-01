import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MissionLog } from '../types';
import { TrendingUp, Award, Shield, Briefcase } from 'lucide-react';

const logs: MissionLog[] = [
  {
    phase: "PHASE 01",
    label: "Electrical Engineering",
    institution: "SEECS, NUST",
    details: [
      "Started in 2021",
      "Built foundation in systems thinking",
      "Minor: Computer Science",
      "Semesters Completed: 5/8"
    ],
    year: 2021,
    growth: 30
  },
  {
    phase: "PHASE 02",
    label: "Air Force Training",
    institution: "Pakistan Air Force",
    details: [
      "Joined in 2024",
      "Underwent military training",
      "Field of Study: Avionics Engineering",
      "Semesters Completed: 3/8",
      "Developed discipline, leadership, resilience",
      "Withdrew in 2025 due to reasons beyond control"
    ],
    year: 2024,
    growth: 100
  },
  {
    phase: "PHASE 03",
    label: "Strategic Shift to Finance",
    institution: "NBS, NUST",
    details: [
      "Started in 2025",
      "Subjects: Financial Accounting, Reporting, Management",
      "Career Direction: ACCA, CFA"
    ],
    year: 2025,
    growth: 50
  }
];

const ExperienceTimeline: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<MissionLog | null>(null);

  return (
    <div className="space-y-12 font-mono">
      {/* Graph Visualization */}
      <div className="relative h-64 border-b border-l border-radar-green/20 p-4 bg-dim-green/5">
        <div className="absolute bottom-0 left-0 w-full h-full grid-overlay opacity-10 pointer-events-none" />
        
        {/* Y-Axis Label */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-radar-green/40 uppercase tracking-widest">
          Growth Index
        </div>

        {/* X-Axis Label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-radar-green/40 uppercase tracking-widest">
          Timeline (2021 - 2025)
        </div>

        {/* SVG Graph */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 0 70 L 50 50 L 75 10 L 85 60 L 100 30"
            fill="none"
            stroke="rgba(0, 255, 156, 0.3)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Data Points */}
          {[
            { x: 0, y: 70, log: logs[0] },
            { x: 75, y: 10, log: logs[1] },
            { x: 100, y: 30, log: logs[2] }
          ].map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="2"
              className="fill-radar-green cursor-pointer hover:r-3 transition-all"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.5 }}
              onMouseEnter={() => setSelectedLog(point.log)}
              onMouseLeave={() => setSelectedLog(null)}
            />
          ))}
          
          {/* Intermediate Trend Points (Visual only) */}
          <motion.circle cx="50" cy="50" r="1" className="fill-radar-green/40" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
          <motion.circle cx="85" cy="60" r="1" className="fill-radar-green/40" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} />
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {selectedLog && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-4 right-4 p-3 glass-panel border border-radar-green/40 text-[10px] text-radar-green z-10"
            >
              <div className="font-bold uppercase mb-1">{selectedLog.phase}</div>
              <div className="text-white/60">{selectedLog.label}</div>
              <div className="text-white/40 mt-1 italic">{selectedLog.institution}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mission Logs */}
      <div className="space-y-8">
        {logs.map((log, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-8 border-l border-radar-green/20 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-1.25 top-0 w-2 h-2 bg-radar-green rounded-full shadow-[0_0_8px_#00FF9C] group-hover:scale-150 transition-transform" />
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-bold text-radar-green/60 uppercase tracking-widest">{log.phase}</span>
                  <h3 className="text-lg font-bold text-radar-green glow-text uppercase tracking-tighter">{log.label}</h3>
                </div>
                <span className="text-xs text-radar-green/40 font-bold">{log.year}</span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-white/60 font-bold uppercase tracking-widest">
                {i === 0 ? <Award size={14} /> : i === 1 ? <Shield size={14} /> : <Briefcase size={14} />}
                <span>{log.institution}</span>
              </div>

              <ul className="space-y-2">
                {log.details.map((detail, j) => (
                  <li key={j} className="flex items-start space-x-2 text-sm text-white/70">
                    <span className="text-radar-green mt-1">{"//"}</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
