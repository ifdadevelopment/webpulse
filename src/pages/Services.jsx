import React from "react";
import Services1 from "../components/Services1";
import PackagesSection from "../components/PackagesSection";
import ServicesAbout from "../components/ServicesAbout/ServicesAbout";
import Solutions from "../components/ServicesAbout/Solutions";
import Solutions1 from "../components/ServicesAbout/Solutions1";
import Solutions2 from "../components/ServicesAbout/Solutions2";
import Solutions3 from "../components/ServicesAbout/Solutions3";
import Solutions4 from "../components/ServicesAbout/Solutions4";
import Solutions5 from "../components/ServicesAbout/Solutions5";
import Solutions6 from "../components/ServicesAbout/Solutions6";
import Solutions7 from "../components/ServicesAbout/Solutions7";
import Services2Section from "../components/Services2Section/Services2Section";
import FinancialFreedomSection from "../components/FinancialFreedomSection"
const Services = () => {
  return (
    <>
    <FinancialFreedomSection/>
      <Services2Section/>
      <Services1 />
      <ServicesAbout />
      <Solutions />
      <Solutions1 />
      <Solutions2 />
      <Solutions3 />
      <Solutions4 />
      <Solutions5/>
      <Solutions6/>
      <Solutions7/>
    </>
  );
};

export default Services;
