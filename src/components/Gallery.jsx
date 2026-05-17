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
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      gridSpan: "md:col-span-2 md:row-span-1",
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
    <section
      id="gallery"
      className="py-12 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header القسم - متجاوب بالكامل */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-4 md:gap-6 text-center md:text-right">
          <div className="text-center md:text-right" dir="rtl">
            <div className="flex items-center gap-2 text-teal-600 font-bold mb-2 md:mb-3 justify-center md:justify-start">
              <LayoutGrid size={20} />
              <span>تجهيزاتنا الطبية</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 leading-tight">
              جولة داخل مركز <span className="text-teal-600">تعافى</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm md:text-base font-medium leading-relaxed">
            نحرص على توفير بيئة علاجية مجهزة بأحدث الوسائل التكنولوجية لضمان
            راحة وسلامة مرضانا.
          </p>
        </div>

        {/* شبكة الصور المتجاوبة (تم عزل الارتفاعات للموبايل) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative group rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border-2 md:border-4 border-white h-[220px] md:h-auto ${img.gridSpan}`}
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* تأثير النصوص متوافق مع الموبايل واللمس */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/30 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 md:p-8 text-right">
                <div className="translate-y-0 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-teal-200 text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-base md:text-lg mt-2 leading-tight">
                    {img.title}
                  </h3>
                </div>

                <div className="absolute top-4 left-4 md:top-6 md:left-6 w-7 h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center text-white opacity-100 md:scale-0 group-hover:scale-100 transition-all duration-500">
                  <Maximize2 size={14} className="md:w-4 md:h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* لمسة خلفية */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Gallery;
