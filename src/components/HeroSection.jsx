import React from "react";
import { image } from "../../data"
import { Link } from "react-router-dom";
export default function HeroSection({
  desktopBg = image.heroBg,
  mobileBg = image.mobileBg,
  stoxoInputImg = image.stoxoInputImg,
  googlePlayWhite = image.googlePlayWhite,
  appleIcon = image.appleIcon,
  desktopWhite = image.desktopwhite,
  stoxoVideo = "https://storage.googleapis.com/stockgro-assets/stoxo/stoxo.webm",
  stoxoHref = "/stoxo/",
  playStoreHref = "https://stockgro.onelink.me/vNON/websiteplaystorectaonlanding",
  webAppHref = "https://app.stockgro.club",
}) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#000] min-h-[480px] md:min-h-[340px] lg:min-h-[500px]  mt-[calc(var(--header-height,80px))]"
      aria-label="Hero section"
    >
      <img
        alt="Hero background (desktop)"
        width={4198}
        height={1902}
        className="lg:w-full lg:h-auto w-auto md:block hidden"
        src={desktopBg}
      />
      <img
        alt="Hero background (mobile)"
        width={932}
        height={1247}
        className="lg:w-full lg:h-auto w-full md:hidden block"
        src={mobileBg}
      />
      <div className="absolute top-0  flex lg:items-center lg:pt-0 pt-[36px] h-full w-full lg:px-0 px-[30px]">
        <div className="max-w-[1140px] font-publicSans flex flex-col w-full md:h-auto h-full mx-auto">
          <section className="text-white">
            <h1 className="sm:text-[25px] md:text-[40px] lg:text-[55px] flex text-[28px] lg:leading-[72px] leading-[34px] md:leading-[60px] font-bold text-white flex-col">
              <span className="flex items-center">Best Digital</span>
              <span>Marketing Company</span>
              <span className="max-w-52 sm:text-[25px] md:text-[40px] lg:text-[55px] mt-[16px] text-[14px] lg:leading-[40px] leading-[18px] md:leading-[32px] font-medium flex items-center lg:max-w-[720px]">
                in Delhi NCR
              </span>
            </h1>

            <div className="mt-6 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-gray-200 space-y-3">
              <p className="font-semibold text-white">
                Empower Your Brand with <span className="text-white font-bold">Digital Expertise</span>
              </p>
              <p>
                Partner with <strong>Webpulse Digital</strong> – Your Trusted Digital Marketing Experts
              </p>
              <p>
                Unlock Growth with Tailored Strategies in <strong>SEO</strong>,{" "}
                <strong>Social Media</strong>, <strong>Web Design</strong> &amp; more!
              </p>
            </div>
          </section>

          <a
            className="rounded-[20px] md:mt-[38px] mt-[72px] relative self-start"
            href={stoxoHref}
            aria-label="Ask Stoxo"
            title="Ask Stoxo"
          >
            <div className="md:p-[17px] p-[4px] flex items-center md:gap-x-[8px] gap-x-[0px] text-[#FFFFFFB8] rounded-[17px] md:text-[18px] text-[9px] md:leading-[22px] leading-[12px] relative self-start bg-transparent">
              <div className="md:scale-[1] scale-[0.6]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.75 15a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5m4.42-1.83 4.33 4.33"
                    stroke="#fff"
                    strokeWidth="1.667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="relative z-[2]">
                Got a Marketing question?{" "}
                <span className="md:text-[20px] text-[10px] font-semibold md:leading-[22px] leading-[12px] text-[#FFFFFF]">
                  Ask Anythings
                </span>
              </span>
              <div className="absolute md:w-[100px] md:h-[100px] w-[56px] h-[56px] md:right-0 right-[50%] md:translate-x-[85%] translate-x-[60%] md:-translate-y-[25%] -translate-y-[85%] top-0 z-[3]">
                <video
                  width="225"
                  height="208"
                  src={stoxoVideo}
                  className="md:h-[100px] h-[60px] z-[4] w-auto md:-mt-[8px] -mt-[4px]"
                  autoPlay
                  muted
                  playsInline
                  loop
                  aria-label="Stoxo animation"
                />
              </div>
            </div>
            <img
              alt="Stoxo input"
              width={480}
              height={64}
              className="absolute md:top-0 top-[14px] md:-translate-x-[26px] -translate-x-[12px] left-0 right-0 top-0 bottom-0 flex-shrink-0 -translate-y-[25px] md:w-[480px] w-[230px] md:h-auto h-[52px] md:max-w-[480px] max-w-[230px] object-contain"
              src={stoxoInputImg}
            />
          </a>
          <div className="lg:mt-[48px] flex lg:flex-row lg:gap-[16px] gap-[12px] mt-auto md:justify-start justify-center mb-[28px] lg:mx-0 -mx-[12px]">
            {/* 📞 Call Button */}
            <a
              href="tel:+919999999999"
              className="self-start"
              aria-label="Call Now"
            >
              <div className="md:text-[18px] bg-btn-orange text-[12px] lg:py-3 py-2 lg:px-6 px-3 text-white lg:min-h-[45px] min-h-[40px] font-semibold flex items-center gap-x-[8px] font-figtree bg-home-page-gradient shadow-home-page-gradient text-center rounded-[12px]">
                {/* <img
                  alt="Call"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                  src={callIcon}
                /> */}
                <p>Call Now</p>
              </div>
            </a>
            <a
              href="mailto:info@ifda.in"
              className="self-start"
              aria-label="Send Query"
            >
              <Link to="/contactus">
                <div className="md:text-[18px] text-[12px] lg:py-3 py-2 lg:px-6 px-3 text-white font-medium lg:min-h-[45px] min-h-[40px] flex items-center gap-x-[8px] font-figtree bg-home-page-gradient shadow-home-page-gradient text-center rounded-[12px] hover:opacity-90 transition cursor-pointer">
                  <p>Send Query</p>
                </div>
              </Link>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
