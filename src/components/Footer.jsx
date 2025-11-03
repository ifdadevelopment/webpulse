import React from "react";
import { Link } from "react-router-dom";
import {image} from "../../data"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
export default function Footer() {
  const sections = [
    {
      title: "Website & App Solutions",
      links: [
        "Website Designing",
        "Website Development",
        "WordPress Website Design",
        "E-commerce Website Development",
        "Mobile App Development",
        "Landing Page Designing",
        "Responsive Web Designing",
      ],
    },
    {
      title: "Customized & AI-Powered Solutions",
      links: ["Customized CRM Solutions", "AI Video Marketing"],
    },
    {
      title: "Creative & Visual Services",
      links: ["Graphic Design", "Video Editing"],
    },
    {
      title: "Digital Marketing Services",
      links: [
        "SEO (Search Engine Optimization)",
        "Google My Business (Local Listing)",
        "Social Media Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Google Ads (AdWords) Management",
        "Google AdSense Services",
        "Lead Generation Campaigns",
        "Email Marketing",
        "WhatsApp & SMS Marketing",
        "Voice Marketing",
        "Content & Blogging Strategy",
        "YouTube Marketing",
        "Facebook Marketing",
        "Instagram Marketing",
        "LinkedIn Marketing",
        "Mobile App Marketing",
        "Affiliate Marketing",
        "Political Campaign Marketing",
        "Google Analytics Setup & Reporting",
      ],
    },
  ];

  const industries = [
    "Small Businesses",
    "Educational Institutions",
    "Real Estate Firms",
    "E-commerce Brands",
    "Startups & Entrepreneurs",
    "Service-Based Businesses",
  ];

  const socials = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://x.com", icon: <FaXTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#6545d7] to-[#6444d5] text-white font-publicSans">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Link to="/" className="block">
            <img
              src={image.footerpng}
              alt="Webpulse Digital"
              className="w-[190px] mb-5"
            />
          </Link>
          <p className="text-sm opacity-90 leading-6 mb-4">
            <strong>Webpulse Digital</strong> — Your Partner in Growth,
            Innovation & Digital Success.
          </p>
          <p className="text-sm opacity-80 mb-2">
           H-18/B, 2nd Floor, Kalkaji Main Road,<br />
             New Delhi-110019
          </p>
          <a
            href="mailto:info@ifda.in"
            className="text-sm hover:text-blue-400"
          >
            info@ifda.in
          </a>
          <div className="flex mt-5 gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500/70 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Website & App Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Website & App Solutions
          </h3>
          <ul className="space-y-2 text-sm opacity-80">
            {sections[0].links.map((item, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Creative & AI Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Creative & AI Solutions
          </h3>
          <ul className="space-y-2 text-sm opacity-80">
            {sections[1].links.concat(sections[2].links).map((item, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Industries We Serve</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {industries.map((item, i) => (
              <li key={i} className="hover:text-blue-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">
          Digital Marketing Services
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm opacity-80">
          {sections[3].links.map((service, i) => (
            <span key={i} className="hover:text-blue-400 cursor-pointer">
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-5">
        <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">
          We Are Provide All Digital Marketing Services
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start text-sm font-semibold mx-2 text-gray-200 opacity-90">
          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
            (letter, i) => (
              <span
                key={i}
                className="hover:text-blue-400 cursor-pointer transition-colors duration-200 mx-4"
              >
                {letter}
              </span>
            )
          )}
        </div>
      </div>



      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong>Webpulse Digital</strong> — All Rights Reserved.
          </p>
          <div className="flex gap-3">
            <Link
              to="/terms-conditions"
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
