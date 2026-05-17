import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "مالك أشرف",
      role: "مريض علاج طبيعي",
      comment:
        "تجربتي مع دكتورة سامية كانت ممتازة. كنت أعاني من آلام مزمنة في الكتف وبعد عدد قليل من الجلسات شعرت بفرق كبير جداً في الحركة.",
      rating: 5,
    },
    {
      id: 2,
      name: "سارة أحمد",
      role: "مريضة علاج طبيعي",
      comment:
        "أفضل مركز في المنطقة، الالتزام بالجدول والنصائح الطبية جعلتني أشعر بفرق كبير في الحركة والنشاط اليومي.",
      rating: 5,
    },
    {
      id: 3,
      name: "منى محمود",
      role: "حالة تخسيس",
      comment:
        "فقدت 10 كيلو في وقت قياسي وبطريقة صحية تماماً مع المتابعة المستمرة وتشجيع الدكتورة المستمر.",
      rating: 5,
    },
    {
      id: 4,
      name: "ليلى إبراهيم",
      role: "جلسات حجامة",
      comment:
        "الحجامة تتم بمنتهى التعقيم والاحترافية. شعرت براحة نفسية وجسدية كبيرة بعد الجلسة، أنصح به بشدة.",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 للتالي، -1 للسابق

  // التقليب التلقائي الذكي
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000); // زيادة الوقت قليلاً لراحة المريض أثناء القراءة
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // حركات التلاشي والانزلاق الجانبي المتجاوبة
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonail"
      className="py-12 md:py-24 bg-slate-50 relative overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* الهيدر */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800 mb-3">
            ماذا يقول مرضانا؟
          </h2>
          <div className="w-16 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-3xl mx-auto min-h-[340px] sm:min-h-[280px] flex flex-col justify-between">
          {/* منطقة العرض الآمنة باستخدام الـ AnimatePresence لمنع كسر العرض أفقياً */}
          <div className="relative w-full overflow-hidden h-full flex-grow">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <Quote className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 text-teal-600/5 z-0" />

                  {/* النجوم */}
                  <div className="flex gap-0.5 mb-4 relative z-10">
                    {[...Array(reviews[index].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* نص المراجعة المتجاوب */}
                  <p className="text-slate-700 text-base md:text-xl leading-relaxed mb-6 italic font-medium relative z-10 min-h-[80px]">
                    "{reviews[index].comment}"
                  </p>

                  {/* بيانات المريض */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-50 relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-teal-600 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md select-none">
                      {reviews[index].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base md:text-lg">
                        {reviews[index].name}
                      </h4>
                      <p className="text-xs md:text-sm text-teal-600 font-extrabold">
                        {reviews[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* أزرار التحكم اليدوي والمؤشرات */}
          <div className="flex items-center justify-between sm:justify-center gap-4 mt-8 px-2">
            <button
              onClick={prevStep}
              className="p-3 md:p-4 rounded-xl md:rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-teal-600 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous review"
            >
              <ChevronRight size={20} />
            </button>

            {/* مؤشرات النقاط */}
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === i
                      ? "w-8 bg-teal-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="p-3 md:p-4 rounded-xl md:rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-teal-600 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Next review"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
