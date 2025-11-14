import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Hero from "../Components/hero";
import Cards from "../Components/secondSection";
const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToFeatures) {
      const el = document.getElementById("features");

      // Reset scroll instantly
      window.scrollTo(0, 0);

      // Smooth scroll
      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);

      // ❗ Remove state so it does NOT persist on refresh
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="bg-[#ecfcff]">
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default LandingPage;
