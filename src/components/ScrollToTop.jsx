import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // أول ما المسار يتغير، اطلع لفوق

  return null;
};

export default ScrollToTop;
