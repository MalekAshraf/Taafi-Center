import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // استيراد أنيميشن الاختفاء

// استيراد اللودر الجديد والكومبوننتس
import AppLoader from "../components/AppLoader";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Dedication from "../components/Dedication";

const Home = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // حالة اللودر الافتراضية

  useEffect(() => {
    // تشغيل الـ Timeout لإخفاء اللودر بعد ثانيتين (2000ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // دالة السكرول السحرية للـ HashLink القديمة تظل تعمل كما هي بعد التحميل
    if (!isLoading && location.state && location.state.scrollToId) {
      const id = location.state.scrollToId;
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, document.title);
        }
      });
    }

    return () => clearTimeout(timer); // تنظيف التايمر عند الخروج
  }, [location, isLoading]);

  return (
    <>
      {/* عرض اللودر بأنيميشن اختفاء ناعم جداً */}
      <AnimatePresence>
        {isLoading && <AppLoader />}
      </AnimatePresence>

      {/* محتوى الصفحة الرئيسي */}
      <main dir="rtl" className="bg-white">
        <section id="home">
          <Hero />
        </section>
        <section id="stats">
          <Stats yearsOfExperience={11} totalPatients={650} />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="whychooseus">
          <WhyChooseUs />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="testimonail">
          <Testimonials />
        </section>
        <section id="fqa">
          <FAQ />
        </section>
        <Dedication />
      </main>
    </>
  );
};

export default Home;