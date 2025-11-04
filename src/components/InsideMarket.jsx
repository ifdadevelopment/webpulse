import React, { useEffect, useMemo, useRef, useState } from "react";
import { image } from "../../data";

const cls = (...xs) => xs.filter(Boolean).join(" ");
const Clamp = ({ lines = 2, className = "", children }) => (
  <span
    className={className}
    style={{
      display: "-webkit-box",
      WebkitLineClamp: lines,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {children}
  </span>
);

export default function InsideMarket({
  coloredLine = image.coloredLine,
  data = defaultData,
}) {
  const tabs = useMemo(
    () => [
      { key: "websiteDesignDevelopment", label: "Website Designing & Development" },
      { key: "crmSolutions", label: "Customized CRM Solutions" },
      { key: "appDevelopment", label: "App Development" },
      { key: "graphicDesign", label: "Graphic Design" },
      { key: "videoEditing", label: "Video Editing" },
      { key: "socialMediaMarketing", label: "Social Media Marketing" },
      { key: "seoDigitalMarketing", label: "SEO & Digital Marketing" },
      { key: "googleMyBusiness", label: "Google My Business" },
      { key: "aiVideoMarketing", label: "AI Video Marketing" }
    ],
    []
  );

  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [pill, setPill] = useState({ w: 0, h: 0, left: 0 });

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[active];
      const wrap = containerRef.current;
      if (!el || !wrap) return;
      const wrapRect = wrap.getBoundingClientRect();
      const r = el.getBoundingClientRect();

      setPill({
        w: r.width,
        h: r.height,
        left: r.left - wrapRect.left,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const trackRef = useRef(null);
  const items = data[tabs[active].key] || [];

  return (
    <section className="bg-[#FFECE1] font-publicSans">
      <div className="w-full flex flex-col items-center py-[40px] lg:pt-[60px] px-[20px] lg:px-[54px]">
        <div className="max-w-[1150px] w-full flex flex-col items-center">
          
          {/* Heading */}
          <h2 className="lg:text-[44px] text-[28px] font-bold text-center relative">
            Webpulse Digital — Service Pricing Plans
            <img
              alt=""
              width={180}
              height={8}
              className="h-[8px] w-[140px] absolute right-0 bottom-[-6px]"
              src={coloredLine}
            />
          </h2>

          <h3 className="text-base lg:text-xl text-center text-gray-600 mt-4">
            Choose the right plan & scale your business smartly
          </h3>

          {/* Tabs */}
          <div
            ref={containerRef}
            className="mt-8 flex relative border border-black/10 rounded-[16px] overflow-x-auto gap-2 px-2"
          >
            {tabs.map((t, i) => (
              <button
                key={t.key}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => setActive(i)}
                className={cls(
                  "flex items-center justify-center px-4 py-2 text-[11px] md:text-[14px] lg:text-[16px] font-semibold whitespace-nowrap rounded-[12px] transition",
                  i === active ? "bg-[#804494] text-white" : "text-gray-700"
                )}
              >
                {t.label}
              </button>
            ))}

            {/* Pill */}
            <div
              className="absolute top-0 h-full bg-[#804494] rounded-[14px] -z-10 transition-all duration-300"
              style={{
                width: pill.w,
                height: pill.h,
                transform: `translateX(${pill.left}px)`,
              }}
            />
          </div>

          {/* Cards */}
          <div className="mt-6 w-full overflow-x-auto">
            <ul
              ref={trackRef}
              className="flex gap-4 snap-x snap-mandatory scroll-smooth pb-2"
            >
              {items.map((card, idx) => (
                <li key={idx} className="snap-start shrink-0 basis-[85%] md:basis-[32%]">
                  <Card {...card} />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Card */
function Card({ title, description }) {
  return (
    <div className="border border-[#E0E0E0] bg-white shadow-md rounded-[18px] p-5 h-[220px] flex flex-col">
      <h3 className="font-semibold text-lg text-[#253462]">{title}</h3>
      <Clamp lines={4} className="text-gray-600 text-sm mt-2">
        {description}
      </Clamp>
    </div>
  );
}

/* ✅ Service Data */
const defaultData = {
  websiteDesignDevelopment: [
    { title: "Starter Website", description: "5-page responsive site, fast loading, SEO-ready." },
    { title: "Business Website", description: "Corporate UI, animations, forms, WhatsApp connect." },
    { title: "E-Commerce Website", description: "Store, payments, dashboard, inventory & coupons." }
  ],
  crmSolutions: [
    { title: "Lead CRM", description: "Lead pipeline + WhatsApp automation + reminders." },
    { title: "Sales CRM", description: "Workflow automation, deal tracking, reporting." },
    { title: "Industry CRM", description: "Real-estate, institute, healthcare, franchise CRM." }
  ],
  appDevelopment: [
    { title: "Business App", description: "Lightweight app with push notifications & leads." },
    { title: "E-Commerce App", description: "Cart, payments, delivery, offers & profile." },
    { title: "Custom App", description: "On-demand custom app for your business system." }
  ],
  graphicDesign: [
    { title: "Brand Kit", description: "Logo, colors, typography & corporate identity." },
    { title: "Social Media Pack", description: "Post templates, reel covers & brand theme." },
    { title: "Business Collateral", description: "Brochures, banners, catalogues, flyers." }
  ],
  videoEditing: [
    { title: "Reels / Shorts", description: "Cinematic effects, subtitles & transitions." },
    { title: "Corporate Films", description: "Brand intro, explainer videos, testimonials." },
    { title: "YouTube Editing", description: "Editing + sound design + storytelling." }
  ],
  socialMediaMarketing: [
    { title: "Organic Growth", description: "Content calendar, reels, engagement & posting." },
    { title: "Paid Campaigns", description: "Meta ads, growth targeting & retargeting." },
    { title: "Influencer Campaigns", description: "UGC + influencer marketing strategy." }
  ],
  seoDigitalMarketing: [
    { title: "SEO Ranking Booster", description: "On-page + technical SEO + backlinks." },
    { title: "Google Ads", description: "Search + Display + Video + Performance Max." },
    { title: "Content SEO", description: "Blogs, landing pages, keywords & clusters." }
  ],
  googleMyBusiness: [
    { title: "GMB Setup", description: "Complete profile, categories, services, photos." },
    { title: "Map Ranking", description: "Local SEO + reviews + geo-signals + citations." },
    { title: "GMB Growth Pack", description: "Posting, calls, tracking & reputation." }
  ],
  aiVideoMarketing: [
    { title: "AI Spokesperson Videos", description: "AI avatar for ads, explainer & training videos." },
    { title: "AI Script + Voiceover", description: "AI copy + human-like AI voice + subtitles." },
    { title: "AI Reels & Ads", description: "Ultra-realistic short ads for conversions." }
  ]
};
