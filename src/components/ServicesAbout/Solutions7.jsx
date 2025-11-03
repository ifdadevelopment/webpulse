import React from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";
const Solutions7 = () => {
    return (
        <div className="overflow-hidden setcard_mainorganic font-publicSans container-fluid ">
            <div className="row about_content pt-5 flex items-center max-w-6xl  mx-auto md:px-4">
                <div className="col-lg-6 text-center">
                    <motion.div
                        className="left"
                        initial={fadeAnimations.left.initial}
                        whileInView={fadeAnimations.left.whileInView}
                        transition={animationConfig.transition}
                    >
                        <ul className="img-list">
                            <li>
                                <img
                                    src={images212.ser19}
                                    alt="Why Digital Marketing?"
                                    className="w-full"
                                />
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Content Box Section */}
                <div className="col-lg-6 content_box aos-init aos-animate">
                    <motion.div
                        initial={fadeAnimations.right.initial}
                        whileInView={fadeAnimations.right.whileInView}
                        transition={animationConfig.transition}
                    >
                        <h2 className="text-center py-4 text-xl lg:text-3xl font-bold text-danger setmobile_organic">
                            Why Web Development?
                        </h2>
                        <p className="p-3 mt-2">
                            No matter what industry you're in, having a strong online presence is essential for success — and it all starts with a well-built website. Web development is the process of creating fast, secure, and user-friendly websites that represent your brand, attract visitors, and convert them into customers.

                            A professionally developed website helps you build trust, showcase your products or services, and stand out in the digital world. But web development isn't just about design — it involves performance, mobile responsiveness, security, user experience, and seamless functionality. With so many technologies and platforms available today, it can feel overwhelming to handle everything on your own.

                            Fortunately, there are powerful tools, frameworks, and experts who can help bring your vision to life. Whether you want a simple business site, a custom web app, or an e-commerce platform, skilled developers can guide you at every step.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Solutions7;
