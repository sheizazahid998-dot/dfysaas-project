import React from "react";
import AppImage from "../assets/images/App.webp";
import ProductDevelopment from "../assets/images/ProductDevelopment.webp";
import UXDevelopment from "../assets/images/UXDevelopment.webp";
import RemoteTeam from "../assets/images/RemoteTeam.webp";
import QualityAssurance from "../assets/images/QualityAssurance.webp";

const AdvisoryCardsSection = () => {
  const cards = [
    {
      image: AppImage,
      title: "Web App Development",
      description:
        "Partner with us for a standout web app user experience & engagement.",
    },
    {
      image: AppImage,
      title: "Mobile App Development",
      description:
        "Our custom mobile apps offer features that off-the-shelf apps cannot.",
    },
    {
      image: ProductDevelopment,
      title: "Product Development",
      description:
        "Upgrade, scale, or add new features to boost business competitiveness.",
    },
    {
      image: UXDevelopment,
      title: "UI/UX Development",
      description:
        "Get high-performing user interfaces for an immersive user experience.",
    },
    {
      image: RemoteTeam,
      title: "Dedicated Remote Team",
      description:
        "Quickly fill skills gaps with our dedicated software development team.",
    },
    {
      image: QualityAssurance,
      title: "Quality Assurance",
      description:
        "Our QA and test-driven development help eliminate bugs and defects.",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-16">
      {/* Section Heading */}
      <h2 className="text-center text-[#333] font-poppins font-bold text-[30px] leading-[40px] mb-12">
        Technology Advisory and Beyond
      </h2>

      {/* All Cards with Flexbox */}
      <div className="max-w-[1530px] mx-auto px-4 flex flex-wrap justify-center gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#fdfdfd] rounded-[12px] shadow-md p-8 flex flex-col items-center text-center w-[360px]"
          >
            <img src={card.image} alt={card.title} className="mb-6" />
            <h3 className="text-[#333] font-poppins font-bold text-[18px] mb-4">
              {card.title}
            </h3>
            <p className="text-[#727272] font-poppins font-normal text-[16px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvisoryCardsSection;
