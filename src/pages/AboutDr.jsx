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
import doctorPhoto from "../assets/images/hero-doctor.jpg"; // استيراد صورة الدكتورة لضمان عملها أونلاين
import Dedication from "../components/Dedication";

const AboutDr = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // كود ربط EmailJS جاهز للعمل بمجرد وضع المعرفات الخاصة بك هنا يا هندسة
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //   .then(() => alert("تم إرسال تقييمك بنجاح للدكتورة"))
    //   .catch((err) => console.error(err));

    alert("تم إرسال تقييمك بنجاح للدكتورة");
    e.target.reset(); // تفريغ الحقول بعد الإرسال
  };

  return (
    <div className="pt-20 md:pt-28 bg-slate-50 min-h-screen" dir="rtl">
      {/* القسم الأول: التعريف بالدكتورة */}
      <section className="bg-white py-12 md:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* النصوص التعريفية */}
            <div className="flex-1 text-center md:text-right w-full">
              <span className="text-teal-600 font-extrabold text-sm md:text-base mb-2 block tracking-wider">
                تعرف على الطاقم الطبي
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 md:mb-6 leading-tight">
                دكتورة <span className="text-teal-600">سامية</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 font-bold mb-6 md:mb-8 leading-relaxed max-w-2xl">
                أخصائية العلاج الطبيعي والتغذية العلاجية، بخبرة تزيد عن 15 عاماً
                في مساعدة المرضى على استعادة عافيتهم وتحقيق أهدافهم الصحية من
                خلال خطط علاجية مخصصة وآمنة.
              </p>

              {/* شارات الاعتماد */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="flex items-center gap-1.5 bg-teal-50 text-teal-700 px-4 py-2 rounded-full font-bold text-xs md:text-sm">
                  <ShieldCheck size={16} /> معتمدة دولياً
                </span>
                <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-4 py-2 rounded-full font-bold text-xs md:text-sm">
                  <Star size={16} className="fill-amber-500 text-amber-500" />{" "}
                  تقييم ممتاز (5/5)
                </span>
              </div>
            </div>

            {/* الصورة الشخصية للدكتورة مع تأثيرات الحواف المتجاوبة */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 md:border-8 border-slate-100 relative md:rotate-2 group"
            >
              <img
                src={doctorPhoto}
                alt="د. سامية"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-teal-600 text-white p-2.5 md:p-3 rounded-xl md:rounded-2xl shadow-lg">
                <Award size={20} className="md:w-6 md:h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* القسم الثاني: الخريطة وفورم التقييم */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* فورم التقييم (EmailJS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-md border border-slate-100"
          >
            <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-2 flex items-center gap-2">
              <Star className="text-amber-400 fill-amber-400" size={22} />
              <span>تقييم الخدمة الطبية</span>
            </h2>
            <p className="text-slate-400 mb-6 md:mb-8 font-medium italic text-xs md:text-sm">
              رأيك يساعدنا على تحسين جودة الرعاية المقدمة لك دائمًا.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="الاسم بالكامل"
                  className="w-full p-3.5 md:p-4 bg-slate-50 text-slate-800 rounded-xl md:rounded-2xl border-none ring-1 ring-slate-200/60 focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all"
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="رقم الهاتف"
                  className="w-full p-3.5 md:p-4 bg-slate-50 text-slate-800 rounded-xl md:rounded-2xl border-none ring-1 ring-slate-200/60 focus:ring-2 focus:ring-teal-500 outline-none text-sm text-right transition-all"
                  required
                />
              </div>
              <select
                name="service_type"
                className="w-full p-3.5 md:p-4 bg-slate-50 text-slate-500 rounded-xl md:rounded-2xl border-none ring-1 ring-slate-200/60 focus:ring-2 focus:ring-teal-500 outline-none text-sm font-bold transition-all"
                defaultValue="نوع الخدمة التي تلقيتها"
              >
                <option disabled>نوع الخدمة التي تلقيتها</option>
                <option value="علاج طبيعي">علاج طبيعي</option>
                <option value="تخسيس ونحت قوام">تخسيس ونحت قوام</option>
                <option value="حجامة طبية">حجامة طبية</option>
              </select>
              <textarea
                name="message"
                placeholder="اكتب رأيك هنا بكل صراحة..."
                className="w-full p-3.5 md:p-4 h-32 bg-slate-50 text-slate-800 rounded-xl md:rounded-2xl border-none ring-1 ring-slate-200/60 focus:ring-2 focus:ring-teal-500 outline-none text-sm resize-none transition-all"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3.5 md:py-4 bg-slate-900 text-white font-black rounded-xl md:rounded-2xl hover:bg-teal-600 transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] group text-sm md:text-base"
              >
                <span>إرسال التقييم للدكتورة</span>
                <Send
                  size={18}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </form>
          </motion.div>

          {/* الخريطة ومقر العيادة وسرعة التواصل */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-md border border-slate-100">
              <h3 className="text-lg md:text-xl font-black text-slate-800 mb-4 md:mb-6 flex items-center gap-2">
                <MapPin className="text-teal-600" size={22} />
                <span>مقر العيادة وموقعنا</span>
              </h3>

              {/* حاوية الخريطة الآمنة */}
              <div className="h-56 sm:h-64 rounded-xl md:rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.123456789!2d31.123456789!3d30.9654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU3JzU1LjUiTiAzMcKwMDcnMjQuNCJF!5e0!3m2!1sar!2seg!4v1620000000000!5m2!1sar!2seg"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع عيادة تعافي"
                ></iframe>
              </div>
              <p className="mt-4 text-xs md:text-sm text-slate-500 font-bold flex items-center gap-1.5 justify-start">
                <MapPin size={16} className="text-teal-600" />
                <span>المحلة الكبرى - شارع البحر - برج الأطباء</span>
              </p>
            </div>

            {/* أزرار الاتصال السريع المباشر */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+201234567890" // ضع الرقم الفعلي للعيادة هنا يا هندسة
                className="bg-teal-600 text-white p-4 md:p-6 rounded-xl md:rounded-[1.5rem] flex flex-col items-center justify-center gap-1.5 hover:bg-teal-700 transition-all shadow-md active:scale-95 group text-center"
              >
                <Phone size={22} className="group-hover:animate-bounce" />
                <span className="font-bold text-sm md:text-base">
                  اتصل بنا فوراً
                </span>
              </a>
              <a
                href="mailto:info@taafi-center.com" // البريد الفعلي للمركز
                className="bg-white text-slate-800 p-4 md:p-6 rounded-xl md:rounded-[1.5rem] flex flex-col items-center justify-center gap-1.5 border border-slate-200 hover:shadow-md transition-all shadow-sm active:scale-95 text-center"
              >
                <Mail size={22} className="text-teal-600" />
                <span className="font-bold text-sm md:text-base">
                  البريد الإلكتروني
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* مكون الإهداء المخصص للدكتورة سامية */}
      <Dedication />
    </div>
  );
};

export default AboutDr;
