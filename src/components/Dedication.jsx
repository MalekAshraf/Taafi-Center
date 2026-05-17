import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Dedication = () => {
  const dedicationText =
    "هذا العمل إهداء للدكتورة سامية، تقديراً لجهودها المخلصة وعطائها المستمر في خدمة المرضى. نسأل الله أن يجعله في ميزان حسناتها.";
  const myName = "م/ مالك أشرف حسين";

  // إعدادات انيميشن الاهتزاز للعنوان
  const shakeAnimation = {
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2, // يهتز كل ثانيتين بشكل شيك
    },
  };

  return (
    <section className="bg-slate-50 py-20 px-6 relative" dir="rtl">
      <div className="container mx-auto max-w-4xl relative">
        {/* العنوان الخارجي المهتز في الزاوية أعلى اليمين */}
        <motion.div
          animate={shakeAnimation}
          className="absolute -top-8 right-4 md:-right-8 z-20 bg-teal-600 text-white px-6 py-2 rounded-full shadow-lg font-black text-lg flex items-center gap-2 border-2 border-white"
        >
          <Award size={20} />
          إهداء خاص
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-1 border-8 border-double border-teal-600 rounded-[2rem] bg-white shadow-2xl"
        >
          <div className="relative z-10 p-8 md:p-12 border-2 border-teal-100 rounded-[1.5rem] bg-white text-center overflow-hidden">
            {/* الخلفية الزخرفية داخل الشهادة */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
              <Award size={300} />
            </div>

            <h2 className="text-2xl font-black text-teal-700 mb-8 italic border-b-2 border-teal-50 inline-block pb-2">
              لوحة تقدير وإهداء
            </h2>

            {/* نص الإهداء - تأثير الكتابة حرف بحرف */}
            <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed italic mb-12 min-h-[100px]">
              {dedicationText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.01,
                    delay: index * 0.04, // سرعة الكتابة
                  }}
                  viewport={{ once: true }}
                >
                  {char}
                </motion.span>
              ))}
            </p>

            {/* التوقيع أسفل اليسار - تأثير الكتابة حرف بحرف */}
            <div className="text-left mt-6">
              <p className="text-sm text-slate-400 font-bold mb-2">
                مع تحيات مطور العمل
              </p>
              <p className="text-3xl font-black text-teal-600 font-serif tracking-tight">
                {myName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.01,
                      delay: dedicationText.length * 0.04 + index * 0.05, // يبدأ بعد انتهاء نص الإهداء
                    }}
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dedication;
