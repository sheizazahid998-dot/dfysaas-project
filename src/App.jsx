import React from "react";

// All imports with lowercase folder and explicit .jsx extension
import HeroSection from "./components/HeroSection.jsx";
import DevelopmentSection from "./components/DevelopmentSection.jsx";
import AdvisoryCardsSection from "./components/AdvisoryCardsSection.jsx";
import BenefitsDFYSection from "./components/BenefitsDFYSection.jsx";
import BlueBannerSection from "./components/BlueBannerSection.jsx";
import OurWorkSection from "./components/OurWorkSection.jsx";
import BestChoiceSection from "./components/BestChoiceSection.jsx";
import TransformIdeaSection from "./components/TransformIdeaSection.jsx";
import CustomerTestimonials from "./components/CustomerTestimonials.jsx";
import NewsLetterSection from "./components/NewsLetterSection.jsx";
import TwoBannerSection from "./components/TwoBannerSection.jsx";
import FooterLinkSection from "./components/FooterLinkSection.jsx";
import FooterContentSection from "./components/FooterContentSection.jsx";

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
