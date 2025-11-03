import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./ServicesAbout.css";
import { images212 } from "../../../data";

export default function Solutions4() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => setIsExpanded(!isExpanded);

    return (
        <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid">
            <div className="row about_content py-2 d-flex align-items-center flex-wrap-reverse max-w-6xl mx-auto md:px-4">

                {/* Content Section */}
                <motion.div
                    className="col-lg-6 content_box"
                    data-aos="fade-right"
                    initial={fadeAnimations.right.initial}
                    whileInView={fadeAnimations.right.whileInView}
                    transition={animationConfig.transition}
                >
                    <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
                        Software Development
                    </h2>

                    <p className="px-3">
                        Software development is the process of designing, building, testing, and deploying
                        custom software solutions that help businesses automate tasks, improve efficiency, 
                        and scale faster.
                    </p>

                    <p className="px-3">
                        At Webpulse Digital, software development is a strategic process that includes:
                    </p>

                    <ul className="px-5 list-disc space-y-2">
                        <li>Understanding business needs</li>
                        <li>Planning user-focused workflows</li>
                        <li>Designing intuitive and secure systems</li>
                        <li>Building scalable software architecture</li>
                        <li>Integrating backend & cloud services</li>
                        <li>Rigorous performance & security testing</li>
                        <li>Seamless deployment & ongoing support</li>
                    </ul>

                    {isExpanded && (
                        <p className="px-3 mt-2">
                            We build modern solutions leveraging the latest technologies 
                            while optimizing cost, performance, and security. Whether it's ERP, CRM,
                            automation systems, accounting software, or AI tools — Webpulse Digital 
                            creates platforms that scale with your business vision.
                        </p>
                    )}

                    <button
                        id="setbtn_common"
                        className="moreless-button mt-3"
                        onClick={toggleContent}
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="col-lg-6 py-20 text-center"
                    data-aos="fade-left"
                    initial={fadeAnimations.left.initial}
                    whileInView={fadeAnimations.left.whileInView}
                    transition={animationConfig.transition}
                >
                    <ul className="img-list">
                        <li>
                            <img
                                src={images212.ser18}
                                alt="Software Development"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
