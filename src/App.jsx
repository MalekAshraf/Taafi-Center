import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutDr from "./pages/AboutDr";
import Admin from "./pages/Admin";
import PageLoader from "./components/PageLoader"; // المكون اللي هنعمله حالا

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen font-cairo overflow-x-hidden">
      {/* الـ Navbar هنا يضمن ظهوره في كل الصفحات */}
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
    </div>
  );
}
export default App;
