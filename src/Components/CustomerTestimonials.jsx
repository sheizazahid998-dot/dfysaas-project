import React from "react";
import Slider from "react-slick";
import customer from "../assets/images/customer.webp";
import Ralph from "../assets/images/Ralph.webp";
import Kevin from "../assets/images/Kevin.webp";
import Pervez from "../assets/images/Pervez.webp";
import SherryTingley from "../assets/images/SherryTingley.webp";
import Steven from "../assets/images/Steven.webp";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      img: Ralph,
      name: "Ralph Mastronardi",
      role: "Rapid Machining, Reliable Mold Services",
      desc: "DFY SaaS provided an automated process for us to make better management decisions. We improved our workflow and we are more informed. Our business is experiencing more profits than ever thanks to Usman’s solutions",
    },
    {
      img: Steven,
      name: "Steven Warner",
      role: "Owner, AutoMotoHR",
      desc: "Outstanding to work with. We have been working on a long term project and the end product totally exceeded my expectations. Tasks were always done correctly and on schedule. I will absolutely be using again and would give a 100% recommendation.",
    },
    {
      img: Kevin,
      name: "Kevin",
      role: "CEO & Co-Founder, Kijenga",
      desc: "Amazing team! Very professional and delivered everything on time.",
    },
    {
      img: Pervez,
      name: "Farrukh Pervez",
      role: "Director, Tutor Finder Services",
      desc: "The team was very competent, and from the first day, they were mentally clear about the project.",
    },
    {
      img: SherryTingley,
      name: "Sherry Tingley",
      role: "CEO, One Click LLC",
      desc: "DFY SaaS’s technology plan improved my business workflow considerably. My business is now more efficient and profitable because of the automation process work.",
    },
  ];

  // ✅ Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-6">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-[#a8a8a8] rounded-full"></div>
    ),
    // 🔹 Responsive breakpoints
    responsive: [
      {
        breakpoint: 880, // 600–880px → 1 card
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // 300–600px → 1 card
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${customer})` }}
    >
      {/* Heading */}
      <h2 className="text-center font-poppins text-[35px] font-bold mb-12">
        <span className="text-[#ff486a]">Customer </span>
        <span className="text-[#112b98]">Testimonials</span>
      </h2>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3 mb-10">
              <div
                className="testimonial-card bg-white shadow-[0_0_5px_0_#d7d7d7] 
                           rounded-[12px] p-5 flex flex-col justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-poppins text-[18px] text-[#333] font-semibold pl-5">
                      {item.name}
                    </h3>
                    <h4 className="font-poppins text-[14px] text-[#a8a8a8] pl-5">
                      {item.role}
                    </h4>
                  </div>
                </div>
                <p className="text-[#666] font-poppins text-[15px] font-normal mt-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <button
            className="font-poppins text-[18px] font-semibold 
              bg-[#ff486a] border border-[#ff486a] 
              rounded-[39px] shadow-[0_0_10px_0_transparent] 
              px-[30px] py-[15px] text-[#fdfdfd] 
              transition-all duration-300 
              hover:bg-[#fdfdfd] hover:text-[#ff486a]"
          >
            Book a Free Call
          </button>
        </div>
      </div>

     
      <style>
        {`
          /* Default fixed height */
          .testimonial-card {
            height: 230px;
          }

          /* ✅ Remove fixed height between 300px–600px */
          @media (max-width: 600px) and (min-width: 300px) {
            .testimonial-card {
              height: auto !important;
            }
          }

          /* Active dot color */
          .slick-dots li.slick-active div {
            background: #112b98 !important;
          }
        `}
      </style>
    </section>
  );
};

export default CustomerTestimonials;
