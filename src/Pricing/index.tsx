import PricingHero from "../Components/pricingHero";
import FaqSection from "../Components/faq";
const index = () => {
  return (
    <div className="bg-[#ecfcff]">
      <PricingHero />
      <div className="-mt-56 bg-[#F7FEFF] pb-0">
        <FaqSection />
      </div>
    </div>
  );
};

export default index;
