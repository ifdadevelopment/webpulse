import React, { useEffect } from "react";

export default function TermsConditions() {
      useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div className="w-full bg-gray-50 min-h-screen font-publicSans sm:mt-[calc(var(--header-height,40px))] mt-[calc(var(--header-height,20px))]">
      <section className="py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Terms and Conditions</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          These Terms and Conditions govern your use of our services. By accessing or using NKD AND ASSOCIATES' services, you agree to comply with these terms.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Services Provided</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          We provide a range of services related to financial consulting and stock trading. Our services include providing research reports, advisory services, and portfolio management.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base text-gray-700">
          <li>You agree not to misuse our services for illegal or unauthorized purposes.</li>
          <li>You are responsible for any actions taken using your account.</li>
          <li>You must comply with all applicable laws and regulations while using our services.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          NKD AND ASSOCIATES will not be held liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          We reserve the right to update these Terms and Conditions at any time. You will be notified of any significant changes.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          These Terms and Conditions are governed by the laws of the country in which NKD AND ASSOCIATES operates. Any disputes will be resolved in the courts of that jurisdiction.
        </p>
      </section>
    </div>
  );
}
