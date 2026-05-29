import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// حل مشكلة الصورة عبر استيرادها برمجياً
import doctorImg from "../assets/images/hero-doctor.png";

const Hero = () => {
  // تأثير كتابة النص حرف بحرف (Typewriter Effect)
  const fullText = "مـركـز تـعـافـى";
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  // قيم الحركة الديناميكية للـ 3D لجميع الاتجاهات
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // تحويل إحداثيات الماوس لدرجات دوران (يمين/شمال وفوق/تحت)
  const rotateX = useTransform(y, [-100, 100], [15, -15]); // الدوران حول المحور الأفقي
  const rotateY = useTransform(x, [-100, 100], [-15, 15]); // الدوران حول المحور الرأسي

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    
    // حساب مركز الكارد
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // تمرير القيم للحركة
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // إرجاع الكارد للوضع الطبيعي بسلاسة عند خروج الماوس
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (!startTyping) return;

    let index = -1;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <section
      className="relative min-h-screen lg:min-h-0 lg:py-32 flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50/20 pt-24 pb-12 overflow-hidden"
      dir="rtl"
    >
      {/* تأثيرات خلفية ضبابية */}
      <div className="absolute -top-40 -right-40 w-72 h-72 md:w-96 md:h-96 bg-teal-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full">
        {/* النصوص والعناوين */}
        <motion.div
          className="text-center lg:text-right space-y-4 md:space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => setStartTyping(true)}
        >
          <div className="inline-block bg-teal-50 border border-teal-100 text-teal-700 font-bold px-3.5 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm select-none">
            ✨ عيادة موثوقة في شبراملس، زفتى
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
            استعد حركتك.. <br />
            استعد عافيتك في <br />
            <span className="text-teal-600 relative inline-block min-w-[140px] sm:min-w-[200px]">
              {typedText}
              <span className="animate-pulse bg-teal-600 w-0.5 h-6 sm:w-1 sm:h-8 inline-block absolute -left-1.5 top-1.5 sm:top-2"></span>
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium px-2 sm:px-0">
            تحت إشراف{" "}
            <span className="text-slate-800 font-bold">
              الدكتورة سامية رمضان
            </span>
            ، نقدم خدمات شاملة ومخصصة لإعادة التأهيل والعافية. نركز على مساعدتك
            لتخفيف الآلام واستعادة استقلاليتك الجسدية بأحدث التقنيات الطبية.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#services"
              className="bg-teal-600 text-white font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl hover:bg-teal-700 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-teal-600/20 text-center block sm:inline-block w-full sm:w-auto"
            >
              استكشف خدماتنا العلاجية
            </a>

            <a
              href="tel:01060423027"
              className="border-2 border-slate-200 text-slate-700 font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-center block sm:inline-block w-full sm:w-auto"
            >
              اتصل بنا مباشرة
            </a>
          </div>
        </motion.div>

        {/* مساحة الصورة الاحترافية بحركة 3D كاملة الاتجاهات 360 درجة */}
        <motion.div
          className="relative order-1 lg:order-2 flex justify-center items-center w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* إطار الصورة الديناميكي الذي يتبع حركة مؤشر الماوس بدقة */}
          <motion.div 
            className="relative w-full max-w-[280px] sm:max-w-[420px] aspect-square bg-gradient-to-tr from-teal-100 to-teal-50 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-teal-600/10 overflow-hidden border-4 border-white cursor-pointer select-none"
            style={{ 
              rotateX: rotateX, 
              rotateY: rotateY, 
              transformStyle: "preserve-3d",
              perspective: 1000 
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <img
              src={doctorImg}
              alt="مـركـز تـعـافـى للعلاج الطبيعى"
              // زووم للصورة + معالجة ألوان وتظليل لتبدو سينمائية
              className="w-full h-full object-cover object-top scale-105 contrast-[1.02] saturate-[1.05] brightness-[1.01] relative z-10 pointer-events-none"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            
            {/* Placeholder خلفي */}
            <div className="absolute inset-0 bg-teal-600/10 flex items-center justify-center">
              <span className="text-teal-600 font-bold text-sm sm:text-lg">
                صورة العيادة / الدكتورة
              </span>
            </div>
          </motion.div>

          {/* البطاقة العائمة التفاعلية (Floating Card) */}
          <div className="absolute bottom-4 -right-2 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100/80 hidden md:flex items-center gap-2 z-20 transition-transform duration-300 hover:scale-105">
            <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-500 font-bold">رعاية طبية</p>
              <p className="text-xs font-black text-slate-800">
                مخصصة 100% لكل حالة
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;