import React, { useState } from "react";
import { images212 } from "../../../data";
import "./CallToAction1.css";

const CallToAction1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <section
      className="call-to-action ptb-70"
      style={{ background: "url('/assets/cta-bg.jpg') no-repeat center center / cover" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center text-white mb-5 font-publicSans">
              <h2 className="text-white h2-outs font-publicSans">Get in touch with us today</h2>
              <p className="lead">
                At our company, we are committed to providing exceptional customer
                service and building long-lasting relationships with our clients.
                We look forward to hearing from you and working together to achieve your goals.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <form className="analysis-form-wrap text-center row" onSubmit={handleSubmit}>
              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group analysis-form-group">
                  <span className="analysis-form-input">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </span>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group analysis-form-group">
                  <span className="analysis-form-input">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 p-0">
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Now"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Images (Desktop Only) */}
     <div className="cta-image hidden md:block lg:block">
        <img src={images212.prof1} width="200" className="img-left" alt="cta" />
        <img src={images212.mike1} width="200" className="img-right" alt="cta" />
      </div>
    </section>
  );
};

export default CallToAction1;
