import PricingHero from "../Components/pricingHero";
import FaqSection from "../Components/faq";
import Footer from "../Components/Footer";
const index = () => {
  return (
    <div className="bg-[#ecfcff]">
      <PricingHero />
      <div className="bg-[#F7FEFF] pb-0">
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
};

export default index;
