import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
// استيراد الأيقونات الطبية المتناسقة والمريحة للعين
import { Users, Award, ShieldCheck } from "lucide-react";

// مكون فرعي مخصص لمعالجة زيادة الأرقام تصاعدياً (Animated Counter)
const AnimatedCounter = ({ from = 0, to, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const end = parseInt(to, 10);
    if (start === end) return;

    // حساب سرعة التحديث بناءً على الوقت الإجمالي المطلوب للأنيميشن
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {suffix}
      {count}
    </span>
  );
};

const Stats = ({ yearsOfExperience = 10, totalPatients = 500 }) => {
  // تحديث البيانات بالأيقونات الجديدة النظيفة والمتطابقة مع نظام الخدمات
  const statsData = [
    {
      id: 1,
      targetValue: totalPatients,
      suffix: "+",
      label: "حالة تم علاجها بنجاح",
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 2,
      targetValue: yearsOfExperience,
      suffix: "+",
      label: "سنوات من الخبرة والعطاء",
      icon: <Award className="w-8 h-8" />,
    },
    {
      id: 3,
      targetValue: 100,
      suffix: "%",
      label: "رعاية مخصصة وآمنة",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  // حاوية الكروت تعطي أنيميشن تتابعي (Stagger Effect) للأطفال بداخلها
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // تأخير ظهور كل كارت والتالي بنعومة
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="container mx-auto px-8">
        <motion.div
          className="bg-slate-50 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // يبدأ الأنيميشن عندما يقترب السيكشن من الشاشة
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }} // تأثير تكبير خفيف وتفاعلي عند تمرير الماوس
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group"
            >
              {/* أيقونة نظيفة تتفاعل وتتحول للخلفية الداكنة عند الـ hover بالتناسق مع قسم الخدمات */}
              <div className="p-4 bg-teal-50 text-teal-600 rounded-2xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {stat.icon}
              </div>

              <span className="text-4xl font-black text-slate-800 mb-2 tracking-tight group-hover:text-teal-600 transition-colors duration-200">
                <AnimatedCounter
                  from={0}
                  to={stat.targetValue}
                  duration={1.5}
                  suffix={stat.suffix === "%" ? "" : stat.suffix}
                />
                {stat.suffix === "%" && "%"}
              </span>

              <span className="text-sm font-bold text-slate-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
