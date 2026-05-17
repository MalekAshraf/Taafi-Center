import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Sparkles, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const features = [
    {
      id: 1,
      category: "الخصوصية",
      title: "خصوصية وأمان تام للسيدات",
      description:
        "نحن نفهم تماماً أهمية الراحة والخصوصية، لذلك نوفر بيئة علاجية مريحة ومخصصة بالكامل لراحتك النفسية والجسدية.",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      color: "teal",
    },
    {
      id: 2,
      category: "التقنيات",
      title: "أحدث التقنيات والأجهزة الطبية",
      description:
        "نستخدم أحدث أجهزة العلاج الطبيعي والتأهيل، بالإضافة لأقوى أجهزة نحت القوام والتخسيس (كرايو وكافيتايشن) لنتائج أسرع.",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      color: "amber",
    },
    {
      id: 3,
      category: "التخصيص",
      title: "برامج علاجية وغذائية مخصصة",
      description:
        "لا توجد خطة تناسب الجميع؛ كل مريض يحصل على تقييم دقيق يليه برنامج علاجي أو نظام غذائي مصمم خصيصاً لحالته.",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      color: "purple",
    },
    {
      id: 4,
      category: "الخبرة",
      title: "خبرة طبية ممتدة وأمانة علمية",
      description:
        "تحت إشراف طبي متخصص بخبرة سنوات طويلة في التأهيل والرشاقة، نضع أمانتك الصحية كأولوية قصوى قبل أي شيء.",
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />,
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
      color: "blue",
    },
  ];

  const activeData = features.find((f) => f.id === activeTab);

  return (
    <section
      id="why-choose-us"
      className="py-12 md:py-24 bg-white relative overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* العناوين الرئيسية */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800 mb-3">
            لماذا تختار مركز تعافى؟
          </h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Sub Nav - القائمة العلوية المصغرة المتجاوبة */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-16">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${
                activeTab === feature.id
                  ? "bg-teal-600 text-white shadow-md scale-105"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              {feature.category}
            </button>
          ))}
        </div>

        {/* منطقة المحتوى المتغير */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
            >
              {/* الجزء الأيمن: الصورة مع التحكم في الارتفاع للموبايل */}
              <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-xl h-[240px] lg:h-[400px]">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-white">
                  <div className="p-2 md:p-3 bg-white/20 backdrop-blur-md rounded-xl inline-block mb-1 md:mb-2">
                    {activeData.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl自动 font-bold">
                    {activeData.category}
                  </h3>
                </div>
              </div>

              {/* الجزء الأيسر: الوصف مع تصغير حجم الحشو والخطوط للموبايل */}
              <motion.div
                whileHover={{ scale: window.innerWidth > 768 ? 0.98 : 1 }}
                className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-center border border-slate-100 relative overflow-hidden group cursor-default"
              >
                {/* خلفية جمالية تظهر عند الهوفر في الشاشات الكبيرة فقط */}
                <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-teal-100/50 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

                <h3 className="text-xl sm:text-3xl font-black text-slate-800 mb-4 relative z-10">
                  {activeData.title}
                </h3>

                <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium relative z-10 transition-colors duration-300 group-hover:text-slate-900">
                  {activeData.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-teal-600 font-bold text-xs md:text-sm">
                  <span className="w-8 md:w-12 h-1 bg-teal-600 rounded-full"></span>
                  <span>رعاية طبية فائقة</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
