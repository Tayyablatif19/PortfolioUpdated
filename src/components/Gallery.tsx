import React from 'react';
import { motion } from 'motion/react';
import { Camera, Shield, Target, Eye } from 'lucide-react';

const nust2021 = new URL('../gallery/nust2021.jpeg', import.meta.url).href;
const paf1 = new URL('../gallery/paf1.jpeg', import.meta.url).href;
const paf2 = new URL('../gallery/paf2.jpeg', import.meta.url).href;
const nust2025 = new URL('../gallery/nust2025.jpeg', import.meta.url).href;

interface Asset {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  timestamp: string;
  classification: 'UNCLASSIFIED' | 'CONFIDENTIAL' | 'SECRET';
}

const assets: Asset[] = [
  {
    id: 'ASSET-001',
    title: 'NUST 2021',
    caption: 'A visual proof that I, Tayyab Latif was a part of NUST in 2021.',
    imageUrl: nust2021,
    timestamp: '2021-11-08 0900Z',
    classification: 'UNCLASSIFIED'
  },
  {
    id: 'ASSET-002',
    title: 'Nation First',
    caption: 'A patriotic visualization of complex love for the motherland, Pakistan.',
    imageUrl: paf1,
    timestamp: '2024-08-20 1430Z',
    classification: 'CONFIDENTIAL'
  },
  {
    id: 'ASSET-003',
    title: 'Operational Training Grounds',
    caption: 'Simulation environment for avionics engineering and tactical leadership training.',
    imageUrl: paf2,
    timestamp: '2024-03-10 0600Z',
    classification: 'SECRET'
  },
  {
    id: 'ASSET-004',
    title: 'NUST Command Center',
    caption: 'Academic operations base for strategic finance and management studies.',
    imageUrl: nust2025,
    timestamp: '2025-09-08 0800Z',
    classification: 'UNCLASSIFIED'
  }
];

const AssetCard: React.FC<{ asset: Asset; index: number }> = ({ asset, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-dim-green/10 border border-radar-green/20 rounded-sm overflow-hidden hover:border-radar-green/50 transition-all"
  >
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={asset.imageUrl} 
        alt={asset.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-black/80 to-transparent" />
      
      <div className={`absolute top-2 right-2 px-2 py-0.5 text-[8px] font-bold tracking-widest border ${
        asset.classification === 'SECRET' ? 'border-red-500 text-red-500' : 
        asset.classification === 'CONFIDENTIAL' ? 'border-yellow-500 text-yellow-500' : 
        'border-radar-green text-radar-green'
      }`}>
        {asset.classification}
      </div>
    </div>

    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold text-radar-green/40 tracking-widest">{asset.id}</span>
        <span className="text-[9px] text-radar-green/40">{asset.timestamp}</span>
      </div>
      <h3 className="text-xs font-bold text-radar-green uppercase tracking-widest glow-text">{asset.title}</h3>
      <p className="text-[10px] text-white/60 leading-relaxed italic">
        <span className="text-radar-green mr-1">{"//"}</span>
        {asset.caption}
      </p>
    </div>

    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px]" />
  </motion.div>
);

const Gallery: React.FC = () => {
  return (
    <div className="space-y-8 font-mono">
      <div className="flex items-center space-x-4 text-radar-green/60">
        <Camera size={18} />
        <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Visual Reconnaissance Assets</h2>
        <div className="flex-1 h-px bg-radar-green/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assets.map((asset, i) => (
          <AssetCard key={asset.id} asset={asset} index={i} />
        ))}
      </div>

      <div className="pt-8 border-t border-radar-green/10 flex items-center justify-between text-[9px] text-radar-green/20 uppercase tracking-widest">
        <div className="flex items-center space-x-2">
          <Eye size={12} />
          <span>Surveillance Active</span>
        </div>
        <div className="flex items-center space-x-2">
          <Target size={12} />
          <span>Assets Verified</span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield size={12} />
          <span>Secure Storage</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
