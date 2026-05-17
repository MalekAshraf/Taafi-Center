import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 1. حل مشكلة الصورة عبر استيرادها برمجياً ليقوم Vite بمعالجتها بشكل صحيح
import doctorImg from "../assets/images/hero-doctor.jpg";

const Hero = () => {
  // تأثير كتابة النص حرف بحرف (Typewriter Effect)
  const fullText = "مـركـز تـعـافـى ";
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (!startTyping) return;

    let index = -1;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 150); // سرعة كتابة الحروف (150 ملي ثانية لكل حرف)

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50/20 pt-20 overflow-hidden">
      {/* تأثيرات خلفية ضبابية */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* النصوص والعناوين - تظهر من اليمين بشكل انسيابي */}
        <motion.div
          className="text-right space-y-6 order-2 md:order-1"
          initial={{ opacity: 0, x: 50 }} // البداية: مخفي ومزاح لليمين
          animate={{ opacity: 1, x: 0 }} // النهاية: مستقر في مكانه
          transition={{ duration: 0.9, ease: "easeOut" }}
          onAnimationComplete={() => setStartTyping(true)} // تشغيل تأثير الكتابة بعد استقرار العنصر
        >
          <div className="inline-block bg-teal-50 border border-teal-100 text-teal-700 font-bold px-4 py-1.5 rounded-full text-sm">
            ✨ عيادة موثوقة في شبراملس، زفتى
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
            استعد حركتك.. <br />
            واستعد عافيتك في <br />
            <span className="text-teal-600 relative inline-block min-w-[200px]">
              {typedText}
              {/* مؤشر الكتابة الوامض */}
              <span className="animate-pulse bg-teal-600 w-1 h-8 inline-block absolute -left-2 top-2"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
            تحت إشراف{" "}
            <span className="text-slate-800 font-bold">
              الدكتورة سامية رمضان
            </span>
            ، نقدم خدمات شاملة ومخصصة لإعادة التأهيل والعافية. نركز على مساعدتك
            لتخفيف الآلام واستعادة استقلاليتك الجسدية بأحدث التقنيات الطبية.
          </p>

          {/* أزرار اتخاذ الإجراء (CTA) */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* زر استكشاف الخدمات ينزل لسكشن الخدمات */}
            <a
              href="#services"
              className="bg-teal-600 text-white font-bold text-lg px-8 py-3.5 rounded-2xl hover:bg-teal-700 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-teal-600/20 text-center inline-block"
            >
              استكشف خدماتنا العلاجية
            </a>

            {/* زر الاتصال المباشر بالرقم الموحد */}
            <a
              href="tel:01060423027"
              className="border-2 border-slate-200 text-slate-700 font-bold text-lg px-8 py-3.5 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-center inline-block"
            >
              اتصل بنا مباشرة
            </a>
          </div>
        </motion.div>

        {/* مساحة الصورة الاحترافية - تظهر من اليسار وتستقر في مكانها */}
        <motion.div
          className="relative order-1 md:order-2 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }} // البداية: مخفي ومزاح لليسار
          animate={{ opacity: 1, x: 0 }} // النهاية: مستقر في مكانه
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }} // تأخير بسيط لجمالية الحركة متناسقة مع النص
        >
          {/* الإطار الخلفي للصورة */}
          <div className="relative w-full max-w-[450px] aspect-square sm:h-[450px] bg-gradient-to-tr from-teal-100 to-teal-50 rounded-[2.5rem] shadow-2xl shadow-teal-600/10 overflow-hidden border-4 border-white">
            <img
              src={doctorImg} // استخدام المتغير المستورد برمجياً هنا
              alt="مـركـز تـعـافـى للعلاج الطبيعى"
              className="w-full h-full object-cover relative z-10"
              onError={(e) => {
                // إذا لم يجد الصورة لأي سبب، يخفي الـ img المكسورة لتظهر الخلفية الأنيقة بدلاً منها
                e.target.style.display = "none";
              }}
            />
            {/* نص عائم يظهر خلف الصورة كـ Placeholder في حال لم تظهر الصورة */}
            <div className="absolute inset-0 bg-teal-600/10 flex items-center justify-center">
              <span className="text-teal-600 font-bold text-lg">
                صورة العيادة / الدكتورة
              </span>
            </div>
          </div>

          {/* بطاقة عائمة تفاعلية (Floating Card) */}
          <div className="absolute bottom-6 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100/80 hidden sm:flex items-center gap-3 z-20">
            <div className="p-2.5 bg-teal-50 rounded-xl text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 font-bold">رعاية طبية</p>
              <p className="text-sm font-black text-slate-800">
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
