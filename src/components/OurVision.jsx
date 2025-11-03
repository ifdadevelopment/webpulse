import React from "react";
import {image } from "../../data"
const OurVision = () => {
  return (
    <div className="flex justify-center font-publicSans items-center sm:py-10 sm:px-4 py-1 px-0 ">
      <div className="bg-white w-full max-w-4xl p-2 sm:p-8 rounded-xl">
        <h2 className="text-3xl  font-semibold text-center mb-6 text-[#253462]">
          Our Vision
        </h2>
        <p className="text-gray-700 mb-8 text-lg text-center md:text-left">
          At WebPulse digital, our vision is to empower individuals and organizations to achieve their fullest potential by providing the tools, insights, and resources needed to navigate the complexities of the modern world. Our core values are built on clarity, resourcefulness, and determination—values that are at the heart of everything we do.
        </p>
        <ul className="space-y-6 md:grid md:grid-cols-3 md:space-y-0 md:gap-10 text-center md:text-left">
          <li className="flex items-center space-x-3 text-lg text-[#253462]">
            <img
                src={image.think}
                alt="Intraday"
                className="w-16 h-16"
              />
            <span className="font-semibold">Think Clearly</span>
          </li>
          <li className="flex items-center space-x-3 text-lg text-[#253462]">
           <img
                src={image.resource}
                alt="Intraday"
                className="w-16 h-16"
              />
            <span className="font-semibold">Be Resourceful</span>
          </li>
          <li className="flex items-center space-x-3 text-lg text-[#253462]">
            <img
                src={image.deter}
                alt="Intraday"
                className="w-16 h-16"
              />
            <span className="font-semibold">Stay Determined</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurVision;
