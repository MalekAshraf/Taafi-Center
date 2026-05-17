import React from "react";
import { motion } from "framer-motion";
// استيراد الأيقونات الصحيحة والرسمية من lucide-react
import { HandHeart, Bike, Activity, ArrowRight } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "العلاج الطبيعي والتأهيل",
      description:
        "برامج علاجية متكاملة لتأهيل حالات العظام، الأعصاب، الجلطات، وإصابات الملاعب بأحدث الأجهزة والتقنيات الطبية.",
      icon: <HandHeart className="w-8 h-8" />,
      tag: "تأهيل طبي",
    },
    {
      id: 2,
      title: "التخسيس وتنسيق القوام",
      description:
        "أنظمة غذائية علمية مخصصة لكل حالة مع جلسات تفتيت الدهون ونحت الجسم باستخدام أحدث أجهزة الكافيتايشن والكرايو.",
      icon: <Bike className="w-8 h-8" />, // تم إضافة المقاس ليتناسق مع الباقي
      tag: "رشاقة وعافية",
    },
    {
      id: 3,
      title: "الحجامة الطبية العلاجية",
      description:
        "تطبيق الحجامة الجافة والرطبة بأسلوب طبي معقم وآمن تماماً، للمساعدة في تنشيط الدورة الدموية وتخفيف آلام الظهر والعضلات.",
      icon: <Activity className="w-8 h-8" />, // تصحيح الأيقونة هنا لتكون رسمية ومتناسقة مع الطب البديل
      tag: "طب بديل متطور",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-teal-600 font-bold tracking-wider text-sm bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            💼 ماذا نقدم في مركز تعافى؟
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
            خدمات طبية متكاملة مصممة خصيصاً لراحتك
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed">
            نجمع بين الخبرة الطبية الممتدة وأحدث الأجهزة لنضمن لك رحلة علاجية
            آمنة ونتائج ملموسة تستعيد بها جودة حياتك اليومية.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
              }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-teal-50 text-teal-600 rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold text-teal-700 bg-teal-50/70 px-3 py-1 rounded-md">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-teal-600 font-bold text-sm cursor-pointer group/btn">
                <a
                  href="tel:01060423027"
                  className="pt-4 border-t border-slate-50 flex items-center justify-between text-teal-600 font-bold text-sm cursor-pointer group/btn outline-none select-none"
                >
                  <span>احجز استشارتك الآن</span>
                </a>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
