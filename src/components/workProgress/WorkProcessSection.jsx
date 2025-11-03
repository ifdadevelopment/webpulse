import React from "react";
import { motion } from "framer-motion";
import "./WorkProcessSection.css";
import { fadeAnimations, animationConfig } from "../../../animations";

const steps = [
  {
    id: "01",
    title: "Technical Audit",
    desc: "A crucial component of any effective search engine optimization strategy.",
    direction: "left",
  },
  {
    id: "02",
    title: "Technical SEO",
    desc: "The process of optimizing a website for search engine algorithms.",
    direction: "right",
  },
  {
    id: "03",
    title: "Select Keywords",
    desc: "Essential component of any successful digital marketing strategy.",
    direction: "left",
  },
  {
    id: "04",
    title: "Demographics",
    desc: "Refer to the specific characteristics of a target audience.",
    direction: "right",
  },
  {
    id: "05",
    title: "Engine Ranking",
    desc: "Optimize website content to rank higher on search engine results.",
    direction: "left",
    last: true,
  },
];

const WorkProcessSection = () => {
  return (
    <section className="work-process-section ptb-70 gray-light-bg font-publicSans overflow-hidden sm:overflow-visible">
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Header */}
        <motion.div
          className="row justify-content-center py-12"
          initial={fadeAnimations.up.initial}
          whileInView={fadeAnimations.up.whileInView}
          transition={animationConfig.transition}
          viewport={animationConfig.viewport}
        >
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <strong className="color-secondary">Work Process</strong>

              <motion.h2
                className="h2-outs mb-3"
                initial={fadeAnimations.zoomIn.initial}
                whileInView={fadeAnimations.zoomIn.whileInView}
                transition={animationConfig.transition}
                viewport={animationConfig.viewport}
              >
                We follow Few Steps For SEO
              </motion.h2>

              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p className="lead">
                As a professional in the field of Search Engine Optimization, it
                is crucial to understand that achieving higher rankings on search
                engine results pages (SERPs) is not a one-time task.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div className="row mt-4" key={index}>
            {/* LEFT SIDE */}
            {step.direction === "left" && (
              <>
                <motion.div
                  className="col-md-12 col-lg-5 process-width font-publicSans"
                  initial={fadeAnimations.left.initial}
                  whileInView={fadeAnimations.left.whileInView}
                  transition={{
                    ...animationConfig.transition,
                    delay: index * 0.1,
                  }}
                  viewport={animationConfig.viewport}
                >
                  <div className="process-box process-left">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="process-step-number">
                          <strong>Step</strong>
                          <h2 className="m-0">{step.id}</h2>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                    <div className="process-line-l"></div>
                  </div>
                </motion.div>

                {/* Connector + Point */}
                <div className="col-md-2 process-none"></div>
                <div className="col-md-5 col-lg-5 process-none">
                  <div
                    className={`process-point-right ${
                      step.last ? "process-last" : ""
                    }`}
                  ></div>
                </div>
              </>
            )}

            {/* RIGHT SIDE */}
            {step.direction === "right" && (
              <>
                <div className="col-md-5 col-lg-5 process-none">
                  <div className="process-point-left"></div>
                </div>

                <div className="col-md-2 process-none"></div>

                <motion.div
                  className="col-md-12 col-lg-5 process-width font-publicSans"
                  initial={fadeAnimations.right.initial}
                  whileInView={fadeAnimations.right.whileInView}
                  transition={{
                    ...animationConfig.transition,
                    delay: index * 0.1,
                  }}
                  viewport={animationConfig.viewport}
                >
                  <div className="process-box process-right">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="process-step-number">
                          <strong>Step</strong>
                          <h2 className="m-0">{step.id}</h2>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <h5>{step.title}</h5>
                        <p className="font-medium">{step.desc}</p>
                      </div>
                    </div>
                    <div className="process-line-r"></div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcessSection;
