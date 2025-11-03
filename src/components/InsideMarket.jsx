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
  waves = "/_next/static/media/wavesMicro.81d0016d.webp",
  data = defaultData,
}) {
  const tabs = useMemo(
    () => [
      { key: "digitalInsights", label: "Digital Insights" },
      { key: "growthOpportunities", label: "Growth Opportunities" },
      { key: "clientSuccess", label: "Client Success" },
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
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  const trackRef = useRef(null);
  const scrollByCards = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "16") || 16;
    const delta = card ? card.getBoundingClientRect().width + gap : 340;
    track.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  const items = data[tabs[active].key] || [];

  return (
    <section className="bg-[#FFECE1] font-publicSans">
      <div className="w-full flex flex-col items-center py-[40px] lg:pt-[60px] px-[20px] lg:px-[54px] overflow-hidden">
        <div className="max-w-[1150px] w-full flex flex-col items-center">
          <h2 className="lg:text-[44px] lg:leading-[54px] leading-[32px] text-[28px] relative lg:text-left text-center font-bold">
            Inside Webpulse Digital
            <img
              alt=""
              width={585}
              height={31}
              className="h-[8px] w-[130px] lg:h-[10px] lg:w-[195px] absolute lg:right-[8px] right-[2px] lg:-bottom-[4px] bottom-[-4px]"
              src={coloredLine}
            />
          </h2>

          <h3 className="text-base lg:text-2xl max-w-[720px] lg:leading-6 text-center text-greytext font-medium mt-6">
            Focusing on the services and strategies you offer as a digital marketing agency.
          </h3>

          {/* Tabs */}
          <div
            ref={containerRef}
            className="flex relative self-center border-[1.5px] lg:border-[2px] border-black/10 rounded-[16px] mt-[28px] lg:mt-[48px] gap-x-[4px] lg:gap-x-[10px]"
          >
            {tabs.map((t, i) => {
              const activeCls =
                i === active ? "opacity-100 text-white" : "opacity-[0.7] text-black";
              return (
                <button
                  key={t.key}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => setActive(i)}
                  className={cls(
                    "flex-shrink-0 z-[2] cursor-pointer lg:text-[18px] md:text-[14px] text-[10px] leading-[28px] h-[36px] lg:h-[50px]",
                    "w-[110px] md:w-[160px] lg:w-[200px]",
                    "flex justify-center items-center lg:gap-x-[6px] gap-x-[4px] font-semibold duration-300",
                    activeCls
                  )}
                >
                  <p className="truncate">{t.label}</p>
                </button>
              );
            })}
            <div
              className="absolute top-[-1.5px] lg:top-[-2px] transition-all duration-300 z-[1] rounded-[16px] bg-home-page-gradient shadow-home-page-gradient"
              style={{
                width: pill.w,
                height:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? pill.h + 4
                    : pill.h + 3,
                transform: `translateX(${pill.left}px)`,
              }}
            />
          </div>

          {/* Section Header */}
          <div className="flex lg:mt-12 mt-6 w-full items-center">
            <h4 className="flex w-full items-center lg:justify-start justify-between min-w-0">
              <span className="lg:text-xl text-[16px] font-semibold">
                Latest {tabs[active].label}
              </span>
              <span className="mx-3 lg:flex hidden">|</span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.webpulsedigital.com/"
                className="lg:text-lg text-[14px] text-exploreHeading font-semibold font-figtree lg:ml-0 ml-auto flex items-center"
              >
                Explore All
                <span className="ml-[6px] -mt-[4px] inline-block" aria-hidden>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M20.364 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l3.95-3.95H4a1 1 0 0 1 0-2h13.243l-3.95-3.95a1 1 0 0 1 1.414-1.414z"
                      fill="#8938F7"
                    />
                  </svg>
                </span>
              </a>
            </h4>
          </div>

          {/* Cards */}
          <div className="relative w-full">
            <ul
              ref={trackRef}
              className="mt-4 lg:mt-6 flex gap-x-3 lg:gap-x-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scroll-smooth pb-2"
            >
              {items.map((card, idx) => (
                <li
                  key={`card-${idx}`}
                  data-card
                  className={cls(
                    "snap-start shrink-0 min-w-0 h-full flex",
                    "basis-full lg:basis-1/3"
                  )}
                >
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

// Card Component
function Card({ title, description, icon }) {
  return (
    <div className="flex w-full flex-1">
      <div className="border border-[#E0E0E0] shadow-md rounded-[16px] bg-white p-6 flex flex-col justify-between h-[220px]">
        <div className="flex items-center gap-3">
          {icon && <img src={icon} alt={title} className="w-10 h-10" />}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <Clamp lines={4} className="text-gray-600 text-sm mt-3">
          {description}
        </Clamp>
      </div>
    </div>
  );
}

// Webpulse Digital Content Data
const defaultData = {
  digitalInsights: [
    {
      title: "Digital Insights – Latest Marketing Strategies",
      description:
        "Explore cutting-edge digital marketing strategies that boost engagement, improve SEO, and drive conversions.",
    },
    {
      title: "Engagement Boosters – Maximize Audience Interaction",
      description:
        "Learn about tools and tactics that enhance user engagement and brand interaction across all digital platforms.",
    },
    {
      title: "Performance Metrics – Track Your Success",
      description:
        "Get real-time insights on your SEO, PPC, and social media performance with advanced tracking tools.",
    },
  ],
  growthOpportunities: [
    {
      title: "Growth Opportunities – High ROI Campaigns",
      description:
        "Discover high-performing campaigns designed to deliver measurable results and strong ROI.",
    },
    {
      title: "Lead Generation – Proven Techniques for Growth",
      description:
        "Use proven digital marketing techniques to attract and convert high-quality leads.",
    },
    {
      title: "Trending Campaigns – Hot Marketing Tactics",
      description:
        "Stay ahead with trending tactics that deliver exceptional digital success.",
    },
  ],
  clientSuccess: [
    {
      title: "Client Success Stories – Real Results, Real Impact",
      description:
        "Explore our client success stories and see how Webpulse Digital has helped brands achieve transformative growth.",
    },
    {
      title: "Customized Solutions – Tailored Marketing Plans",
      description:
        "Every business is unique — we build custom digital strategies that align with your goals.",
    },
    {
      title: "Website & App Solutions – Built for Success",
      description:
        "From web design to app development, we deliver digital experiences that engage and convert.",
    },
  ],
};
