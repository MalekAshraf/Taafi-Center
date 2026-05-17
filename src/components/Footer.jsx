import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"; // تصحيح استيراد Mail بدلاً من Gmail
import myPhoto from "../assets/images/hero-doctor.jpg"; // استيراد الصورة برمجياً لضمان قراءتها في الـ Web

const Footer = () => {
  return (
    <footer
      id="developer-section"
      className="bg-slate-900 py-12 md:py-16 px-4 md:px-6 text-slate-300 border-t border-slate-800"
      dir="ltr"
    >
      <div className="container mx-auto max-w-6xl">
        {/* شبكة العرض الأساسية المتجاوبة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left mb-10">
          {/* القسم الأول: بياناتك كمطور والموقع */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-white tracking-wide">
              Malek Ashraf Hussein
            </h3>
            <p className="text-teal-500 font-bold text-xs tracking-widest uppercase bg-teal-950/40 px-3 py-1 rounded-md border border-teal-900/30">
              Full Stack Developer
            </p>

            {/* روابط السوشيال ميديا */}
            <div className="flex gap-5 pt-1">
              <a
                href="https://github.com/malekashraf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 transition-colors duration-200 p-1 bg-slate-800/30 hover:bg-slate-800 rounded-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/malekashraf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 transition-colors duration-200 p-1 bg-slate-800/30 hover:bg-slate-800 rounded-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:malekashraf@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal-400 transition-colors duration-200 p-1 bg-slate-800/30 hover:bg-slate-800 rounded-lg"
              >
                <Mail size={20} /> {/* تم تغييرها إلى الأيقونة الصحيحة */}
              </a>
            </div>

            {/* زر معرض الأعمال */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white rounded-xl font-bold text-xs transition-all duration-200 shadow-md shadow-teal-600/10"
            >
              <span>Portfolio</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* القسم الثاني: صورتك الشخصية مع لمسة التصميم الاحترافية */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* تفتيح وتوهج خلفي للصورة عند الهوفر */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

              {/* تمرير المتغير المستورد بدلاً من النص المباشر */}
              <img
                src={myPhoto}
                alt="Malek Ashraf"
                className="relative w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl border-2 border-slate-700 group-hover:border-teal-500 transition-all duration-300 shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* الخط الفاصل السفلي */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-[10px] text-slate-500 font-bold tracking-widest space-y-1">
            <p>
              © {new Date().getFullYear()} MALEK ASHRAF. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="text-[10px] text-slate-400/80 font-black tracking-wider flex items-center gap-1.5">
            <span>PROUDLY DEVELOPED IN EGYPT</span>
            <span className="text-xs">🇪🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
