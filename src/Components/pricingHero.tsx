import calendar from "../assets/Calendar.svg";
import arrow from "../assets/PricingArrow.svg";
import task from "../assets/Tasks.svg";
import Navbar from "./navBar";
import ticket from "../assets/Vector.svg";
// import bgImage from "../assets/bg.svg";
import bgImage from "../assets/NewBg.svg";
// import { useState } from 'react';
import Plans from "../Components/plans";
import { useBillingStore } from "../store";
const Hero = () => {
  const { isMonthly, toggleBilling } = useBillingStore();
  //  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <Navbar />
        <div className="pt-30 mx-auto max-w-7xl px-4 pb-6 lg:px-6">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-[#0A8BA6] bg-[#045F721A] px-4 py-2 font-inter text-sm font-medium text-[#035E71] backdrop-blur-sm">
            <img src={ticket} alt="icon" className="mr-2 h-5 w-5" />
            Exclus : Business high ticket
          </div>

          {/* Main Headline */}
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-inter text-2xl font-semibold text-[#111111] sm:text-3xl md:text-[45px]">
              Un CRM{" "}
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                Simple
              </span>
              , Une Offre{" "}
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                {" "}
                Claire{" "}
              </span>{" "}
              Et Des Résultats{" "}
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                {" "}
                Concrets{" "}
              </span>
            </h2>

            <p className="md:text:[15px] mt-5 text-center text-[14px] font-medium text-[#4C4C4C] sm:text-[15px] lg:text-[15px]">
              Une tarification flexible et transparente pour soutenir la
              productivité <br /> et la croissance de votre équipe à chaque
              étape.
            </p>

            <div className="mt-6 block items-center justify-center gap-3 sm:flex md:flex lg:flex">
              <div className="flex items-center justify-center space-x-2">
                <img src={calendar} alt="" />
                <p className="font-inter text-[12px] font-medium text-[#000000]">
                  {"7 Jours d’essai gratuit"}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img src={task} alt="" />
                <p className="font-inter text-[12px] font-medium text-[#000000]">
                  Migration de données gratuites
                </p>
              </div>
            </div>

            <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-3 px-4 font-bold sm:flex-row sm:gap-4">
              {/* Monthly Label */}
              <span
                className={`${
                  isMonthly
                    ? "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"
                    : "text-gray-600"
                } text-sm sm:text-base`}
              >
                Abonnement Mensuel
              </span>

              {/* Toggle Switch */}
              <div
                className="relative h-6 w-12 cursor-pointer rounded-full bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71]"
                onClick={toggleBilling}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-300 absolute top-0.5 ${
                    isMonthly ? "left-1" : "left-6"
                  }`}
                ></div>
              </div>

              {/* Annual Label */}
              <span
                className={`${
                  !isMonthly
                    ? "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"
                    : "text-gray-600"
                } text-sm sm:text-base`}
              >
                Économisez avec l'abonnement annuel
              </span>

              {/* Arrow */}
              <img
                src={arrow}
                alt=""
                className="absolute -top-7 right-14 w-14 sm:-right-5 sm:w-20"
              />

              {/* Discount Badge */}
              <button
                className="absolute -top-7 right-2 cursor-pointer rounded-lg px-2 py-0.5 text-[10px] font-normal text-white shadow-md transition-colors sm:-right-14 sm:text-[12px]"
                style={{
                  background:
                    "linear-gradient(to right, #035E71, #5DA9B9, #035E71)",
                }}
              >
                Jusqu’à -29%
              </button>
            </div>
          </div>
          <Plans />
        </div>
      </div>
    </div>
  );
};

export default Hero;
