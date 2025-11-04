import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./ServicesAbout.css";
import { images212 } from "../../../data";

export default function SolutionsDigitalMarketing() {
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
                        Digital Marketing
                    </h2>

                    <p className="px-3">
                        Digital marketing is the strategic process of promoting brands, products, and services 
                        through digital channels to attract, engage, and convert audiences. It helps businesses 
                        grow faster by reaching the right customers at the right time with impactful messaging.
                    </p>

                    <p className="px-3">
                        At Webpulse Digital, we craft data-driven marketing strategies that boost revenue, 
                        build brand authority, and maximize your online presence. Our approach includes:
                    </p>

                    <ul className="px-5 list-disc space-y-2">
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Performance Marketing (Google & Meta Ads)</li>
                        <li>Social Media Management & Branding</li>
                        <li>Content Marketing & Copywriting</li>
                        <li>Email & Automation Marketing</li>
                        <li>Website CRO & Funnel Optimization</li>
                        <li>Analytics, Reporting & Continuous Improvement</li>
                    </ul>

                    {isExpanded && (
                        <p className="px-3 mt-2">
                            Our digital marketing team blends creativity, technology, and analytics 
                            to deliver campaigns that drive measurable business growth. From increasing 
                            search visibility to scaling paid campaigns and building powerful brand presence —
                            Webpulse Digital ensures every marketing effort delivers maximum ROI and 
                            long-term success.
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
                                src={images212.ser13} /* change to your digital marketing image */
                                alt="Digital Marketing"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
