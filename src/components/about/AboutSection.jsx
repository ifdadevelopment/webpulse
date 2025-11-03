import { motion } from "framer-motion";
import { images212 } from "../../../data";
import { useRef } from "react";
import { GoTriangleRight } from "react-icons/go";
import "./Aboutus.css";

export default function AboutSection() {
  const counters = [
    { id: "count3", value: 6256, label: "Project Executed" },
    { id: "count2", value: 12000, label: "Calls Generated" },
    { id: "count1", value: 1220, label: "Clients Testimonial" },
  ];

  const countStarted = useRef(false);

  const triggerCount = () => {
    if (countStarted.current) return;
    countStarted.current = true;

    counters.forEach(({ id, value }) => {
      const el = document.getElementById(id);
      if (!el) return;

      let start = 0;
      const duration = 2000;
      const step = Math.max(1, value / (duration / 16));

      const animate = () => {
        start += step;
        if (start >= value) {
          el.innerText = value.toLocaleString();
        } else {
          el.innerText = Math.floor(start).toLocaleString();
          requestAnimationFrame(animate);
        }
      };
      animate();
    });
  };

  const resetCount = () => {
    countStarted.current = false;
    counters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) el.innerText = "0";
    });
  };

  return (
    <div className="animation_bg position-relative font-publicSans">
      <section className="about-us-section ptb-70 gray-light-bg">
        <div className="max-w-6xl mx-auto text-start px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-us-img position-relative">
                <img src={images212.aboutus} alt="about us" className="img-fluid about-single-img" />
                <img src={images212.bgIcon} alt="about bg" className="absolute top-0 left-0 -z-10 w-full img-fluid about-us-bg" />
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-us-content-wrap">
                <strong className="color-secondary">About Us</strong>
                <h1 className="h2 fw-bold">Check out What Digital Marketing Services we provide!</h1>
                <div className="animate-border mb-4"></div>

                <p className="fw-bold">
                  Webpulse Digital is committed to helping businesses across
                  industries augment their marketing efforts and gain a
                  competitive edge through comprehensive digital marketing
                  solutions.
                </p>

                <ul className="list-unstyled tech-feature-list">
                  {[
                    { bold: "Creative", text: "Websites Design" },
                    { bold: "Digital", text: "Marketing" },
                    { bold: "Software", text: "Development" },
                    { bold: "Corporate", text: "Film Making" },
                    { bold: "SEO", text: "Optimization Services" },
                    { bold: "Content", text: "Marketing" },
                    { bold: "Google", text: "Ads Services" },
                  ].map((item, i) => (
                    <li key={i} className="py-1 text-dark flex items-center gap-2">
                      <span className="ti-control-forward mr-2 color-secondary"><GoTriangleRight /></span>
                      <span className="py-1 text-dark"><strong>{item.bold}</strong> {item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* ✅ Motion Counter Trigger */}
                <motion.div
                  className="flex gap-2 md:gap-10 mt-6 text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.4 }}
                  onViewportEnter={triggerCount}
                  onViewportLeave={resetCount}
                >
                  {counters.map((c, i) => (
                    <div key={i} className="counter-single text-start">
                      <h2 className="mb-0 color-secondary">
                        <span id={c.id} className="display-4 font-bold">0</span>
                      </h2>
                      <strong className="font-bold whitespace-nowrap display-6">{c.label}</strong>
                    </div>
                  ))}
                </motion.div>

                {/* Buttons */}
                <div className="action-btns mt-4">
                  <a href="/contactus" className="bg-indigo-600 text-white btn secondary-solid-btn mr-3 px-3 py-3 rounded-lg shadow">Let's Connect</a>
                  <a href="/aboutus" className="border border-indigo-600 btn secondary-outline-btn font-bold hover:text-white hover:font-bold mr-3 px-3 py-2 rounded-lg">Learn More</a>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="box1 absolute inset-0 pointer-events-none hidden md:block">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-10 h-10 border border-gray-300 absolute animate-ping rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}
