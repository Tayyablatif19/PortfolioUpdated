import React from 'react';
import { motion } from 'motion/react';
import { User, Target, ShieldCheck } from 'lucide-react';
const pfp = new URL('../gallery/pfp.png', import.meta.url).href;

const About: React.FC = () => {
  return (
    <div className="space-y-8 font-mono">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3 shrink-0">
          <div className="relative aspect-square border border-radar-green/30 p-2 group">
            <div className="absolute inset-0 border-2 border-radar-green/10 animate-pulse group-hover:border-radar-green/30 transition-colors" />
            <div className="w-full h-full bg-dim-green/20 overflow-hidden relative">
              {/* Placeholder for Profile Image */}
              <img
                src={pfp}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 grid-overlay opacity-30" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-bg-black border border-radar-green/30 px-3 py-1 text-[10px] text-radar-green font-bold tracking-widest uppercase glow-border">
              ID: MTL-563177
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-radar-green glow-text uppercase tracking-tighter">Muhammad Tayyab Latif</h2>
            <div className="flex items-center space-x-2 text-radar-green/60 text-xs uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>Accounting & Finance Student | ex-Engineer | ex-Developer | ex-Soldier </span>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed border-l-2 border-radar-green/20 pl-4 py-2 italic">
            "A system driven individual with a background spanning engineering, military training, and finance, focused on building structured, strategic solutions."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-dim-green/10 border border-radar-green/10 rounded-sm">
              <div className="flex items-center space-x-2 mb-2 text-radar-green">
                <Target size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Core Objective</span>
              </div>
              <p className="text-xs text-white/60">Bridging the gap between technical engineering precision and strategic financial insight.</p>
            </div>
            <div className="p-4 bg-dim-green/10 border border-radar-green/10 rounded-sm">
              <div className="flex items-center space-x-2 mb-2 text-radar-green">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Operational Ethos</span>
              </div>
              <p className="text-xs text-white/60">Discipline first approach derived from Pakistan Air Force training and rigorous academic standards.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-radar-green/10">
        <div className="flex items-center justify-between text-[10px] text-radar-green/40 uppercase tracking-widest">
          <span>Security Clearance: LEVEL 4</span>
          <span>Last Updated: 2026.04.01</span>
        </div>
      </div>
    </div>
  );
};

export default About;
