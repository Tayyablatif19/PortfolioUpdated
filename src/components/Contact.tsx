import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-12 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-radar-green glow-text">Direct Communication</h3>
            <p className="text-xs text-white/60 leading-relaxed">Secure channel for mission inquiries, strategic collaborations, or general system feedback.</p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Mail size={16} />, label: "Email", value: "tayyab.bsaf25nbs@student.nust.edu.pk" },
              { icon: <Linkedin size={16} />, label: "LinkedIn", value: "www.linkedin.com/in/tayyablatif" },
              { icon: <Github size={16} />, label: "GitHub", value: "github.com/Tayyablatif19" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-4 p-3 bg-dim-green/5 border border-radar-green/10 rounded-sm group hover:border-radar-green/30 transition-colors"
              >
                <div className="text-radar-green/40 group-hover:text-radar-green transition-colors">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-radar-green/40">{item.label}</span>
                  <span className="text-xs text-white/80">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-radar-green glow-text">Send Signal</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-bold tracking-widest text-radar-green/40">Identification</label>
              <input 
                type="text" 
                placeholder="Name / Organization"
                className="w-full bg-dim-green/5 border border-radar-green/10 p-3 text-xs text-white outline-none focus:border-radar-green/40 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase font-bold tracking-widest text-radar-green/40">Transmission</label>
              <textarea 
                rows={4}
                placeholder="Message Content..."
                className="w-full bg-dim-green/5 border border-radar-green/10 p-3 text-xs text-white outline-none focus:border-radar-green/40 transition-colors resize-none"
              />
            </div>
            <button className="w-full py-3 bg-radar-green/10 border border-radar-green/30 text-radar-green text-[10px] uppercase font-bold tracking-widest hover:bg-radar-green/20 transition-all flex items-center justify-center space-x-2 glow-border">
              <Send size={14} />
              <span>Initiate Transmission</span>
            </button>
          </form>
        </div>
      </div>

      <div className="pt-8 border-t border-radar-green/10 flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2 text-radar-green/20">
          <MessageSquare size={16} />
          <span className="text-[10px] uppercase font-bold tracking-widest">End of Transmission</span>
        </div>
        <div className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 Muhammad Tayyab Latif | All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Contact;
