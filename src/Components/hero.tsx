import ticket from "../assets/Vector.svg";
import path from "../assets/path27.svg";
import Enter from "../assets/svg10610178807.svg";
import Green from "../assets/Button-tiny.svg";
import image from "../assets/G2.png";
import star from "../assets/Star.svg";
import Navbar from "./navBar";
import bgImage from "../assets/NewBg.svg";
import SharedButton from "../shared-components/SharedButton";
import { handleButtonNavigation } from "../utils/tracking";
import video from "../../public/Videos/TOM_VSL_V5.mp4";
const Hero = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.2)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-28 lg:px-6">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-[#0A8BA6] bg-[#045F721A] px-4 py-2 font-inter text-sm font-medium text-[#035E71] backdrop-blur-sm">
            <img src={ticket} alt="icon" className="mr-2 h-5 w-5" />
            Exclus : Business high ticket
          </div>

          {/* Main Headline */}

          <h1 className="text-balance relative mb-6 bg-gradient-to-r from-[#000000] via-[#000000] via-[#7F7F7F] to-[#000000] bg-clip-text font-inter text-4xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Parce que chaque
            <br />
            <span>lead</span> <span></span>
            <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
              compte
            </span>
            <div>
              <img
                src={path}
                alt=""
                className="absolute right-[18%] top-[98%]"
              />
            </div>
          </h1>

          {/* Subheading */}
          <p className="text-md text-pretty mx-auto mb-8 max-w-2xl text-gray-600 md:text-lg">
            {/* Chaque prospect suivi, chaque KPI en direct : Kombineo centralise tout dans un CRM pensé pour les business high-ticket. */}
            Le seul CRM qui transforme tous vos leads en opportunité d’affaires
            : Kombineo centralise tout dans un CRM pensé pour les business
            high-ticket.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-3">
            {/* <button
              style={{
                background:
                  "radial-gradient(80% 120% at 50% 100%, rgba(228, 165, 32, 0.65) 0%, rgba(200, 132, 0, 0.9) 100%)",
              }}
              className="mb-12 flex cursor-pointer items-center justify-center space-x-1 rounded-lg px-1 py-3 font-semibold text-white shadow-md shadow-amber-200 sm:space-x-2 sm:px-5 md:space-x-2 md:px-8 lg:space-x-3 lg:px-8"
            >
              <span className="text-[14px] text-white transition-colors duration-300 hover:text-black">
                Essayez gratuitement
              </span>
              <img src={Enter2} alt="" className="h-[15px] w-[15px]" />
            </button> */}
            <SharedButton
              label="Essayez gratuitement"
              gradientDirection="btt"
              href="https://app.kombineo.com/signup"
              buttonType="trial"
              trackingLabel="Hero CTA - Essayez gratuitement"
            />

            <button
              onClick={() =>
                handleButtonNavigation(
                  "https://app.kombineo.com/demo",
                  "Hero - Voir démo",
                  "demo"
                )
              }
              className="mb-12 flex cursor-pointer items-center justify-center space-x-0 rounded-lg bg-[#FFFFFF] px-1 py-3 font-semibold shadow-md hover:text-white sm:space-x-2 sm:px-5 md:space-x-2 md:px-8 lg:space-x-2 lg:px-8"
              data-button-type="demo"
              data-tracking-label="Hero - Voir démo"
            >
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-[14px] text-transparent hover:text-black">
                Voir démo
              </span>
              <img src={Enter} alt="" className="h-[25px] w-[25px]" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-between space-x-2">
              <img src={Green} alt="" />
              <p className="font-inter text-[12px] font-[700] text-[#5E5E5E]">
                Setup en 10 minutes
              </p>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <img src={Green} alt="" />
              <p className="font-inter text-[12px] font-[700] text-[#5E5E5E]">
                Support & migration en 1 clic
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2">
            <img src={image} className="h-7 w-14" alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            {/* <img src={star} alt="" /> */}
          </div>

          {/* <div className="relative z-0 m-auto mt-7 h-[500px] w-[100%] rounded-xl bg-[#D9D9D9]"></div> */}
          <video
            className="mx-auto my-8 rounded-2xl"
            src={video}
            autoPlay
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
