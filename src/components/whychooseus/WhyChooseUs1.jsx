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
        
        {/* ✅ FLEX PARENT — aligned start */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">

          {/* ✅ Left Column */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={fadeAnimations.left.initial}
            whileInView={fadeAnimations.left.whileInView}
            transition={animationConfig.transition}
            viewport={animationConfig.viewport}
          >
            <div className="text-start">
              <strong className="color-secondary uppercase text-sm">Why Choose Us</strong>
              
              <h2 className="text-xl md:text-3xl font-bold leading-snug mt-2 text-[#253462]">
                Optimal Business Consulting Solutions
              </h2>
              
              <span className="animate-border mb-4 block"></span>

              <p className="fw-bold mb-6 text-sm md:text-base leading-relaxed text-gray-700">
                We empower brands with strategic planning, digital expertise, 
                and result-oriented consulting to transform visions into high-impact outcomes.
              </p>

              {/* Bullet List */}
              <ul className="space-y-3">
                {reasons.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-sm md:text-base text-[#253462] font-medium"
                  >
                    <FaCheckCircle className="text-[#804494] text-lg mt-[2px]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ✅ Right Column */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            initial={fadeAnimations.right.initial}
            whileInView={fadeAnimations.right.whileInView}
            transition={animationConfig.transition}
            viewport={animationConfig.viewport}
          >
            <img
              src={images212?.whychoose}
              alt="Why Choose Us"
              className="w-full max-w-[460px] rounded-lg shadow-lg object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs1;
