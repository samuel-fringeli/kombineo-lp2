import TestimonialCard from "./TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "./tabs";
import ticket from "../assets/whitebgflame.svg";
import secondticket from "../assets/White-Flame.svg";
import line from "../assets/RM7SroEIrEIxZGjpGsUOazxF4.svg fill.svg";
import image from "../assets/ArrowGradient.svg";
import { useEffect, useRef, useState } from "react";
// import Enter2 from "../assets/Vector2.svg";
import app from "../assets/apps_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg";
import sideImage from "../assets/KPI.png";
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
import CockpitImage from "../assets/Cockpit IA.png";
import settingImage from "../assets/A setting.png";
import AppealsImage from "../assets/closing calls.png";
import FellowImage from "../assets/Follow upp.png";
import CommImage from "../assets/commissions.png";
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

// Register ScrollTrigger
gsapLib.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Cockpit IA",
    img: app,
    description:
      "Analysez vos appels de vente grâce à l’IA, adaptée à votre niche. Le Cockpit centralise vos données clés, suit vos objectifs et vous alerte sur vos follow-up. Décidez plus vite et gardez toujours une vue claire sur votre activité",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: CockpitImage,
  },
  {
    title: "Setting appel",
    img: app,
    description:
      "Chaque lead est automatiquement intégré dans Kombineo dès son entrée dans votre tunnel, quelle que soit la source. L’automatisation du processus de prise de rendez-vous élimine les pertes, augmente vos taux de prise de rdv et personnalise l’expérience de vos prospects.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: settingImage,
  },
  {
    title: "Appels de closing",
    img: app,
    description:
      "Mettez à jour vos appels en deux clics seulement. Visualisez vos forces et vos points d’amélioration instantanément grâce à l’IA qui optimise vos performances. Détectez les doublons et accédez en un coup d’œil à l’historique et aux rendez-vous à venir de vos prospects.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: AppealsImage,
  },
  {
    title: "Follow up",
    img: app,
    description:
      "Ne laissez aucun lead passer entre les mailles. Suivez vos prospects tout au long de leur cycle de vente avec rappels automatisés, emails et notifications intégrés. Maximisez vos opportunités et transformez chaque contact en potentiel de chiffre d’affaires",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: FellowImage,
  },
  {
    title: "KPI",
    img: app,
    description:
      "Pilotez vos ventes en temps réel : CA contracté, encaissé, prévisionnel, taux de présence, taux de closing, sources d’appels, objections récurrentes… Chaque indicateur est suivi et présenté pour vous aider à prendre des décisions stratégiques et orientées résultats.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: sideImage,
  },
  {
    title: "Commissions",
    img: app,
    description:
      "Boostez la motivation de vos setters et closers grâce au suivi des commissions en temps réel. Les montants sont calculés automatiquement, vous gagnez du temps et vos équipes dépassent leurs objectifs en voyant concrètement leurs résultats évoluer.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: CommImage,
  },
];

