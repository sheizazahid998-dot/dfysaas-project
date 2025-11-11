import React from "react";
import ComputerImage from "../assets/images/Computer.webp";

const DevelopmentSection = () => {
  return (
    <section className="w-full py-16 px-12 bg-white">
      <div
        className="
          flex flex-col md:flex-row items-center md:items-start gap-8
          small-xs:flex-col small-xs:items-center small-xs:text-center small-xs:px-6
          tab-md:flex-col tab-md:items-center tab-md:text-center tab-md:px-6
        "
      >
        {/* Left Image */}
        <div className="md:w-1/2 small-xs:w-full tab-md:w-full flex justify-center">
          <img
            src={ComputerImage}
            alt="Development Illustration"
            className="small-xs:w-[85%] tab-md:w-[80%] w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div
          className="
            md:w-1/2 flex flex-col gap-4
            small-xs:w-full small-xs:items-center small-xs:text-center
            tab-md:w-full tab-md:items-center tab-md:text-center
          "
        >
          {/* Heading */}
          <h2 className="text-[#333333] font-poppins font-bold text-[28px] leading-[36px] small-xs:text-[26px]">
            Achieve Success with an Offshore Software Development Company
          </h2>

          {/* Paragraph */}
          <p className="text-[#727272] font-poppins font-normal text-[16px] leading-[24px]">
            Navigating the software development process can be overwhelming.
            Fortunately, our <b>offshore software development company</b> is
            here to guide you every step of the way. We know that each business
            possesses its unique essence, which is why we use a high-empathy
            approach to create software that aligns with your specific needs and
            objectives. Our iterative development process allows us to quickly
            adapt to your changing requirements, reducing risk and ensuring
            rapid delivery of software.
          </p>

          <p className="mt-10 text-[#727272] font-poppins font-normal text-[16px] leading-[24px]">
            Whether you need a custom web app or a mobile application, our
            reliable on-demand <b>software development services</b> can help you
            propel your business forward. Rest assured, DFY SaaS ensures timely
            delivery, adherence to budget, and the utmost level of quality. So
            let our bespoke software solutions be the catalyst to transform your
            vision into a reality.
          </p>

          <div className="small-xs:flex small-xs:justify-center tab-md:flex tab-md:justify-center">
            <button className="bg-[#ff486a] border-2 border-[#ff486a] text-white rounded-[50px] px-8 py-3 text-[15px] font-medium font-poppins mt-8">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
