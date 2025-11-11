import React from "react";

const TransformIdeaSection = () => {
  return (
    <section className="py-12 flex justify-center">
      <div className="text-center ">
        <h2 className="text-[#333] font-poppins text-[30px] font-bold leading-[40px] mb-4">
          Ready to transform your ideas into reality?
        </h2>

        <p className="text-[#666] font-poppins text-[16px] font-normal mb-14">
          Let’s discuss how our expert team can tailor software solutions for
          your needs
        </p>

        <button
          className="bg-[#ff486a] border-none shadow-[0_0_10px_rgba(0,0,0,0.5)] 
             px-6 py-3 text-[#fdfdfd] rounded-full font-poppins 
             transition-all duration-300 transform
             hover:bg-[#fdfdfd] hover:text-[#ff486a] hover:scale-105"
        >
          Schedule a Meeting!
        </button>
      </div>
    </section>
  );
};

export default TransformIdeaSection;
