import React from "react";
import FastOnboarding from "../assets/images/FastOnboarding.webp";
import AgileProjectManagement from "../assets/images/AgileProjectManagement.webp";
import ConsistentDelivery from "../assets/images/ConsistentDelivery.webp";
import TruePartner from "../assets/images/TruePartner.webp";

const BestChoiceSection = () => {
  const items = [
    {
      img: FastOnboarding,
      title: "Fast Onboarding",
      desc: "We empower our global clientele through quick onboarding and streamlined communication.",
    },
    {
      img: AgileProjectManagement,
      title: "Agile Project Management",
      desc: "Our efficient process meets client expectations, avoids budget overruns, and minimizes risks.",
    },
    {
      img: ConsistentDelivery,
      title: "Consistent Delivery",
      desc: "Utilizing our expertise, time-tested processes, and technical excellence, we achieve top results.",
    },
    {
      img: TruePartner,
      title: "True Partner",
      desc: "Our clients adore us. 9 out of 10 return to us for all their future software development needs.",
    },
  ];

  return (
    <section className="py-12">
      {/* Section Heading */}
      <h2 className="text-center text-[#333] font-poppins text-[30px] font-bold mb-10">
        What Makes Us Your Best Choice?
      </h2>

      {/* Grid Layout */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-16
          custom-xs:grid-cols-1  
          custom-sm:grid-cols-1  
          custom-md:grid-cols-1  
        "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
    flex items-center bg-white shadow-[0_5px_30px_0_rgba(0,0,0,0.08)]
    p-4 rounded-[14px]
    
    /* ✅ Stack + center for all small breakpoints */
    custom-xs:flex-col custom-xs:justify-center custom-xs:text-center custom-xs:items-center
    custom-sm:flex-col custom-sm:justify-center custom-sm:text-center custom-sm:items-center
    custom-md:flex-col custom-md:justify-center custom-md:text-center custom-md:items-center
  "
          >
            {/* Image */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src={item.img}
                alt={item.title}
                className="
        object-contain mr-2
        custom-xs:mr-0 custom-xs:mb-4
        custom-sm:mr-0 custom-sm:mb-4
        custom-md:mr-0 custom-md:mb-4
      "
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[#333] font-poppins text-[18px] font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-[#666] font-poppins text-[16px] font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestChoiceSection;
