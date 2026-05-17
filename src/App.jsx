import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
      {/* الـ Navbar ثابت في كل الصفحات خارج الـ AnimatePresence لمنع اهتزازه أثناء الانتقال */}
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        {/* الـ key هنا هو المحرك الأساسي لأنيميشن الـ exit والـ enter */}
        <Routes location={location} key={location.pathname}>
          {/* كل صفحة تفتح داخل الـ PageLoader الخاص بها أوتوماتيكياً */}
          <Route
            path="/"
            element={
              <PageLoader>
                <Home />
              </PageLoader>
            }
          />
          <Route
            path="/about-dr"
            element={
              <PageLoader>
                <AboutDr />
              </PageLoader>
            }
          />
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
