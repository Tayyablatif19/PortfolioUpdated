import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ExternalLink, Github, Cpu, Building2 } from 'lucide-react';

const projects: Project[] = [
  {
    title: "WIP",
    description: "WIP",
    tech: ["WIP"]
  },
  {
   title: "WIP",
    description: "WIP",
    tech: ["WIP"]
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group relative p-6 bg-dim-green/10 border border-radar-green/10 rounded-sm hover:border-radar-green/40 transition-all duration-300 overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-radar-green/20 group-hover:bg-radar-green transition-colors" />
    <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
    
    <div className="space-y-4 relative z-10">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-radar-green/10 rounded-sm text-radar-green">
          {index === 0 ? <Cpu size={20} /> : <Building2 size={20} />}
        </div>
        <div className="flex items-center space-x-3 text-radar-green/40">
          <Github size={16} className="hover:text-radar-green cursor-pointer" />
          <ExternalLink size={16} className="hover:text-radar-green cursor-pointer" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold text-radar-green uppercase tracking-tighter glow-text">{project.title}</h3>
        <p className="text-xs text-white/60 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((t, i) => (
          <span key={i} className="px-2 py-0.5 bg-radar-green/5 border border-radar-green/20 text-[9px] font-bold uppercase tracking-widest text-radar-green/60">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Hover Glow */}
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-radar-green/5 blur-3xl rounded-full group-hover:bg-radar-green/10 transition-all" />
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <div className="space-y-8 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>

      <div className="p-6 border border-dashed border-radar-green/20 rounded-sm flex flex-col items-center justify-center space-y-4 text-radar-green/40">
        <div className="text-[10px] uppercase font-bold tracking-[0.2em]">Awaiting New Deployment</div>
        <div className="flex space-x-2">
          <div className="w-1 h-1 bg-radar-green/20 rounded-full animate-bounce" />
          <div className="w-1 h-1 bg-radar-green/20 rounded-full animate-bounce [animation-delay:0.2s]" />
          <div className="w-1 h-1 bg-radar-green/20 rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