const Cards = () => {
  const [active, setActive] = useState("bonjour");
  const sectionRef = useRef(null);

  // GSAP Pin Feature Section Refs
  const featureSectionRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);

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

  // GSAP ScrollTrigger Pin Effect with Vertical Scroll Animation
  useEffect(() => {
    const featureSection = featureSectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    const scrollContent = scrollContentRef.current;

    if (!featureSection || !pinWrapper || !scrollContent) return;

    const totalFeatures = features.length;
    const scrollDistance = window.innerHeight * 2; // Reduced scroll distance for better sync

    // Pin the entire feature component when it reaches 80px from top
    const pinConfig: gsap.plugins.ScrollTriggerInstanceVars = {
      trigger: featureSection,
      start: "top 110px", // Pin when container is 80px from top
      end: () => `+=${scrollDistance}`, // Pin for reduced duration
      pin: pinWrapper,
      anticipatePin: 1,
      refreshPriority: -1,
      onUpdate: (self) => {
        // Calculate which feature should be active based on scroll progress
        const progress = self.progress;
        const featureIndex = Math.min(
          Math.floor(progress * totalFeatures),
          totalFeatures - 1
        );

        // Update active index if it changed
        if (featureIndex !== activeIndex) {
          setActiveIndex(featureIndex);
        }

        // Create smooth vertical sliding animation with smaller increments
        const yOffset = -(progress * (totalFeatures - 1) * 60); // Move by 60vh per feature
        gsapLib.set(scrollContent, {
          y: `${yOffset}vh`,
          ease: "none",
        });
      },
    };

    const pinTrigger = ScrollTrigger.create(pinConfig);

    return () => {
      pinTrigger.kill();
    };
  }, [activeIndex, features]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);

    // Animate to the selected feature
    const scrollContent = scrollContentRef.current;
    if (scrollContent) {
      const yOffset = -(index * 60); // Move by 60vh per feature
      gsapLib.to(scrollContent, {
        y: yOffset + "vh",
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

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
              </span>{" "}
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
            <Tabs></Tabs>
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

      <div className="-mt-32">
        <div ref={featureSectionRef} className="relative">
          {/* Pin Wrapper - This gets pinned by GSAP */}
          <div
            ref={pinWrapperRef}
            className="m-auto w-[95%] overflow-hidden rounded-2xl border-[2px] border-[#FFFFFF] bg-gradient-to-b from-[#E0F5FF] to-[#F4F7F8] font-inter shadow-lg"
            style={{ height: "100vh", maxHeight: "75vh" }}
          >
            <h3 className="ml-10 block pt-8 font-bold text-[#000000] sm:block md:block lg:hidden">
              Fonctionnalités
            </h3>

            <div className="relative flex h-full flex-col lg:flex-row">
              {/* LEFT SECTION (Tabs) - Absolute positioned within container */}
              <div
                className="absolute left-10 top-10 z-20 hidden w-64 text-[18px] font-medium lg:block"
                role="tablist"
                aria-label="Feature navigation"
              >
                <h3 className="font-bold text-[#000000]">Fonctionnalités</h3>
                <ul className="mt-2 space-y-0 text-[16px]">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      onClick={() => handleTabClick(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleTabClick(index);
                        }
                      }}
                      tabIndex={0}
                      role="tab"
                      aria-selected={activeIndex === index}
                      aria-controls={`feature-panel-${index}`}
                      className={`cursor-pointer transition-all duration-500 ease-in-out text-[17px] font-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035E71] focus:ring-offset-2 p-2 ${
                        activeIndex === index
                          ? "bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-transparent font-semibold"
                          : "text-[#9999998A] hover:text-[#666666]"
                      }`}
                    >
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* MIDDLE CONTENT - Vertical sliding features */}
              <div
                // className="lg:mx mx-0 ml-8 flex h-full flex-1 items-center justify-center overflow-hidden pt-[160%] sm:-ml-20 sm:pt-[138%] md:-ml-10 md:pt-[101%] lg:-ml-72 lg:pt-[89%]"
                className="mb-10 ml-8 overflow-hidden sm:ml-20 md:ml-10 lg:ml-72"
                role="tabpanel"
                aria-live="polite"
              >
                <div
                  ref={scrollContentRef}
                  className="w-full space-y-4 sm:max-w-lg sm:space-y-3 md:max-w-lg md:space-y-5 lg:max-w-md lg:space-y-5"
                  style={{ transform: "translateY(0)" }}
                >
                  {/* All features stacked vertically for sliding animation */}
                  {features.map((feature, index) => (
                    <>
                      <div
                        key={index}
                        ref={(el) => {
                          featureRefs.current[index] = el;
                        }}
                        id={`feature-panel-${index}`}
                        data-index={index}
                        className="flex h-full w-full flex-col justify-center py-4 focus:outline-none"
                        style={{ height: "57vh", minHeight: "57vh" }}
                        tabIndex={-1}
                      >
                        {/* <img src="" alt="" /> */}
                        {/* <img
                        src={feature.img2 || "/placeholder.svg"}
                        alt={`${feature.title} feature illustration`}
                        className="block h-auto w-full transition-transform duration-500 hover:scale-105 sm:block md:block lg:hidden"
                        loading="lazy"
                      /> */}
                        <img
                          src={feature.img || "/placeholder.svg"}
                          alt={`${feature.title} feature illustration`}
                          className="h-auto w-8 transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        <h1
                          className="mt-4 bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-[28px] font-bold text-transparent transition-all duration-500 sm:text-[36px] lg:text-[43px]"
                          id={`feature-title-${index}`}
                        >
                          {feature.title}
                        </h1>
                        <p
                          className="pt-0 text-lg font-semibold text-[#333333] transition-all duration-500"
                          aria-describedby={`feature-title-${index}`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE SECTION - Absolute positioned within container */}

              <div
                className="absolute right-0 top-10 z-20 hidden w-[40%] lg:block"
                aria-hidden="true"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    variants={{}}
                    src={features[activeIndex]?.img2 || "/placeholder.svg"}
                    alt={features[activeIndex]?.title || "Feature image"}
                    className="h-auto w-full rounded-xl"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

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
