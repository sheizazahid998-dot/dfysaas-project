import React from "react";
import BlueBanner from "../assets/images/BlueBanner.webp";

const BlueBannerSection = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center py-16"
      style={{
        backgroundImage: `url(${BlueBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="relative px-6 text-left xs-center:text-center xs-center:flex xs-center:flex-col xs-center:items-center xs-center:justify-center center-md:text-center center-md:flex center-md:flex-col center-md:items-center center-md:justify-center">
        <h1
          className="-mt-6 mb-4"
          style={{
            color: "#f6f6f6",
            fontFamily: "Poppins, sans-serif",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Looking for a Reliable Development Partner?
        </h1>

        <p
          className="mb-10"
          style={{
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
          }}
        >
          Our <b>bespoke software development company</b> enables greater
          flexibility and agility, which is why 98% of CTOs trust us.
        </p>

        {/* Button */}
        <button
          style={{
            backgroundColor: "#ff486a",
            border: "2px solid #ff486a",
            color: "#fdfdfd",
            fontFamily: "Poppins, sans-serif",
            padding: "14px 30px",
            borderRadius: "50px",
            marginBottom: "-10px",
          }}
        >
          Let's Discuss Your Project
        </button>
      </div>
    </section>
  );
};

export default BlueBannerSection;
