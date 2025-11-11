import React from "react";
import Background from "../assets/images/Background.webp";
import Logo from "../assets/images/Logo.png";
import lineImage from "../assets/images/line.png";
import ArrowImage from "../assets/images/Arrow.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-[600px] bg-no-repeat bg-cover bg-center relative px-12 py-8 
                 mid-lg:px-0 custom-lg:px-0 tab-md:px-0 max-lgx:px-0 small-xs:px-4"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        className="flex items-start justify-center 
                   small-xs:flex-col small-xs:items-center small-xs:text-center
                   tab-md:flex-col tab-md:items-center tab-md:text-center
                   mid-lg:flex-col mid-lg:items-center mid-lg:text-center
                   custom-lg:flex-col custom-lg:items-center custom-lg:text-center
                   max-lgx:flex-col max-lgx:items-center max-lgx:text-center"
      >
        {/* Left Content */}
        <div
          className="relative flex flex-col items-start space-y-6 max-w-2xl 
                     small-xs:items-center small-xs:text-center
                     tab-md:items-center tab-md:text-center
                     mid-lg:items-center mid-lg:text-center
                     custom-lg:items-center custom-lg:text-center
                     max-lgx:items-center max-lgx:text-center"
        >
          <div>
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[32px] font-semibold font-poppins">
              Hey Founders!
            </h2>
            <img
              src={lineImage}
              alt="Line"
              className="w-[15rem] h-auto 
                         small-xs:mx-auto 
                         tab-md:mx-auto 
                         mid-lg:mx-auto 
                         custom-lg:mx-auto 
                         max-lgx:mx-auto"
            />

            <h1 className="text-white text-[50px] font-bold font-poppins leading-[1] form-xs:text-[32px]">
  Looking For Custom{" "}
  <span className="text-[rgb(255,186,86)]">
    Software Development
  </span>{" "}
  Services?
</h1>

<p className="text-white text-[16px] font-normal font-poppins leading-[28px] form-xs:text-[14px]">
  If the lack of software expertise or a need for more quality developers
  holding your company back? Don't let it be a barrier to growth. Instead,
  turn to our<strong> custom software development company </strong> We
  specialize in designing & building secure, high-quality software
  solutions tailored to your specifications
</p>

          </div>

          {/* Arrow Image (hide below 1132px) */}
          <img
            src={ArrowImage}
            alt="Software development illustration"
            className="absolute top-[3.25rem] right-[-2.75rem] w-[150px] h-auto 
                       max-lgx:hidden mid-lg:hidden custom-lg:hidden tab-md:hidden small-xs:hidden"
          />
        </div>

        {/* Right Content (Form Card) */}
     <div
  className="shadow-[-2px_2px_8px_#39488f] p-[20px] bg-white rounded-[10px] 
             w-[360px] ml-14 mt-6
             small-xs:mt-10 small-xs:mx-auto small-xs:w-[320px]
             tab-md:mt-10 tab-md:mx-auto 
             mid-lg:mt-10 mid-lg:mx-auto mid-lg:w-[737px]
             custom-lg:mt-10 custom-lg:mx-auto custom-lg:w-[793px]
             max-lgx:mt-10 max-lgx:mx-auto max-lgx:w-[900px]
             form-xs:w-[285px]"   
>
  <h2 className="text-[#0e2589] font-semibold font-poppins text-center text-[24px] leading-[1] form-xs:text-[20px]">
    Let's connect to bring your idea to life
  </h2>

  <form className="mt-6 space-y-4">
    {/* Name field */}
    <div className="flex flex-col">
      <label className="text-[#3e3e3e] text-[12px] font-medium pl-[10px] mb-[5px] text-left">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        className="w-full outline-none px-5 py-2.5 bg-[#f7f8f8] border border-transparent rounded-full"
      />
    </div>

    {/* Phone field */}
    <div className="flex flex-col">
      <label className="text-[#3e3e3e] text-[12px] font-medium pl-[10px] mb-[5px] text-left">
        Phone
      </label>
      <input
        type="tel"
        placeholder="Phone"
        className="w-full outline-none px-5 py-2.5 bg-[#f7f8f8] border border-transparent rounded-full"
      />
    </div>

    {/* Email field */}
    <div className="flex flex-col">
      <label className="text-[#3e3e3e] text-[12px] font-medium pl-[10px] mb-[5px] text-left">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        className="w-full outline-none px-5 py-2.5 bg-[#f7f8f8] border border-transparent rounded-full"
      />
    </div>

    {/* Button */}
    <div className="flex justify-center pt-5">
      <button
        type="submit"
        className="w-[190px] text-white bg-[#ff486a] rounded-full border-none py-2.5 px-5"
      >
        Let's connect
      </button>
    </div>
  </form>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
