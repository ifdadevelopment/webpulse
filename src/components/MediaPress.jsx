// MediaPress.jsx
import React from "react";
import { image } from "../../data";

const LOGOS = [
  {
    alt: "Moneycontrol",
    href:
      "https://www.moneycontrol.com/news/trends/bengaluru-company-is-looking-for-chief-meme-officer-salary-is-rs-1-lakh-a-month-10286971.html",
    src: image.money,
  },
  {
    alt: "Hindustan Times",
    href:
      "https://www.hindustantimes.com/business/stockgro-named-in-2023-cb-insights-fintech-100-list-101697025929891.html",
    src: image.ht,
  },
  {
    alt: "Financial Express",
    href:
      "https://www.financialexpress.com/business/brandwagon-stockgro-ropes-in-finance-influencers-for-its-video-campaign-2504388/",
    src: image.financial,
  },
  {
    alt: "LiveMint",
    href:
      "https://www.livemint.com/brand-stories/no-more-stock-market-jitters-here-s-how-the-next-gen-is-mastering-the-stock-market-without-risking-a-dime-11699537858558.html",
    src: image.livemint,
  },
  {
    alt: "Times of India",
    href:
      "https://timesofindia.indiatimes.com/business/india-business/innovation-unveils-forbes-selection-of-the-next-global-leaders-in-the-making/articleshow/105441714.cms?from=mdr",
    src: image.toi,
  },
];

export default function MediaPress() {
  const marquee = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="lg:py-[96px] py-[34px] bg-[#ffece1] font-publicSans">
      <div className="relative flex items-center justify-center h-[2px] bg-[#D1C5EC] lg:mx-[50px] mx-[8px]">
        <div className="bg-leftBlurGradWhite h-full absolute left-0 w-1/4 pointer-events-none" />
        <div className="bg-rightBlurGradWhite h-full absolute right-0 w-1/4 pointer-events-none" />
        <div className="font-semibold text-[20px] leading-[22px] px-[20px] bg-[#ffece1]">
          Our Clients
        </div>
      </div>
      <div className="lg:mt-[16px] mt-[4px] relative lg:mx-0 mx-[8px]">
        <div className="bg-leftBlurGradWhite h-full z-[2] absolute left-0 w-1/6 pointer-events-none" />
        <div className="bg-rightBlurGradWhite h-full z-[2] absolute right-0 w-1/6 pointer-events-none" />

        <div className="overflow-hidden mt-[32px] lg:mt-[80px]">
          <div className="flex items-center whitespace-nowrap will-change-transform animate-press-marquee
                       [animation-duration:28s] [animation-timing-function:linear] [animation-iteration-count:infinite]
                       group-hover:[animation-play-state:paused]">
            {marquee.map((item, i) => (
              <a
                key={`${item.alt}-${i}`}
                className="flex-shrink-0"
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                aria-label={item.alt}
                title={item.alt}
              >
                <img
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="object-contain w-auto lg:h-[40px] h-[20px] lg:mr-[40px] mr-[20px]"
                  src={item.src}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
