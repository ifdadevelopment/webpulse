import React, { useState } from "react";
import {
  FaEnvelopeOpenText,
  FaSatelliteDish,
  FaStar,
  FaIcons,
  FaLaptopCode,
  FaAngleRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { images212 } from "../../../data";
import { fadeAnimations, animationConfig } from "../../../animations";
import "./OutstandingSection.css";

const OutstandingSection = () => {
  const [activeTab, setActiveTab] = useState("feature-tab-3");

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  const tabs = [
    {
      id: "feature-tab-1",
      icon: <FaEnvelopeOpenText size={24} />,
      title: "Email Marketing",
    },
    {
      id: "feature-tab-2",
      icon: <FaSatelliteDish size={24} />,
      title: "SEO Services",
    },
    {
      id: "feature-tab-3",
      icon: <FaStar size={24} />,
      title: "Digital Marketing",
    },
    { id: "feature-tab-4", icon: <FaIcons size={24} />, title: "Social Media" },
    {
      id: "feature-tab-5",
      icon: <FaLaptopCode size={24} />,
      title: "Web Design",
    },
  ];

  const tabContent = [
    {
      id: "feature-tab-1",
      heading: "Advertising through email",
      desc: "Email advertising is a cost-effective and efficient method to reach consumers and nurture customer relationships. It allows businesses to maintain strong communication with their customers and build trust through consistent engagement.",
      list: [
        "Personalized Campaigns",
        "Targeted Outreach",
        "Analytics & Tracking",
      ],
      image: images212.ser11,
      link: "digital-advertising",
    },
    {
      id: "feature-tab-2",
      heading: "Strategies to enhance online visibility & traffic",
      desc: "Improve your online presence through optimized site design, faster load times, and content-rich experiences. SEO plays a crucial role in driving organic traffic and building brand credibility.",
      list: ["Site Optimization", "Page Rankings", "Keyword Strategy"],
      image: images212.ser10,
      link: "seo",
    },
    {
      id: "feature-tab-3",
      heading: "Developing strategies and campaigns on digital platforms",
      desc: "Developing strategies and campaigns on digital platforms is essential for businesses to thrive in today's fast-paced world. With the proliferation of social media and online channels, a strong digital presence connects brands with customers, builds awareness, and drives sales.",
      list: [
        "Corporate Online Advertising",
        "SEO Optimization Services",
        "Web Analytics",
      ],
      image: images212.ser13,
      link: "digital-marketing",
    },
    {
      id: "feature-tab-4",
      heading: "Digital community channels",
      desc: "Social media, forums, and messaging apps connect people and brands in real time, allowing personalized communication and direct feedback from customers.",
      list: ["Social Media Ads", "Brand Engagement", "Community Management"],
      image: images212.ser12,
      link: "social-media",
    },
    {
      id: "feature-tab-5",
      heading: "Developing Web Applications",
      desc: "Designing, building, and deploying user-friendly, responsive, and secure web applications tailored to client needs and scalable for growth.",
      list: ["UI/UX Design", "Responsive Layouts", "Web Security"],
      image: images212.ser14,
      link: "web-design",
    },
  ];

  return (
    <section className="outstanding-section ptb-70 gray-light-bg overflow-hidden sm:overflow-visible">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="row justify-content-center"
          initial={fadeAnimations.up.initial}
          whileInView={fadeAnimations.up.whileInView}
          transition={animationConfig.transition}
          viewport={animationConfig.viewport}
        >
          <div className="col-md-9 col-lg-8">
            <div className="section-heading text-center mb-1 font-publicSans">
              <strong className="color-secondary">Our Expertise</strong>
              <motion.h2
                className="h2-outs mb-3"
                initial={fadeAnimations.zoomIn.initial}
                whileInView={fadeAnimations.zoomIn.whileInView}
                transition={animationConfig.transition}
                viewport={animationConfig.viewport}
              >
                Outstanding Experience
              </motion.h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p className="lead">
                Through years our team has achieved the highest level of
                expertise in our field. Every single member of our team
                possesses a wealth of knowledge and experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="feature-tabs-wrap">
          {/* Tab Scroll Navigation */}
          <div
            className="feature-tabs-scroll-wrapper"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              paddingBottom: "4px",
            }}
          >
            <ul
              className="nav feature-tabs  flex-nowrap d-flex justify-content-start justify-content-lg-center gap-3 px-3"
              style={{
                minWidth: "fit-content",
                flexWrap: "nowrap",
              }}
            >
              {tabs.map(({ id, icon, title }) => (
                <li
                  key={id}
                  className={`nav-item flex-shrink-0  text-[#6545d7]  ${
                    activeTab === id ? "active" : ""
                  }`}
                >
                  <a
                    className={`nav-link text-center ${
                      activeTab === id ? "active" : ""
                    }`}
                    href={`#${id}`}
                    onClick={(e) => handleTabClick(e, id)}
                    style={{
                      display: "inline-block",
                      minWidth: "110px",
                      whiteSpace: "normal",
                    }}
                  >
                    <span
                      className="fa-solid icon-sm mb-1 d-flex justify-content-center align-items-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: "0 auto",
                      }}
                    >
                      {icon}
                    </span>
                    <h6 className="mb-0">{title}</h6>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="tab-content feature-tab-content tab_body mt-4 font-publicSans max-w-4xl mx-auto px-4">
            {tabContent
              .filter((tab) => tab.id === activeTab)
              .map((tab) => (
                <motion.div
                  key={tab.id}
                  className="row align-items-center  rounded-3 md:p-4 py-lg-5 mx-1 mx-lg-0"
                  initial={fadeAnimations.left.initial}
                  whileInView={fadeAnimations.left.whileInView}
                  transition={animationConfig.transition}
                  viewport={animationConfig.viewport}
                >
                  {/* Text Section */}
                  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-left">
                    <h3 className="fw-bold mb-3 py-lg-3 py-2 h3-outs">{tab.heading}</h3>
                    <p className="text-muted mb-3">{tab.desc}</p>

                    <ul className="list-unstyled mb-4">
                      {tab.list.map((item, i) => (
                        <li key={i} className="feature-list-item text-muted flex items-center mb-2">
                          <FaAngleRight className="feature-list-icon" />
                          <span className="feature-list-text text-dark">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={tab.link}
                      className="bg-indigo-600 text-white btn secondary-solid-btn mr-3 px-3 py-3 rounded-lg shadow  transition"
                    >
                      Learn More
                    </a>
                  </div>

                  {/* Image Section */}
                  <motion.div
                    className="col-lg-6 col-md-12 py-lg-5 py-3 text-center"
                    initial={fadeAnimations.right.initial}
                    whileInView={fadeAnimations.right.whileInView}
                    transition={animationConfig.transition}
                    viewport={animationConfig.viewport}
                  >
                    <img
                      src={tab.image}
                      alt={tab.heading}
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstandingSection;
