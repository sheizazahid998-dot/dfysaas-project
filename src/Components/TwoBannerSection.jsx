import React from "react";

const TwoBannerSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* First Banner */}
      <div className="flex-1 bg-gradient-to-r from-[#112b98] to-[#001671] pt-6 pb-10 px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-white font-[Poppins,sans-serif] text-[32px] font-semibold">
          Lost in Development?
        </h2>
        <p className="mt-3 text-white font-[Poppins,sans-serif] text-[16px] font-medium max-w-[37rem]">
          Leverage the impeccable coding skills and domain knowledge of DFY
          SaaS’ developers to build the right solution that meets your business
          needs head-on.
        </p>
        <button className="mt-3 bg-[#ff486a] text-white rounded-full px-8 py-3 text-[15px] font-medium font-[Poppins,sans-serif] hover:bg-[#ffc107] transition-colors duration-300">
          Get Started
        </button>
      </div>

      {/* Second Banner */}
      <div className="flex-1 bg-gradient-to-r from-[#112b98] to-[#001671] pt-6 pb-10 px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-white font-[Poppins,sans-serif] text-[32px] font-semibold">
          Interested in Partnering?
        </h2>
        <p className="mt-3 text-white font-[Poppins,sans-serif] text-[16px] font-medium max-w-[37rem]">
          DFY SaaS is on a mission to help individuals who have an extensive
          network but aren’t sure how to use it to grow their income and earn
          themselves a holiday.
        </p>
        <button className="mt-3 bg-[#ff486a] text-white rounded-full px-8 py-3 text-[15px] font-medium font-[Poppins,sans-serif] hover:bg-[#ffc107] transition-colors duration-300">
          Become a Partner
        </button>
      </div>
    </section>
  );
};

export default TwoBannerSection;
