import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const FooterLinkSection = () => {
  return (
    <section className="w-full py-8 px-6 flex flex-col items-center">
      <div
        className="
          w-full flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap 
          justify-center lg:justify-around items-center gap-4 md:gap-y-6 mb-6
          small-xs:flex-col small-xs:items-center small-xs:text-center
          tab-md:flex-col tab-md:items-center tab-md:text-center
        "
      >
        {/* Headings */}
        <div
          className="
            flex flex-wrap justify-center md:justify-center lg:justify-start 
            gap-5 md:gap-6
            w-full md:w-full lg:w-auto
            small-xs:flex-col small-xs:items-center small-xs:text-center small-xs:gap-2
            tab-md:flex-col tab-md:items-center tab-md:text-center tab-md:gap-2
          "
        >
          <h3 className="text-[#001671] font-[Poppins,sans-serif] text-[20px] font-bold cursor-pointer">
            Portfolio
          </h3>
          <h3 className="text-[#001671] font-[Poppins,sans-serif] text-[20px] font-bold cursor-pointer">
            Packages
          </h3>
          <h3 className="text-[#001671] font-[Poppins,sans-serif] text-[20px] font-bold cursor-pointer">
            About Us
          </h3>
          <h3 className="text-[#001671] font-[Poppins,sans-serif] text-[20px] font-bold cursor-pointer">
            FAQs
          </h3>
          <h3 className="text-[#001671] font-[Poppins,sans-serif] text-[20px] font-bold">
            Follow Us:
          </h3>
        </div>

        {/* Icons */}
        <div
          className="
            flex justify-center md:justify-center lg:justify-end 
            items-center gap-4 w-full md:w-full lg:w-auto
            small-xs:mt-4
            tab-md:mt-4
          "
        >
          {[
            FaFacebookF,
            FaLinkedinIn,
            FaInstagram,
            FaTwitter,
            FaPinterestP,
          ].map((Icon, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-[30px] h-[30px] border-2 border-[#fe496a] rounded-full 
                flex items-center justify-center text-[#fe496a] 
                hover:bg-[#fe496a] hover:text-white 
                transition-colors duration-300
              "
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full md:w-[70%] h-[1px] bg-[#00000054] mx-auto"></div>
    </section>
  );
};

export default FooterLinkSection;
