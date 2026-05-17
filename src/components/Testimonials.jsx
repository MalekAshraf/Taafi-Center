import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "مالك أشرف", role: "مريض علاج طبيعي", comment: "تجربتي مع دكتورة سامية كانت ممتازة. كنت أعاني من آلام مزمنة في الكتف وبعد عدد قليل من الجلسات شعرت بفرق كبير جداً في الحركة.", rating: 5 },
    { id: 2, name: "سارة أحمد", role: "مريضة علاج طبيعي", comment: "أفضل مركز في المنطقة، الالتزام بالجدول والنصائح الطبية جعلتني أشعر بفرق كبير في الحركة والنشاط اليومي.", rating: 5 },
    { id: 3, name: "منى محمود", role: "حالة تخسيس", comment: "فقدت 10 كيلو في وقت قياسي وبطريقة صحية تماماً مع المتابعة المستمرة وتشجيع الدكتورة المستمر.", rating: 5 },
    { id: 4, name: "ليلى إبراهيم", role: "جلسات حجامة", comment: "الحجامة تتم بمنتهى التعقيم والاحترافية. شعرت براحة نفسية وجسدية كبيرة بعد الجلسة، أنصح به بشدة.", rating: 5 }
  ];

  const [index, setIndex] = useState(0);

  // التقليب التلقائي
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextStep = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4">ماذا يقول مرضانا؟</h2>
          <div className="w-16 h-1.5 bg-teal-600 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* منطقة العرض الرئيسية */}
          <div className="overflow-hidden rounded-3xl"> 
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `${index * 100}%` }} // لاحظ هنا استخدمنا الموجب لأننا في RTL
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="w-full flex-shrink-0 px-2" // flex-shrink-0 هي سر الحل
                  style={{ direction: 'rtl' }}
                >
                  <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden h-full">
                    <Quote className="absolute top-6 left-6 w-20 h-20 text-teal-500/5 -z-0" />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-700 text-xl md:text-2xl leading-relaxed mb-10 italic font-medium relative z-10">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center gap-4 pt-8 border-t border-slate-50 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-tr from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">{review.name}</h4>
                        <p className="text-sm text-teal-600 font-extrabold">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* أزرار التحكم اليدوي */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevStep}
              className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-teal-600 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* مؤشرات النقاط */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === i ? "w-10 bg-teal-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-teal-600 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;