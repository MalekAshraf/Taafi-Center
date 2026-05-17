import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // كود موحد لإغلاق قائمة الموبايل والرجوع لأول الصفحة
  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
      dir="rtl"
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* الشعار (Logo) */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-2 outline-none select-none"
        >
          <span className="text-2xl font-extrabold text-teal-600 tracking-wide cursor-pointer">
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

        {/* زر حجز المواعيد السريع بالرقم المحدث */}
        <div className="hidden md:block">
          <a
            href="tel:01060423027"
            className="bg-teal-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-100 transition-all duration-200"
          >
            احجز الآن: 01060423027
          </a>
        </div>

        {/* زر الموبايل (Hamburger Menu Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-teal-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة (Mobile Menu) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4 animate-fadeIn">
          <ul className="space-y-4 font-bold text-slate-700 text-right">
            <li className="hover:text-teal-600 cursor-pointer">
              <Link to="/" onClick={handleNavClick}>
                الرئيسية
              </Link>
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="/#services" onClick={() => setIsOpen(false)}>
                خدماتنا
              </a>
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <Link to="/about-dr" onClick={() => setIsOpen(false)}>
                عن الدكتورة
              </Link>
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="#developer-section" onClick={() => setIsOpen(false)}>
                مطور الموقع
              </a>
            </li>
          </ul>
          <a
            href="tel:01060423027"
            className="block text-center w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 transition"
          >
            احجز الآن: 01060423027
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
