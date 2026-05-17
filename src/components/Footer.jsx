import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="developer-section"
      className="bg-slate-900 py-16 px-6 text-slate-300 border-t border-slate-800"
      dir="ltr"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-white">
            Malek Ashraf Hussein
          </h3>
          <p className="text-teal-500 font-bold text-xs tracking-widest uppercase">
            Full Stack Developer
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400">
              <Github size={22} />
            </a>
            <a href="#" className="hover:text-teal-400">
              <Linkedin size={22} />
            </a>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-full font-bold text-sm"
          >
            Portfolio <ExternalLink size={16} />
          </a>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
            Rate My Work <Star className="text-amber-400" size={18} />
          </h4>
          <button className="w-full py-3 bg-white text-slate-900 font-black rounded-xl hover:bg-teal-500 hover:text-white transition-all text-xs">
            Leave Feedback
          </button>
        </div>

        <div className="text-[10px] text-slate-500 font-bold tracking-widest space-y-2">
          <p>© {new Date().getFullYear()} MALEK ASHRAF. ALL RIGHTS RESERVED.</p>
          <p className="text-teal-900 font-black">PROUDLY DEVELOPED IN EGYPT</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
