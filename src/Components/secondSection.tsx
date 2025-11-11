import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import ticket from "../assets/whitebgflame.svg";
import secondticket from "../assets/White-Flame.svg";
import line from "../assets/RM7SroEIrEIxZGjpGsUOazxF4.svg fill.svg";
import image from "../assets/ArrowGradient.svg";
import { useEffect, useRef, useState } from "react";
// import Enter2 from "../assets/Vector2.svg";
import group from "../assets/FirstImage.svg";
import bar from "../assets/Frame 2147224427.svg";
import { gsap as gsapLib } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import first from "../assets/magic consulting.jpeg.jpg";
import second from "../assets/Darons du biz.png";
import third from "../assets/Mehdi vortex.jpeg.jpg";
import fourth from "../assets/Loic bourget.png";
import fifth from "../assets/Maxence tunnel de vente.png";
import sixth from "../assets/antoine reydel.jpeg.jpg";
import seventh from "../assets/ossama .png";
import eighth from "../assets/simon.jpeg.jpg";
import LogoCard1 from "../assets/1-tibtalks.png";
import LogoCard2 from "../assets/2-daronsdubiz.png";
import LogoCard3 from "../assets/Vortex1.jpg";
import LogoCard4 from "../assets/4-viralite_.png";
import LogoCard5 from "../assets/5-maxen.png";
import LogoCard6 from "../assets/6-antoinereydel.png";
import LogoCard7 from "../assets/7-salesmindset.png";
import LogoCard8 from "../assets/8-agenceaiaa.png";
import GrayArrow from "../assets/GrayArrow.svg";
import SharedButton from "../shared-components/SharedButton";
import FeatureDisplay from "./FeatureDisplay";

// Register ScrollTrigger
gsapLib.registerPlugin(ScrollTrigger);

