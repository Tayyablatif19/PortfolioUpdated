import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../types';
import { Code, PieChart, Users } from 'lucide-react';

const skills: Skill[] = [
  { name: "C++", level: 70, category: 'technical' },
  { name: "HTML/CSS", level: 90, category: 'technical' },
  { name: "JavaScript", level: 80, category: 'technical' },
  { name: "TypeScript", level: 75, category: 'technical' },
  { name: "Python", level: 80, category: 'technical' },
  { name: "MATLAB", level: 65, category: 'technical' },
  { name: "Financial Analysis", level: 85, category: 'finance' },
  { name: "Excel", level: 95, category: 'finance' },
  { name: "Power BI", level: 80, category: 'finance' },
  { name: "Leadership", level: 100, category: 'soft' },
  { name: "Discipline", level: 100, category: 'soft' },
  { name: "Adaptability", level: 100, category: 'soft' }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="space-y-2 group">
    <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-radar-green/60 group-hover:text-radar-green transition-colors">
      <span>{skill.name}</span>
      <span>{skill.level}%</span>
    </div>
    <div className="h-2 bg-dim-green/20 border border-radar-green/10 rounded-sm overflow-hidden relative">
      <motion.div 
        className="h-full bg-radar-green shadow-[0_0_10px_#00FF9C]"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 grid-overlay opacity-20" />
    </div>
  </div>
);

const Skills: React.FC = () => {
  const categories = [
    { id: 'technical', label: 'Technical Systems', icon: <Code size={18} /> },
    { id: 'finance', label: 'Financial Strategy', icon: <PieChart size={18} /> },
    { id: 'soft', label: 'Operational Soft Skills', icon: <Users size={18} /> }
  ];

  return (
    <div className="space-y-12 font-mono">
      {categories.map((cat, i) => (
        <div key={cat.id} className="space-y-6">
          <div className="flex items-center space-x-3 text-radar-green">
            {cat.icon}
            <h3 className="text-sm font-bold uppercase tracking-widest glow-text">{cat.label}</h3>
            <div className="flex-1 h-px bg-radar-green/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {skills
              .filter(s => s.category === cat.id)
              .map((skill, j) => (
                <SkillBar key={j} skill={skill} />
              ))}
          </div>
        </div>
      ))}

      <div className="pt-8 border-t border-radar-green/10">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-radar-green rounded-sm" />
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Operational</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-dim-green/40 rounded-sm" />
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Standby</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
