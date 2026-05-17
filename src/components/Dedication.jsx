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
      repeatDelay: 2,
    },
  };

  return (
    <section
      className="bg-slate-50 py-12 md:py-20 px-4 md:px-6 relative"
      dir="rtl"
    >
      <div className="container mx-auto max-w-4xl relative pt-6 md:pt-0">
        {/* العنوان الخارجي المهتز - تم ضبط مكانه وحجمه للموبايل */}
        <motion.div
          animate={shakeAnimation}
          className="absolute -top-4 right-2 md:-top-8 md:right-8 z-20 bg-teal-600 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full shadow-lg font-black text-sm md:text-lg flex items-center gap-1.5 border-2 border-white select-none"
        >
          <Award size={16} className="md:w-5 md:h-5" />
          إهداء خاص
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-0.5 md:p-1 border-4 md:border-8 border-double border-teal-600 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-2xl"
        >
          <div className="relative z-10 p-5 md:p-12 border-2 border-teal-100 rounded-[1.2rem] md:rounded-[1.5rem] bg-white text-center overflow-hidden">
            {/* الخلفية الزخرفية - تم تصغيرها للموبايل حتى لا تزعج العين */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
              <Award className="w-48 h-48 md:w-[300px] md:h-[300px]" />
            </div>

            <h2 className="text-xl md:text-2xl font-black text-teal-700 mb-6 md:mb-8 italic border-b-2 border-teal-50 inline-block pb-2">
              لوحة تقدير وإهداء
            </h2>

            {/* نص الإهداء متجاوب */}
            <p className="text-lg md:text-2xl text-slate-700 font-bold leading-relaxed italic mb-8 md:mb-12 min-h-[80px] md:min-h-[100px] px-2">
              {dedicationText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.01,
                    delay: index * 0.03, // سرعنا الكتابة تكة عشان الموبايل
                  }}
                  viewport={{ once: true }}
                >
                  {char}
                </motion.span>
              ))}
            </p>

            {/* التوقيع أسفل اليسار متجاوب وموزون */}
            <div className="text-left mt-4 md:mt-6">
              <p className="text-xs md:text-sm text-slate-400 font-bold mb-1">
                مع تحيات مطور العمل
              </p>
              <p className="text-xl md:text-3xl font-black text-teal-600 font-serif tracking-tight">
                {myName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.01,
                      delay: dedicationText.length * 0.03 + index * 0.04,
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
