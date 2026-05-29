import React from "react";
import { motion } from "framer-motion";

const AppLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-slate-900 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* تأثيرات خلفية خافتة مريحة للعين */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* الحاوية المركزية للأنيميشن */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        
        {/* الدائرة الخارجية: تدور مع عقارب الساعة */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-t-teal-500 border-r-transparent border-b-teal-500/20 border-l-transparent"
        ></motion.div>

        {/* الدائرة الداخلية: تدور عكس عقارب الساعة وأصغر قليلاً */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-amber-500 border-b-transparent border-l-amber-500/20"
        ></motion.div>

        {/* حاوية الصورة الشخصية / اللوجو في المنتصف تماماً مع نبض خفيف */}
        <motion.div 
          animate={{ scale: [0.97, 1.03, 0.97] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-24 h-24 rounded-full overflow-hidden bg-white/95 border-2 border-slate-100 p-1 shadow-lg shadow-teal-500/10 relative z-10"
        >
          <img
            src="/logo-loader.png" // مسار الصورة المرفوعة في مجلد public مباشرة
            alt="مركز تعافي"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* نص ترحيبي متحرك أسفل اللودر */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="mt-6 text-center"
      >
        <h2 className="text-white font-black text-lg tracking-wide">مـركـز تـعـافـى</h2>
        <p className="text-teal-400 font-bold text-xs mt-1">جاري تجهيز رغد عافيتكم...</p>
      </motion.div>
    </motion.div>
  );
};

export default AppLoader;