const Cards = () => {
  const [active, setActive] = useState("bonjour");
  const sectionRef = useRef(null);

  // useEffect for text switching
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("adieu");
          } else {
            setActive("bonjour");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cardTop = [
    {
      image: fifth,
      highlight: "+16%",
      title: "de prise de rendez vous",
      review:
        "Grâce au setting intégré, j’ai augmenté mes prises de RDV : Kombineo est le seul sur le marché qui fait ça directement depuis la landing page.",
      name: "Maxence Rigottier",
      role: "CEA",
      company: "Tunnel-de-vente.fr",
      tag: "Infopreneur",
      bgColor: "#FFFFFF",
      highlightColor: "#035E71",
      titleColor: "#0000004D",
      reviewColor: "#000000",
      nameColor: "#035E71",
      roleColor: "#247A8C80",
      tagTextColor: "#ffffff",
      tagBgColor:
        "bg-[linear-gradient(98.23deg,#035E71_-6.67%,#5DA9B9_45.08%,#035E71_97.28%)]",
      companyColor: "#035E71E5",
      title2: LogoCard5,
      ticket: secondticket,
    },
    {
      image: second,
      highlight: "3x",
      title: "plus de productivité",
      review:
        "On l’a testé dans le cadre de nos challenges, et honnêtement, on ne s’attendait pas à un résultat aussi bluffant ! Nous avons tous en temps réel pour piloter",
      name: "Alexandre Roth",
      role: "CEA",
      company: "Darons du Biz",
      tag: "Challenge",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: LogoCard2,
      ticket: ticket,
    },
    {
      image: third,
      highlight: "+24%",
      title: "de chiffre d’affaire",
      review:
        "Nous avons abandonné notre ancien CRM pour Kombineo : tout est pensé pour optimiser mes challenges et optimiser mon CA dans un marché qui se durcit",
      name: "Mehdi Baer",
      role: "CEA",
      company: "Vortex",
      tag: "Challenge",
      bgColor: "#FFFFFF",
      highlightColor: "#035E71",
      titleColor: "#0000004D",
      reviewColor: "#000000",
      nameColor: "#035E71",
      roleColor: "#247A8C80",
      tagTextColor: "#ffffff",
      tagBgColor:
        "bg-[linear-gradient(98.23deg,#035E71_-6.67%,#5DA9B9_45.08%,#035E71_97.28%)]",
      companyColor: "#035E71E5",
      title2: LogoCard3,
      ticket: secondticket,
    },
    {
      image: fourth,
      highlight: "3x",
      title: "plus de productivité",
      review: "Témoignages",
      name: "Loïc Bourget",
      role: "CEO",
      company: "Mastermind Viralité",
      tag: "Infopreneur",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: LogoCard4,
      ticket: ticket,
    },
  ];

  const cardBelow = [
    {
      image: first,
      highlight: "+100%",
      title: "de Chiffre d’affaire",
      review:
        "J’ai pu doubler mon taux de closing grâce aux analyses des dashboards personnalisés, et mes équipes ont tout de suite bien compris comment les utiliser efficacement.",
      name: "Tibtalks",
      role: "CEA",
      company: "Magic Consulting",
      tag: "Infopreneur",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: LogoCard1,
      ticket: ticket,
    },
    {
      image: seventh,
      highlight: "2x",
      title: "plus d’opportunités",
      review:
        "Intégrer Kombineo est la première chose que je fais quand je veux faire performer un écosystème et garantir mes résultats.",
      name: "Ossama Ramhry",
      role: "CEA",
      company: "SalesMindset",
      tag: "Head of Sales",
      bgColor: "#FFFFFF",
      highlightColor: "#035E71",
      titleColor: "#0000004D",
      reviewColor: "#000000",
      nameColor: "#035E71",
      roleColor: "#247A8C80",
      tagTextColor: "#ffffff",
      tagBgColor:
        "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] to-[#035E71]",
      companyColor: "#035E71E5",
      title2: LogoCard7,
      ticket: secondticket,
    },
    {
      image: sixth,
      highlight: "2x",
      title: "de clarté à 360°",
      review:
        "Avec Kombineo, j’ai enfin tout standardisé dans un outil pensé pour les business high ticket, ce qui me permet de prendre mes décisions sur de la vraie data.",
      name: "Antoine Reydel",
      role: "CEA",
      company: "Reydel Coaching",
      tag: "Coach",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: LogoCard6,
      ticket: ticket,
    },
    {
      image: eighth,
      highlight: "+50%",
      title: "de closing sur follow up",
      review:
        "Nous étions sur Google Sheets et jamais séduits par les CRM complexes. Puis est arrivé Kombineo, qui réunit tous les bénéfices recherchés sans les inconvénients. Belle trouvaille.",
      name: "Simon de Lima",
      role: "CEO",
      company: "Agence AIAA",
      tag: "Agence",
      bgColor: "#FFFFFF",
      highlightColor: "#035E71",
      titleColor: "#0000004D",
      reviewColor: "#000000",
      nameColor: "#035E71",
      roleColor: "#247A8C80",
      tagTextColor: "#ffffff",
      tagBgColor:
        "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] to-[#035E71]",
      companyColor: "#035E71E5",
      title2: LogoCard8,
      ticket: secondticket,
    },
  ];

  return (
    <>
      <div className="-mt-40 w-full bg-[#F7FEFF] pb-40">
        <div className="mb-20 text-center">
          <div className="mx-auto max-w-7xl px-4 pb-24 pt-40 lg:px-6">
            <h1 className="mb-6 text-center font-geist text-xl font-semibold md:text-3xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                24M€
              </span>
              <span></span>
              <span>
                déjà optimisés pour des <br /> entreprises comme la vôtre
              </span>
            </h1>

            {/* Scrolling Cards  */}
            <div className="relative mt-12">
              {/* Fading effect overlays */}
              <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>
              </div>

              {/* First row */}
              <div className="w-full overflow-hidden">
                <motion.div
                  className="ml-14 flex w-[600%] space-x-10 sm:w-[500%] md:w-[600%] lg:w-[300%]"
                  variants={{}}
                  animate={{ x: ["0%", "-29%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...Array(1)].map((_, index) => (
                    <div key={index} className="flex space-x-10">
                      {cardTop.map((card, idx) => (
                        <TestimonialCard key={idx} {...card} />
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Second row */}
              <div className="mt-6 w-full overflow-hidden">
                <motion.div
                  className="mr-14 flex w-[600%] space-x-10 sm:w-[500%] md:w-[300%] lg:w-[300%]"
                  variants={{}}
                  animate={{ x: ["-29%", "0%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...Array(1)].map((_, index) => (
                    <div key={index} className="flex space-x-10">
                      {cardBelow.map((card, idx) => (
                        <TestimonialCard key={idx} {...card} />
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            {/* Scrolling Cards  */}
          </div>

          {/* Tabs  */}
          <div className="mt-12">
            <h1 className="mb-2 text-center font-geist text-xl font-semibold md:text-3xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#000000] via-[#000000] via-[#6E6E6E] via-[#7F7F7F] to-[#000000] bg-clip-text text-transparent">
                Conçu
              </span>{" "}
              <span className="text-[#000000]">pour les </span> <br />
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                Entrepreneurs digitaux
              </span>
            </h1>

            <div className="flex w-[90%] items-center justify-center">
              <img src={line} alt="" />
            </div>
          </div>
        </div>

        {/* words  */}
        <div className="mx-auto max-w-4xl">
          <div className="m-auto flex w-[90%] flex-wrap items-center justify-center">
            {/* LEFT SIDE */}
            <div className="relative w-full flex-1 sm:w-auto">
              <h1 className="relative mb-4 text-start font-geist text-2xl font-semibold sm:text-3xl md:text-3xl lg:text-[40.77px]">
                {active === "bonjour" ? (
                  <>
                    <span className="text-[#6E6E6E]">Dites adieu à</span>
                    <img
                      src={GrayArrow}
                      alt="Decorative"
                      className="md:left-34 sm:w-30 absolute -top-14 left-20 w-20 sm:-top-20 sm:left-36 md:-top-24 md:w-36"
                    />
                  </>
                ) : (
                  <>
                    <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                      Dites bonjour à
                    </span>
                    <img
                      src={image}
                      alt="Decorative"
                      className="md:left-34 sm:w-30 absolute -top-14 left-20 w-20 sm:-top-20 sm:left-36 md:-top-24 md:w-36"
                    />
                  </>
                )}
              </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1">
              <ul className="space-y-12 text-start text-base font-semibold sm:space-y-12 sm:text-xl md:text-3xl lg:text-[30px]">
                {active === "bonjour" ? (
                  <div className="space-y-2 text-[#6E6E6E] transition-all duration-700">
                    <li>Une dispersion des leads</li>
                    <li>Des relances oubliées</li>
                    <li>Des décisions à l’aveugle</li>
                    <li>Des tableaux de bord incomplets</li>
                  </div>
                ) : (
                  <div className="space-y-2 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent transition-all duration-700">
                    <li>Un cockpit IA</li>
                    <li>Un suivi des leads optimisés</li>
                    <li>Des KPI en temps réel</li>
                    <li>Des encaissements et commissions claires</li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Pourquoi nos clients nous ont choisis  */}
        <div ref={sectionRef} className="mt-16">
          <h1 className="mb-3 text-center font-geist text-xl font-semibold md:text-3xl lg:text-5xl">
            4 leviers puissants derrière <br /> le scale de nos clients
          </h1>
          <p className="text-center text-[#757575]">
            Gagnez en clarté, efficacité et en chiffre d’affaires dès la prise
            en main
          </p>
          <div id="features" className="mt-10 flex items-center justify-center">
            <SharedButton
              label="Essayez gratuitement"
              href="https://app.kombineo.com/signup"
              buttonType="trial"
              trackingLabel="Features Section - Essayez gratuitement"
            />
          </div>
        </div>
      </div>

      {/* GSAP Pin Feature Section */}
      <FeatureDisplay />

      <div className="mt-30 mx-auto max-w-4xl text-center">
        <div className="">
          <h1 className="mb-3 text-center font-geist text-xl font-semibold md:text-3xl lg:text-4xl">
            <span className="bg-[linear-gradient(92.36deg,#000000_1.98%,#7F7F7F_37.95%,#000000_62.94%,#6E6E6E_72.43%,#000000_92.41%,#999999_105.9%)] bg-clip-text text-transparent">
              {"Kombineo s'adapte à votre"}
            </span>
            <br />
            <span>Tunnel de vente, </span>
            <span className="bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-transparent">
              pas l'inverse.
            </span>
          </h1>
          <div></div>
        </div>
      </div>
      <motion.div
        className="m-auto mb-4 mt-8 flex w-[75%] flex-col items-center justify-center gap-4 lg:flex-row"
        initial={{ opacity: 0, y: 50 }}
        variants={{}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={group}
          alt="group"
          className="h-auto w-[100%] sm:w-[90%] md:w-[90%] lg:w-[47%]"
        />
        <img
          src={bar}
          alt="bar"
          className="h-auto w-[100%] sm:w-[90%] md:w-[90%] lg:w-[47%]"
        />
      </motion.div>
    </>
  );
};

export default Cards;
