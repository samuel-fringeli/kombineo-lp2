import React, { useState } from "react";
import Infopreneur from "../assets/White-Flame.svg";
import Manager from "../assets/Manager.svg";
import Challenge from "../assets/chan.svg";
import Agence from "../assets/Agence.svg";
import container from "../assets/Container.svg";
import logo from "../assets/image 59.svg";
import Agence2 from "../assets/agence2.svg";
import challenge2 from "../assets/challenge.svg";
import Manager2 from "../assets/manager2.svg";
import ticket from "../assets/whitebgflame.svg";
import SharedButton from "../shared-components/SharedButton";

type Tab = {
  label: string;
  image: string;
  title: string;
  subtitle: string;
  checklist: string[];
  review?: string;
  reviewer: string;
  role: string;
  company: string;
  reviewerImage: string;
  logo?: string;
  img2?: string;
};

const tabsData: Tab[] = [
  {
    label: "Infopreneur/Coach",
    image: ticket,
    title: "Gagnez du temps, multipliez vos ventes",
    subtitle: "Gagnez du temps et optimisez votre business en ligne.",
    checklist: [
      "KPI en temps réel",
      "Suivi Follow up optimisé",
      "Calcul de commissions automatique",
    ],
    review:
      "Kombineo est si simple à utiliser, facile à connecter, et les fonctionnalités vous feront gagner beaucoup de temps.",
    reviewer: "Fabrien Rotz",
    role: "CEO",
    company: "Darons du Biz",
    reviewerImage: logo,
    logo: logo,
    img2: Infopreneur,
  },
  {
    label: "Manager",
    image: Manager,
    title: "Gagnez du temps, multipliez vos ventes",
    subtitle: "Augmentez vos conversions et atteignez vos clients idéaux.",
    checklist: [
      "Prise de décisions agiles",
      "Onboarding sales simplifié",
      "Prévisionnel et tendance des ventes",
    ],
    review:
      "La solution parfaite pour suivre mes campagnes et booster mes résultats.",
    reviewer: "Sophie Durand",
    role: "CMO",
    company: "MarketPro",
    // reviewerImage: "/reviewer2.png",
    reviewerImage: logo,
    logo: "/logo2.png",
    img2: Manager2,
  },
  {
    label: "Challenge",
    image: Challenge,
    title: "Gagnez du temps, multipliez vos ventes",
    subtitle: "Conçu pour s'adapter à vos besoins business.",
    checklist: [
      "Absorbe du volume en instantané",
      "Système setting avancée",
      "Follow up chirurgicale sans flou",
    ],
    review: "Un outil puissant qui s'adapte vraiment à mes besoins.",
    reviewer: "Marc Lopez",
    role: "Entrepreneur",
    company: "StartupX",
    // reviewerImage: "/reviewer3.png",
    reviewerImage: logo,
    logo: "/logo3.png",
    img2: challenge2,
  },
  {
    label: "Agence",
    image: Agence,
    title: "Gagnez du temps, multipliez vos ventes",
    subtitle: "Conçu pour s'adapter à vos besoins business.",
    checklist: [
      "Aide à la vente et à l’upsell",
      "Optimisation du CA clients",
      "Marketing suivi en temps réel",
    ],
    review:
      "Kombineo a transformé ma façon de travailler — tout est plus fluide, rapide et efficace !",
    reviewer: "Marc Lopez",
    role: "Entrepreneur",
    company: "StartupX",
    // reviewerImage: "/reviewer3.png",
    reviewerImage: logo,
    logo: "/logo3.png",
    img2: Agence2,
  },
];

const TabCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabsData[activeIndex];

  return (
    <div className="m-4 max-w-4xl rounded-2xl border-[1px] border-[#E4DFDC] bg-white p-6 font-inter shadow-lg lg:mx-auto">
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap justify-center gap-3 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-nowrap md:gap-6 md:overflow-x-auto md:px-0 md:pb-3 [&::-webkit-scrollbar]:hidden">
        {tabsData.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`
        flex items-center justify-evenly gap-2 whitespace-nowrap
        rounded-lg border cursor-pointer font-medium transition
        text-[#111111]
        w-[calc(50%-0.375rem)] sm:w-auto
        px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm lg:px-9 lg:py-4
        ${
          idx === activeIndex
            ? "bg-[linear-gradient(98.23deg,#035E71_-6.67%,#5DA9B9_45.08%,#035E71_97.28%)] text-white"
            : "bg-gray-50 border-[#E4DFDC] border-[1px] text-gray-600 hover:bg-white"
        }
      `}
          >
            <img
              className="h-4 w-4 sm:h-5 sm:w-5"
              src={idx === activeIndex ? tab.img2 : tab.image}
              alt={tab.label}
            />
            <span className="truncate">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex w-full flex-col gap-0 pl-5 sm:gap-0 md:gap-6 lg:flex-row lg:gap-0">
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          {/* <h2 className="text-center text-2xl font-bold text-gray-900"></h2> */}
          <h2 className="bg-[linear-gradient(99.96deg,#111111_-1.71%,#777777_89.24%)] bg-clip-text text-center text-[25px] font-bold leading-10 text-transparent sm:text-center sm:text-[32px] md:text-center md:text-[32px] lg:text-start lg:text-[31px]">
            {/* {activeTab.title} */}
            Gagnez du temps, <br /> multipliez vos ventes
          </h2>
          <div className="flex items-center justify-center sm:justify-center md:justify-center lg:justify-start">
            <SharedButton
              className="mt-12"
              label="Essai gratuit de 7 jours"
              gradientDirection="rtl"
              href="https://app.kombineo.com/trial"
              buttonType="trial"
              trackingLabel="Tabs Section - Essai gratuit de 7 jours"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="-ml-0 flex-1 space-y-4 sm:-ml-5 md:-ml-5 lg:-ml-5">
          <ul className="space-y-4">
            {activeTab.checklist.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-1">
                <img src={container} alt="" />
                <span className="text-start text-[15px] font-medium text-[#4C4C4C] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Testimonial */}
          <div className="mt-6 block items-start justify-center gap-3 border-t border-[#F1F0EE] pt-2 sm:flex md:flex lg:flex">
            <div className="flex-1">
              <p className="mt-1 mt-5 text-center text-sm italic text-gray-600">
                "{activeTab.review}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
