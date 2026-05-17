import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // استيراده هنا

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* تغليف الـ App هنا مرة واحدة فقط */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
