import React from "react";
import { motion } from "framer-motion";
import { images212 } from "../../../data";
import "./WhyChooseUs1.css";
import { fadeAnimations, animationConfig } from "../../../animations";

const WhyChooseUs1 = () => {
  const skills = [
    "Web Development",
    "Film Making",
    "Social Media Management",
    "Digital Marketing",
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
              <strong className="color-secondary">Why Choose Us</strong>
              <h2 className="text-xl md:text-3xl font-bold leading-snug mt-2">
                Optimal Business Consulting Solutions
              </h2>
              <span className="animate-border mb-4 block"></span>

              <p className="fw-bold mb-6 text-sm md:text-base leading-relaxed">
                Optimal Business Consulting Solutions is a premier consulting
                firm dedicated to supporting businesses in achieving their
                strategic goals and enhancing overall performance.
              </p>

              <div className="skill-content-wrap">
                {skills.map((skill, index) => (
                  <div className="progress-item mb-4" key={index}>
                    <div className="progress-title">
                      <h6 className="flex justify-between items-center text-sm md:text-base">
                        {skill}
                        <span className="progress-number font-semibold">100%</span>
                      </h6>
                    </div>

                    <div className="progress bg-gray-200 rounded-full h-2 mt-1 overflow-hidden">
                      <motion.span
                        className="progress-line bg-[#804494] block h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
