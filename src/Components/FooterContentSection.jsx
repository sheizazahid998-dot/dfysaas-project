import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const FooterContentSection = () => {
  const content = [
    {
      icon: <FaEnvelope size={14} />,
      title: "Email",
      text: "info@dfysaas.com",
    },
    {
      icon: <FaPhoneAlt size={14} />,
      title: "Phone:",
      text: "416-203-6000",
    },
    {
      icon: <FaLocationArrow size={14} />,
      title: "Canada Office:",
      text: "1391 Wheat Boom Dr, Oakville, L6H7X2, Ontario, Canada.",
    },
    {
      icon: <FaLocationArrow size={14} />,
      title: "UK Office:",
      text: "10 Plantagenet Gardens, Romford, Essex, UK",
    },
  ];

  return (
    <section className="w-full py-8 px-6 bg-white flex flex-col items-center gap-10">
      {/* Contact Info */}
      <div
        className="
          flex flex-wrap justify-center gap-10 w-full
          small-xs:flex-col small-xs:items-center small-xs:text-center small-xs:gap-6
          tab-md:flex-col tab-md:items-center tab-md:text-center tab-md:gap-6
        "
      >
        {content.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-start text-left gap-3 
              ${index === 3 ? "w-full justify-center" : ""}
              small-xs:flex-col small-xs:items-center small-xs:text-center small-xs:gap-2
              tab-md:flex-col tab-md:items-center tab-md:text-center tab-md:gap-2
            `}
          >
            <div className="w-[30px] h-[30px] border-2 border-[#fe496a] rounded-full flex items-center justify-center text-[#fe496a] flex-shrink-0">
              {item.icon}
            </div>

            <div className="flex flex-col small-xs:items-center small-xs:text-center tab-md:items-center tab-md:text-center">
              <h3 className="text-[#252525] font-[Poppins,sans-serif] text-[12px] font-bold">
                {item.title}
              </h3>
              <p className="mt-1 text-[#252525] font-[Poppins,sans-serif] text-[12px] font-medium whitespace-nowrap small-xs:whitespace-normal tab-md:whitespace-normal small-xs:max-w-[250px] tab-md:max-w-[300px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Center Paragraph */}
      <div className="w-full text-center">
        <p className="text-[#252525] font-[Poppins,sans-serif] text-[12px] font-medium">
          © All Rights Reserved 2024 dfysaas | Powered by Intact Solutions
        </p>
      </div>
    </section>
  );
};

export default FooterContentSection;
