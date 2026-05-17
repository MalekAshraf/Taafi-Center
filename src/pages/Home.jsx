import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // استيراد useLocation
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Dedication from "../components/Dedication";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // التأكد إذا كان هناك سكشن مبعوث من صفحة أخرى
    if (location.state && location.state.scrollToId) {
      const id = location.state.scrollToId;

      // عمل تأخير بسيط جداً للتأكد من أن الـ DOM تم بناءه بالكامل
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });

          // تنظيف الـ state بعد السكرول علشان لو عمل ريفريش ميفضلش ينزل تحت
          window.history.replaceState({}, document.title);
        }
      });
    }
  }, [location]);

  return (
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
  );
};

export default Home;
