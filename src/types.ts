export type Section = 'about' | 'experience' | 'skills' | 'projects' | 'contact' | 'terminal' | 'gallery';

export interface MissionLog {
  phase: string;
  label: string;
  institution: string;
  details: string[];
  year: number;
  growth: number;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'finance' | 'soft';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}
