import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// استيراد المكونات والصفحات
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutDr from "./pages/AboutDr";
import Admin from "./pages/Admin";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen font-cairo overflow-x-hidden">
      {/* الـ Navbar والـ ScrollToTop ثابتين خارج الـ AnimatePresence لمنع الاهتزاز */}
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        {/* الـ key هو المحرك الأساسي لأنيميشن الانتقال بين الصفحات */}
        <Routes location={location} key={location.pathname}>
          
          {/* صفحة الـ Home (الـ AppLoader شغال جواها داخلياً زي ما تظبط في الكود السابق) */}
          <Route
            path="/"
            element={
              <PageLoader>
                <Home />
              </PageLoader>
            }
          />

          {/* صفحة عن الدكتورة */}
          <Route
            path="/about-dr"
            element={
              <PageLoader>
                <AboutDr />
              </PageLoader>
            }
          />

          {/* صفحة لوحة التحكم */}
          <Route
            path="/admin-login"
            element={
              <PageLoader>
                <Admin />
              </PageLoader>
            }
          />
          
        </Routes>
      </AnimatePresence>

      <section id="developer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;