import React from "react";
import NewsLetter from "../assets/images/NewsLetter.jpg";

const NewsLetterSection = () => {
  return (
    <section className="w-full flex justify-center py-8 px-4">
      <div className="relative w-full h-80 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${NewsLetter})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-[42px] font-semibold text-[#212121] font-[Poppins,sans-serif]">
            Subscribe Our Newsletter
          </h2>

          {/* Input + Button wrapper */}
          <div className="mt-10 relative w-[90%] sm:w-[70%] md:w-[50%] max-w-[22rem]">
            <input
              type="email"
              placeholder="Your Email address"
              className="w-full border border-[#eb002c] font-[Poppins,sans-serif] text-[#666] bg-[#f7f8f8] rounded-full pl-[18px] pr-[170px] py-[12px] text-[16px] placeholder-[#666] focus:outline-none"
            />

            <button
              type="button"
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#ff486a] text-white border border-[#ff486a] rounded-full text-[16px] font-medium px-[28px] py-[12px] min-w-[150px] hover:bg-[#e23f5e] transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
