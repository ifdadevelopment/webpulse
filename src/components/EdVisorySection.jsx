import React from "react";
import { image } from "../../data";
import { motion } from "framer-motion";
import {
  Search,
  Share2,
  PenTool,
  Code,
  Megaphone,
  Smartphone
} from "lucide-react";

const BADGES = [
  { label: "500+ Clients", color: "#ff603c" },
  { label: "10+ Years Experience", color: "#ff603c" },
  { label: "3+ Global Reach", color: "#ff603c" },
];

const PORTFOLIO = [
  {
    title: "SEO Campaign",
    alt: "SEO Campaign",
    src: image.port1,
    icon: <Search className="w-8 h-8 text-blue-500" />,
    desc: "Improving search rankings and organic visibility through data-driven SEO strategies."
  },
  {
    title: "Social Media Strategy",
    alt: "Social Media Strategy",
    src: image.port2,
    icon: <Share2 className="w-8 h-8 text-pink-500" />,
    desc: "Creative content and engagement plans tailored for Instagram, Facebook, and LinkedIn."
  },
  {
    title: "Branding Design",
    alt: "Branding Design",
    src: image.port3,
    icon: <PenTool className="w-8 h-8 text-yellow-500" />,
    desc: "Logo, typography, and brand guidelines that define your business identity."
  },
  {
    title: "Web Development",
    alt: "Web Development",
    src: image.port4,
    icon: <Code className="w-8 h-8 text-green-500" />,
    desc: "Responsive, SEO-optimized websites crafted with modern UI/UX design."
  },
  {
    title: "Google Ads Project",
    alt: "Google Ads Project",
    src: image.port5,
    icon: <Megaphone className="w-8 h-8 text-red-500" />,
    desc: "Highly targeted ad campaigns for maximum ROI across Google’s ad network."
  },
  {
    title: "App Marketing",
    alt: "App Marketing",
    src: image.port6,
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    desc: "Boosting app installs and user retention through strategic promotion."
  },
];


export default function DigitalMarketingPortfolio() {
  return (
    <section
      className="relative text-white font-publicSans py-20 px-6 lg:px-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(200deg, #1f2127 -5.65%, #34247d 45.63%, #804494 97.6%)",
      }}
    >
      {/* Glowing gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(150,100,255,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-figtree font-bold text-4xl lg:text-5xl leading-tight mb-4  line-height-2
              text-light"
          >
            Why Choose <br></br> Web Pulse Digital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-[600px] mx-auto lg:mx-0"
          >
            We help businesses grow through innovative digital strategies — from{" "}
            <span className="text-white font-bold">SEO</span> to{" "}
            <span className="text-white font-bold">social media</span>, and
            from{" "}
            <span className="text-white font-bold">web design</span> to{" "}
            <span className="text-white font-bold">paid ads</span>. Your
            success is our digital mission.
          </motion.p>

          {/* Badges / Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            {BADGES.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className={`px-6 py-3 rounded-full bg-[#804494] text-sm lg:text-base font-semibold text-white shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]`}
              >
                {badge.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          {PORTFOLIO.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg text-gray-600 font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>


    </section>
  );
}
