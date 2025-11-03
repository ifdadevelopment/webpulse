import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const serviceOptions = [
  "AI & Automation Solutions",
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "UI/UX Design",
  "Corporate Trainings"
];

const Office = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    message: "",
    formHeading: "Contact Form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://your-api-url.com/contact", // ✅ replace this with your backend API endpoint
        formData
      );

      if (res.data) {
        toast.success("Form submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          service: "",
          email: "",
          message: "",
          formHeading: "Contact Form",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f7f4eb] py-10 px-4 font-publicSans mt-[calc(var(--header-height,80px))]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-6 text-center md:text-left">
            Let's connect with us
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              pattern="^[0-9]{10}$"
              maxLength={10}
              inputMode="numeric"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
            >
              <option value="">Select Service</option>
              {serviceOptions.map((srv, i) => (
                <option key={i} value={srv}>
                  {srv}
                </option>
              ))}
            </select>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#0076FF] hover:bg-primary text-white font-semibold px-6 py-2 rounded-md transition w-fit ml-auto block"
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] md:h-auto rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            height="100%"
            loading="lazy"
            allowFullScreen
            className="w-full border-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Office;
