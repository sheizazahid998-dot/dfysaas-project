import React from "react";

// All imports with lowercase folder and explicit .jsx extension
import HeroSection from "./Components/HeroSection.jsx";
import DevelopmentSection from "./Components/DevelopmentSection.jsx";
import AdvisoryCardsSection from "./Components/AdvisoryCardsSection.jsx";
import BenefitsDFYSection from "./Components/BenefitsDFYSection.jsx";
import BlueBannerSection from "./Components/BlueBannerSection.jsx";
import OurWorkSection from "./Components/OurWorkSection.jsx";
import BestChoiceSection from "./Components/BestChoiceSection.jsx";
import TransformIdeaSection from "./Components/TransformIdeaSection.jsx";
import CustomerTestimonials from "./Components/CustomerTestimonials.jsx";
import NewsLetterSection from "./Components/NewsLetterSection.jsx";
import TwoBannerSection from "./Components/TwoBannerSection.jsx";
import FooterLinkSection from "./Components/FooterLinkSection.jsx";
import FooterContentSection from "./Components/FooterContentSection.jsx";

const App = () => {
  return (
    <>
      <HeroSection />
      <DevelopmentSection />
      <AdvisoryCardsSection />
      <BenefitsDFYSection />
      <BlueBannerSection />
      <OurWorkSection />
      <BestChoiceSection />
      <TransformIdeaSection />
      <CustomerTestimonials />
      <NewsLetterSection />
      <TwoBannerSection />
      <FooterLinkSection />
      <FooterContentSection />
    </>
  );
};

export default App;
