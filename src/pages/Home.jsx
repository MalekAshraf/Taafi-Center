import React from "react";
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
  return (
    <main dir="rtl" className="bg-white">
      <section id="home">
        <Hero />
      </section>

      {/* 2. إضافة قسم الإحصائيات أسفل الهيرو */}
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
