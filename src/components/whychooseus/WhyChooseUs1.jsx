import React from "react";
import { motion } from "framer-motion";
import { images212 } from "../../../data";
import "./WhyChooseUs1.css";
import { fadeAnimations, animationConfig } from "../../../animations";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs1 = () => {
  const reasons = [
    "Expert team with real-world experience",
    "Tailored strategies for every business",
    "High-quality creative & technical solutions",
    "Dedicated support & transparent communication",
    "Results-driven digital growth approach",
  ];

  return (
    <section className="why-choose-us ptb-70 font-publicSans overflow-hidden md:overflow-visible">
      <div className="max-w-6xl mx-auto px-4">
        <div className="row align-items-center justify-content-between gap-4 flex-wrap rowrever1">

          {/* Left Column */}
          <motion.div
            className="col-md-6 col-lg-5 mb-4 md:mb-0"
            initial={fadeAnimations.left.initial}
            whileInView={fadeAnimations.left.whileInView}
            transition={animationConfig.transition}
            viewport={animationConfig.viewport}
          >
            <div className="why-choose-us-wrap text-start">
              <strong className="color-secondary uppercase text-sm">Why Choose Us</strong>
              <h2 className="text-xl md:text-3xl font-bold leading-snug mt-2 text-[#253462]">
                Optimal Business Consulting Solutions
              </h2>
              <span className="animate-border mb-4 block"></span>

              <p className="fw-bold mb-6 text-sm md:text-base leading-relaxed text-gray-700">
                We empower brands with strategic planning, digital expertise, 
                and result-oriented consulting to transform visions into high-impact outcomes.
              </p>

              {/* ✅ Bullet List with Motion */}
              <ul className="space-y-3">
                {reasons.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-sm md:text-base text-[#253462] font-medium"
                  >
                    <FaCheckCircle className="text-[#804494] text-lg mt-1" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="col-md-6 col-lg-6 w-full flex justify-center"
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
            viewport={animationConfig.viewport}
          >
            <div className="image-wrap w-full flex justify-center overflow-hidden">
              <img
                src={images212?.whychoose}
                alt="Why Choose Us"
                className="img-fluid w-full max-w-[450px] rounded-lg shadow-lg object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs1;
