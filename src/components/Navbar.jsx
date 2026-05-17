import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react"; // استخدام أيقونات شيك ومتناسقة مع المشروع

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // كود موحد لإغلاق قائمة الموبايل والرجوع لأول الصفحة أو القسم المحدد بنعومة
  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        {/* الشعار (Logo) */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-2 outline-none select-none"
        >
          <span className="text-xl md:text-2xl font-extrabold text-teal-600 tracking-wide cursor-pointer">
            مـركـز تـعـافـى
          </span>
        </Link>

        {/* روابط التنقل للشاشات الكبيرة (Desktop Menu) */}
        <ul className="hidden md:flex items-center gap-8 font-bold text-slate-700">
          <li className="hover:text-teal-600 cursor-pointer transition-colors duration-200">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              الرئيسية
            </Link>
          </li>
          <li className="hover:text-teal-600 cursor-pointer transition-colors duration-200">
            <a href="/#services">خدماتنا</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer transition-colors duration-200">
            <Link to="/about-dr">عن الدكتورة</Link>
          </li>
          <li className="hover:text-teal-600 cursor-pointer transition-colors duration-200">
            <a href="/#testimonail">آراء المرضى</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer transition-colors duration-200">
            <a href="#developer-section">مطور الموقع</a>
          </li>
        </ul>

        {/* زر حجز المواعيد السريع للـ Desktop */}
        <div className="hidden md:block">
          <a
            href="tel:01060423027"
            className="bg-teal-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-100 transition-all duration-200"
          >
            احجز الآن: 01060423027
          </a>
        </div>

        {/* زر الموبايل الـ Hamburger المعزز بـ أنيميشن تفاعلي */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-teal-600 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة باستخدام الـ AnimatePresence لمنع الفتح المفاجئ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-100 px-6 py-5 overflow-hidden shadow-inner"
          >
            <ul className="space-y-4 font-bold text-slate-700 text-right mb-5">
              <li className="hover:text-teal-600 transition-colors">
                <Link to="/" onClick={handleNavClick}>
                  الرئيسية
                </Link>
              </li>
              <li className="hover:text-teal-600 transition-colors">
                <a href="/#services" onClick={() => setIsOpen(false)}>
                  خدماتنا
                </a>
              </li>
              <li className="hover:text-teal-600 transition-colors">
                <Link to="/about-dr" onClick={() => setIsOpen(false)}>
                  عن الدكتورة
                </Link>
              </li>
              <li className="hover:text-teal-600 transition-colors">
                <a href="/#testimonail" onClick={() => setIsOpen(false)}>
                  آراء المرضى
                </a>
              </li>
              <li className="hover:text-teal-600 transition-colors">
                <a href="#developer-section" onClick={() => setIsOpen(false)}>
                  مطور الموقع
                </a>
              </li>
            </ul>

            {/* زر اتصال محسن للموبايل مع أيقونة الهاتف للمسة بصرية أسرع للمريض */}
            <a
              href="tel:01060423027"
              className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 active:scale-[0.98] transition-all duration-150 shadow-md shadow-teal-600/10"
            >
              <Phone size={18} />
              <span>احجز الآن: 01060423027</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
