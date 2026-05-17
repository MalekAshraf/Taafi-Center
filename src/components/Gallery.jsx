import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Maximize2 } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "أحدث أجهزة الكرايو",
      category: "تخسيس ونحت قوام",
      url: "https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 2,
      title: "صالة التأهيل الحركي",
      category: "علاج طبيعي",
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      title: "غرف الكشف والتقييم",
      category: "خصوصية تامة",
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      id: 4,
      title: "أدوات الحجامة المعقمة",
      category: "طب تكميلي",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "جهاز الموجات فوق الصوتية",
      category: "علاج طبيعي",
      url: "https://images.unsplash.com/photo-1519824141121-997433a893d8?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
     {
      id: 8,
      title: "أحدث أجهزة الكرايو",
      category: "تخسيس ونحت قوام",
      url: "https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      id: 6,
      title: "متابعة الوزن والقياسات",
      category: "تخسيس",
url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      id: 7, 
      title: "تمارين التوازن والكرة الطبية",
      category: "تأهيل حركي",
      
      url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header القسم */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <div className="flex items-center gap-2 text-teal-600 font-bold mb-3 justify-end">
              <span>تجهيزاتنا الطبية</span>
              <LayoutGrid size={20} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
              جولة داخل مركز <span className="text-teal-600">تعافى</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-right font-medium leading-relaxed">
            نحرص على توفير بيئة علاجية مجهزة بأحدث الوسائل التكنولوجية لضمان راحة وسلامة مرضانا.
          </p>
        </div>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-white ${img.gridSpan}`}
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 text-right">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-teal-200 text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-2 leading-tight">{img.title}</h3>
                </div>
                
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* لمسة خلفية */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50"></div>
    </section>
  );
};

export default Gallery;