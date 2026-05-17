import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  Star,
  Send,
  ShieldCheck,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Dedication from "../components/Dedication";
import ScrollToTop from "../components/ScrollToTop";

const AboutDr = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // هنا كود الربط مع EmailJS
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
    alert("تم إرسال تقييمك بنجاح للدكتورة");
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen" dir="rtl">
      {/* Header القسم */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative rotate-3"
            >
              <img
                src="https://via.placeholder.com/400"
                alt="د. سامية"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-teal-600 text-white p-3 rounded-2xl shadow-lg">
                <Award size={24} />
              </div>
            </motion.div>

            <div className="flex-1 text-right">
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
                دكتورة <span className="text-teal-600">سامية</span>
              </h1>
              <p className="text-xl text-slate-600 font-bold mb-8 leading-relaxed">
                أخصائية العلاج الطبيعي والتغذية العلاجية، بخبرة تزيد عن 15 عاماً
                في مساعدة المرضى على استعادة عافيتهم وتحقيق أهدافهم الصحية.
              </p>
              <div className="flex flex-wrap gap-4 justify-end">
                <span className="flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full font-bold text-sm">
                  <ShieldCheck size={16} /> معتمدة دولياً
                </span>
                <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                  <Star size={16} /> تقييم ممتاز
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الخريطة والتواصل */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* فورم التقييم (EmailJS) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl font-black text-slate-800 mb-2 flex items-center gap-3">
              <Star className="text-amber-400" fill="currentColor" /> تقييم
              الخدمة الطبية
            </h2>
            <p className="text-slate-500 mb-8 font-medium italic text-sm">
              رأيك يساعدنا على تحسين جودة الرعاية المقدمة لك.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="الاسم بالكامل"
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none ring-1 ring-slate-100 focus:ring-2 focus:ring-teal-500 outline-none"
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="رقم الهاتف"
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none ring-1 ring-slate-100 focus:ring-2 focus:ring-teal-500 outline-none text-right"
                  required
                />
              </div>
              <select
                name="service_type"
                className="w-full p-4 bg-slate-50 rounded-2xl border-none ring-1 ring-slate-100 focus:ring-2 focus:ring-teal-500 outline-none font-bold text-slate-500"
              >
                <option>نوع الخدمة التي تلقيتها</option>
                <option>علاج طبيعي</option>
                <option>تخسيس ونحت قوام</option>
                <option>حجامة طبية</option>
              </select>
              <textarea
                name="message"
                placeholder="اكتب رأيك هنا بكل صراحة..."
                className="w-full p-4 h-32 bg-slate-50 rounded-2xl border-none ring-1 ring-slate-100 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-teal-600 transition-all flex items-center justify-center gap-3 shadow-lg group"
              >
                إرسال التقييم للدكتورة{" "}
                <Send
                  size={20}
                  className="group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>

          {/* الخريطة ومقر العيادة */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[3rem] shadow-lg border border-slate-50">
              <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <MapPin className="text-teal-600" /> مقر العيادة
              </h3>
              <div className="h-64 rounded-[2rem] overflow-hidden border-4 border-slate-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.123456789!2d31.123456789!3d30.9666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU4JzAwLjAiTiAzMcKwMDcnMjQuMCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <p className="mt-4 text-slate-500 font-bold flex items-center gap-2 justify-end">
                المحلة الكبرى - شارع البحر - برج الأطباء <MapPin size={16} />
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:0123"
                className="bg-teal-600 text-white p-6 rounded-[2rem] flex flex-col items-center gap-2 hover:bg-teal-700 transition-all shadow-lg"
              >
                <Phone size={24} />
                <span className="font-bold">اتصل بنا</span>
              </a>
              <a
                href="mailto:dr@example.com"
                className="bg-white text-slate-800 p-6 rounded-[2rem] flex flex-col items-center gap-2 border border-slate-100 hover:shadow-xl transition-all shadow-lg"
              >
                <Mail size={24} className="text-teal-600" />
                <span className="font-bold">البريد الإلكتروني</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Dedication />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutDr;
