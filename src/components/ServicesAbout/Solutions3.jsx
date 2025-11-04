import React from "react";
import { motion } from "framer-motion";
import { fadeAnimations, animationConfig } from "../../../animations";
import { images212 } from "../../../data";
import "./ServicesAbout.css";
const Solutions3 = () => {
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
                  src={images212.sms12}
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
              Why SEO?
            </h2>
            <p className="p-3 mt-2">
              No matter what business you're in, if you want to be successful,
              you need to make sure your website is optimized for search
              engines. Search engine optimization, or SEO, is the process of
              improving your website so that it ranks higher in search engine
              results pages (SERPs). There are a lot of different factors that
              go into SEO, and it can be a bit overwhelming to try to tackle all
              of them yourself. Luckily, there are plenty of tools and resources
              available to help you. And, if you're really stuck, you can always
              hire an SEO expert to help you out. So, what are you waiting for?
              Get started on your SEO journey today.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions3;
