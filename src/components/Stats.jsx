import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, ShieldCheck } from "lucide-react";

// مكون فرعي معزز بمعادلة حركة ذكية تناسب الأرقام الكبيرة والصغيرة
const AnimatedCounter = ({ from = 0, to, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const start = from;
    const end = parseInt(to, 10);
    if (start === end) return;

    const startTime = performance.now();
    const totalDuration = duration * 1000;

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= totalDuration) {
        setCount(end);
        return;
      }

      // حساب النسبة المئوية للوقت المنقضي وتطبيقها على الرقم المستهدف
      const progress = elapsedTime / totalDuration;
      const currentValue = Math.floor(progress * (end - start) + start);

      setCount(currentValue);
      requestAnimationFrame(updateCount);
    };

    // استخدام requestAnimationFrame بدلاً من setInterval لأداء سلس 60fps وبدون تقطيع
    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration]);

  return (
    <span
      ref={ref}
      className="inline-flex flex-row-reverse items-center justify-center"
    >
      <span>{suffix}</span>
      <span>{count}</span>
    </span>
  );
};

const Stats = ({ yearsOfExperience = 10, totalPatients = 500 }) => {
  const statsData = [
    {
      id: 1,
      targetValue: totalPatients,
      suffix: "+",
      label: "حالة تم علاجها بنجاح",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      id: 2,
      targetValue: yearsOfExperience,
      suffix: "+",
      label: "سنوات من الخبرة والعطاء",
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      id: 3,
      targetValue: 100,
      suffix: "%",
      label: "رعاية مخصصة وآمنة",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white py-6 md:py-12 border-b border-slate-50" dir="rtl">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="bg-slate-50/80 rounded-2xl md:rounded-3xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 shadow-inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center text-center p-5 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group"
            >
              {/* حاوية الأيقونة المتجاوبة */}
              <div className="p-3 md:p-4 bg-teal-50 text-teal-600 rounded-xl md:rounded-2xl mb-3 md:mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {stat.icon}
              </div>

              {/* طباعة الرقم واللاحقة باتجاه منضبط */}
              <span className="text-3xl md:text-4xl font-black text-slate-800 mb-1 md:mb-2 tracking-tight group-hover:text-teal-600 transition-colors duration-200">
                <AnimatedCounter
                  from={0}
                  to={stat.targetValue}
                  duration={1.2}
                  suffix={stat.suffix}
                />
              </span>

              <span className="text-xs md:text-sm font-bold text-slate-500">
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
