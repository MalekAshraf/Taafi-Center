import React from "react";
import { motion } from "framer-motion";

const PageLoader = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full min-h-screen" // تأمين أبعاد الصفحة أثناء التحميل
    >
      {children}
    </motion.div>
  );
};

export default PageLoader;
