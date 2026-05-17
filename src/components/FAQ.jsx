import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "هل جلسات الحجامة مؤلمة؟",
      answer: "بالعكس، الحجامة في مركزنا تتم بطريقة احترافية وعلمية باستخدام أدوات معقمة لمرة واحدة فقط، ومعظم المرضى يشعرون براحة فورية واسترخاء أثناء وبعد الجلسة."
    },
    {
      id: 2,
      question: "كم عدد الجلسات التي أحتاجها لنحت القوام؟",
      answer: "يختلف العدد من حالة لأخرى بناءً على طبيعة الجسم والهدف المطلوب، ولكن غالباً ما يبدأ المريض بملاحظة نتائج ملموسة بعد 4 إلى 6 جلسات من استخدام أجهزة الكرايو والكافيتايشن."
    },
    {
      id: 3,
      question: "هل يوجد قسم خاص للسيدات فقط؟",
      answer: "نعم، نحن نوفر خصوصية تامة للسيدات مع طاقم متخصص، لضمان الراحة التامة والسرية أثناء جلسات العلاج الطبيعي أو التخسيس."
    },
    {
      id: 4,
      question: "ما هي الحالات التي يعالجها المركز في العلاج الطبيعي؟",
      answer: "نعالج حالات الانزلاق الغضروفي، آلام الرقبة والظهر، تأهيل ما بعد العمليات الجراحية، إصابات الملاعب، وتأهيل حالات الشلل وضعف العضلات."
    }
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* لمسة جمالية في الخلفية */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* الجزء الأيمن: العنوان */}
          <div className="lg:w-1/3 text-right">
            <div className="p-3 bg-teal-100 text-teal-600 rounded-2xl inline-block mb-4">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-6 leading-tight">
              لديك استفسار؟ <br /> <span className="text-teal-600">إليك الإجابات</span>
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              جمعنا لك أكثر الأسئلة التي تشغل بال مرضانا، وإذا كان لديك سؤال آخر لا تتردد في مراسلتنا مباشرة عبر الواتساب.
            </p>
          </div>

          {/* الجزء الأيسر: الأكورديون */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  activeId === faq.id ? "border-teal-600 shadow-md bg-teal-50/30" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right gap-4"
                >
                  <span className={`font-bold text-lg ${activeId === faq.id ? "text-teal-700" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-colors ${activeId === faq.id ? "bg-teal-600 text-white" : "bg-white text-slate-400"}`}>
                    {activeId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-teal-100 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;