import React from "react";
import Pool from "../assets/images/Pool.webp";
import Faster from "../assets/images/Faster.webp";
import Focus from "../assets/images/Focus.webp";
import SaveTime from "../assets/images/SaveTime.webp";

const BenefitsDFYSection = () => {
  const benefits = [
    {
      id: 1,
      img: Pool,
      title: "Access to a larger talent pool:",
      desc: "Getting DFY SaaS’s software development Services grants you immediate access to a vast talent pool of skilled developers. This enables you to create a superior product.",
    },
    {
      id: 2,
      img: Faster,
      title: "Faster time-to-market:",
      desc: "DFY SaaS has the infrastructure and expertise to get a software development project up and running quickly. This can help you bring your product to market faster than in-house.",
    },
    {
      id: 3,
      img: Focus,
      title: "Focus on core competencies:",
      desc: "Our compact team lets you focus on core competencies, like marketing and sales. Consequently, you can increase productivity and efficiency in other areas of your business.",
    },
    {
      id: 4,
      img: SaveTime,
      title: "Cost savings:",
      desc: "Outsourcing us offers cost savings through consolidated benefits, such as pre-hired talent, favorable contracts, zero onboarding costs, enhanced transparency, and many more.",
    },
  ];

  return (
    <section className="w-full py-12 px-6">
      {/* Section Heading */}
      <h2 className="text-center text-[#333] font-poppins text-[30px] font-bold">
        Benefits of the Team DFY SaaS
      </h2>

      {/* Cards Grid */}
      <div
        className="
          mt-10 grid grid-cols-1 small-xs:grid-cols-1 tab-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 
          mid-lg:grid-cols-1 custom-lg:grid-cols-1 custom-xl:grid-cols-1 
          gap-5 mx-auto
        "
      >
        {benefits.map((item) => (
          <div
            key={item.id}
            className="
              shadow-[0_5px_30px_0_rgba(0,0,0,0.08)] 
              p-8 rounded-[14px] flex items-start gap-6
              small-xs:flex-col small-xs:items-center small-xs:text-center
              tab-md:flex-col tab-md:items-center tab-md:text-center
            "
          >
            {/* Image */}
            <img src={item.img} alt={item.title} className="small-xs:mb-4 tab-md:mb-4" />

            {/* Title + Paragraph */}
            <div>
              <h3 className="text-[#333] font-poppins text-[20px] font-bold mb-1">
                {item.title}
              </h3>
              <p className="text-[#666] font-poppins text-[16px] font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsDFYSection;
