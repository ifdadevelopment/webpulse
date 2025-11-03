import React from "react";
import { motion } from "framer-motion";
import "./Services2Section.css";
import { images212 } from "../../../data";
import { fadeAnimations, animationConfig } from "../../../animations";

const services = [
  {
    id: 1,
    title: "Software Development",
    img: images212.sds1,
    link: "/software-development",
    desc: `Software comprises the entire set of programs, procedures, 
           and routines associated with the operation of a computer system.`,
    animation: fadeAnimations.right,
  },
  {
    id: 2,
    title: "Digital Marketing",
    img: images212.dms12,
    link: "/digital-marketing",
    desc: `Digital Marketing is a vital component of modern business practices 
           that helps organizations grow.`,
    animation: fadeAnimations.zoomIn,
  },
  {
    id: 3,
    title: "SEO (Search Engine Optimization)",
    img: images212.seosr,
    link: "/seo",
    desc: `Make sure your website is optimized for search engines 
           to drive growth and success.`,
    animation: fadeAnimations.left,
  },
  {
    id: 4,
    title: "Mobile App Development",
    img: images212.mads,
    link: "/film-making",
    desc: `We provide high-quality corporate videos and films 
           for impactful brand storytelling.`,
    animation: fadeAnimations.right,
  },
  {
    id: 5,
    title: "Social Media Marketing",
    img: images212.sms12,
    link: "/social-media-marketing",
    desc: `Use social media platforms to advertise your business 
           and engage customers effectively.`,
    animation: fadeAnimations.zoomIn,
  },
  {
    id: 6,
    title: "Web Development",
    img: images212.webdev,
    link: "/development",
    desc: `We design innovative, effective websites that capture 
           your brand and deliver results.`,
    animation: fadeAnimations.left,
  },
];

const Services2Section = () => {
  return (
    <section className="py-16 bg-gray-50 font-publicSans overflow-hidden sm:overflow-visible">
      {/* Added overflow-hidden on small screens */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 setpadding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={service.animation.initial}
              whileInView={service.animation.whileInView}
              transition={{
                ...animationConfig.transition,
                delay: index * 0.1, // Staggered for smooth entry
              }}
              viewport={animationConfig.viewport}
              className="card999 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <a href={service.link} className="block p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="object-contain w-20 h-20"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 h5 cardheading">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 pb-2">
                  {service.desc}
                </p>
                <span className="font-semibold h5">Learn More →</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2Section;
