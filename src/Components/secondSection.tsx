import TestimonialCard from "./TestimonialCard";
// // import ProfileImage from "../assets/image 56.svg";
// import firstCardLogo from "../assets/image 62.svg";
// import secondCardLogo from "../assets/image 63.svg";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "./tabs";
import ticket from "../assets/whitebgflame.svg";
import secondticket from "../assets/White-Flame.svg";
import line from "../assets/RM7SroEIrEIxZGjpGsUOazxF4.svg fill.svg";
import image from "../assets/ArrowGradient.svg";
import { useEffect, useRef, useState } from "react";
import Enter2 from "../assets/Vector2.svg";
import app from "../assets/apps_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg";
// import pp from "../assets/image 65.svg";
import sideImage from "../assets/KPI.png";
import group from "../assets/FirstImage.svg";
import bar from "../assets/Frame 2147224427.svg";
import { gsap as gsapLib } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import first from "../assets/magic consulting.jpeg.jpg"
import second from "../assets/Darons du biz.png"
import third from '../assets/Mehdi vortex.jpeg.jpg'
import fourth from "../assets/Loic bourget.png"
import fifth from '../assets/Maxence tunnel de vente.png'
import sixth from '../assets/antoine reydel.jpeg.jpg'
import seventh from '../assets/ossama .png'
import eighth from '../assets/simon.jpeg.jpg'
import CockpitImage from '../assets/Cockpit IA.png'
import settingImage from '../assets/A setting.png'
import AppealsImage from '../assets/closing calls.png'
import FellowImage from '../assets/Follow upp.png'
import CommImage from '../assets/commissions.png'
import LogoCard1 from '../assets/1-tibtalks.png'
import LogoCard2 from '../assets/2-daronsdubiz.png'
import LogoCard3 from '../assets/3-vortex.png'
import LogoCard4 from '../assets/4-viralite_.png'
import LogoCard5 from '../assets/5-maxen.png'
import LogoCard6 from '../assets/6-antoinereydel.png'
import LogoCard7 from '../assets/7-salesmindset.png'
import LogoCard8 from '../assets/8-agenceaiaa.png'
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
    img2 : settingImage
  },
  {
    title: "Appels de closing",
    img: app,
    description:
      "Mettez à jour vos appels en deux clics seulement. Visualisez vos forces et vos points d’amélioration instantanément grâce à l’IA qui optimise vos performances. Détectez les doublons et accédez en un coup d’œil à l’historique et aux rendez-vous à venir de vos prospects.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: AppealsImage
  },
  {
    title: "Follow up",
    img: app,
    description:
      "Ne laissez aucun lead passer entre les mailles. Suivez vos prospects tout au long de leur cycle de vente avec rappels automatisés, emails et notifications intégrés. Maximisez vos opportunités et transformez chaque contact en potentiel de chiffre d’affaires",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: FellowImage
  },
  {
    title: "KPI",
    img: app,
    description:
      "Pilotez vos ventes en temps réel : CA contracté, encaissé, prévisionnel, taux de présence, taux de closing, sources d’appels, objections récurrentes… Chaque indicateur est suivi et présenté pour vous aider à prendre des décisions stratégiques et orientées résultats.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2: sideImage
  },
  {
    title: "Commissions",
    img: app,
    description:
      "Boostez la motivation de vos setters et closers grâce au suivi des commissions en temps réel. Les montants sont calculés automatiquement, vous gagnez du temps et vos équipes dépassent leurs objectifs en voyant concrètement leurs résultats évoluer.",
    testimonials: "Tibtalks, Fondateur Magic consulting",
    img2:CommImage
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
      image: first,
      highlight: "+100%",
      title: "de Chiffre d’affaire",
      review:
        "J’ai pu doubler mon taux de closing grâce aux analyses des dashboards personnalisés, et mes équipes ont tout de suite bien compris comment les utiliser efficacement",
      name: "Tibtalks",
      role: "CEA",
      company: "Magic Consulting",
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
      title2: LogoCard1,
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
        "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] to-[#035E71]",
      companyColor: "#035E71E5",
      title2: LogoCard3,
      ticket: secondticket,
    },
    {
      image: fourth,
      highlight: "3x",
      title: "plus de productivité",
      review:
        "Témoignages",
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
      image: fifth,
      highlight: "+16%",
      title: "de prise de rendez vous",
      review:
        "Grâce au setting intégré, j’ai augmenté mes prises de RDV : Kombineo est le seul sur le marché qui fait ça directement depuis la landing page",
      name: "Maxence Rigottier",
      role: "CEA",
      company: "Tunnel-de-vente.fr",
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
      title2: LogoCard5,
      ticket: ticket,
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
      title2: LogoCard6,
      ticket: secondticket,
    },
    {
      image: seventh,
      highlight: "2x",
      title: "plus d’opportunités",
      review:
        "Intégrer Kombineo est la première chose que je fais quand je veux faire performer un écosystème et garantir mes résultats",
      name: "Ossama Ramhry",
      role: "CEA",
      company: "SalesMindset",
      tag: "Head of Sales",
      bgColor: "bg-gradient-to-r from-[#5DA9B9] via-[#035E71] to-[#035E71]",
      highlightColor: "#ffffff",
      titleColor: "#B9F3FFCC",
      reviewColor: "#ffffff",
      nameColor: "#ffffff",
      roleColor: "#FFFFFF80",
      tagTextColor: "#111111",
      tagBgColor: "#FFFFFF",
      companyColor: "#FFFFFFE5",
      title2: LogoCard7,
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
      <div className="w-full bg-[#F7FEFF] -mt-40 pb-40">
        <div className=" mb-20 text-center">
          <div className="px-4 pt-40 pb-24 mx-auto max-w-7xl lg:px-6">
            <h1 className="mb-6 text-xl font-semibold text-center md:text-3xl lg:text-5xl font-geist">
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
              <div className="overflow-hidden w-full">
                <motion.div
                  className="flex space-x-10 lg:w-[300%] md:w-[600%] sm:w-[500%] w-[600%] ml-14"
                  variants={{}}
                  animate={{ x: ["0%", "-50%"] }}
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
              <div className="overflow-hidden w-full mt-6">
                <motion.div
                  className="flex space-x-10 lg:w-[300%] md:w-[300%] sm:w-[500%] w-[600%] mr-14"
                  variants={{}}
                  animate={{ x: ["-50%", "0%"] }}
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
            <h1 className="mb-2 text-xl font-semibold text-center md:text-3xl lg:text-5xl font-geist">
              <span className="bg-gradient-to-r from-[#000000] via-[#7F7F7F]  via-[#6E6E6E] via-[#000000] via-[#000000] to-[#000000] bg-clip-text text-transparent">
                Conçu
              </span>{" "}
              <span className="text-[#000000]">pour les </span> <br />
              <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                Entrepreneurs Ambitieux
              </span>
            </h1>

            <div className="flex justify-center items-center w-[90%] ">
              <img src={line} alt="" />
            </div>
            <Tabs></Tabs>
          </div>
        </div>
        
        {/* words  */}
        <div className="max-w-4xl mx-auto">
          <div
            className="flex justify-center items-center flex-wrap w-[90%] m-auto"
          >
            {/* LEFT SIDE */}
            <div className="relative w-full sm:w-auto flex-1"

            >
              <h1 className="relative text-2xl sm:text-3xl md:text-3xl lg:text-[40.77px] font-geist font-semibold mb-4 text-start">
                {active === "bonjour" ? (
                  <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
                    Dites adieu à
                  </span>
                ) : (
                  <span className="text-[#6E6E6E]">Dites bonjour à</span>
                )}
                <img
                  src={image}
                  alt="Decorative"
                  className="absolute -top-14 sm:-top-20 md:-top-24 left-20 sm:left-36 md:left-34 w-20 sm:w-30 md:w-36"
                />
              </h1>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1">
              <ul className="font-semibold text-base sm:text-xl md:text-3xl lg:text-[30px] text-start space-y-12 sm:space-y-12">
                {active === "bonjour" ? (
                  <div className="transition-all duration-700 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent space-y-2">
                    <li>Une dispersion des leads</li>
                    <li>Des relances oubliées</li>
                    <li>Des décisions à l’aveugle</li>
                    <li>Des tableaux de bord incomplets</li>
                  </div>
                ) : (
                  <div className="transition-all duration-700 text-[#6E6E6E] space-y-2">
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
          <h1 className="mb-3 text-xl font-semibold text-center md:text-2xl lg:text-3xl font-geist">
            {/* <span className="bg-[linear-gradient(92.36deg,#000000_1.98%,#7F7F7F_37.95%,#000000_62.94%,#6E6E6E_72.43%,#000000_92.41%,#999999_105.9%)] bg-clip-text text-transparent">
                Pourquoi{" "}
                <span className="bg-[linear-gradient(92.36deg,#000000_1.98%,#7F7F7F_37.95%,#000000_62.94%,#6E6E6E_72.43%,#000000_92.41%,#999999_105.9%)] bg-clip-text text-transparent">
                  nos
                </span>{" "}
                clients
              </span>
              <br /> */}
            <span>4 leviers puissants derrière le scale de nos clients</span>
          </h1>
          <p className="text-center text-[#757575]">
            Gagnez en clarté, efficacité et en chiffre d’affaires dès la prise en main
          </p>
          <div
            id="features"
            className="flex items-center justify-center mt-10"
          >
            <button className="bg-[linear-gradient(106.57deg,rgba(228,150,0,0.8)_14.6%,#CA8500_111.87%)] text-white lg:px-8 md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg flex justify-center items-center lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1 shadow-amber-300 cursor-pointer">
              <span className="text-white text-[14px]  hover:text-black">
                Essayez gratuitement
              </span>
              <img src={Enter2} alt="" className="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>
      </div>

      {/* GSAP Pin Feature Section */}
      <div ref={featureSectionRef} className="relative">
        {/* Pin Wrapper - This gets pinned by GSAP */}
        <div
          ref={pinWrapperRef}
          className="w-[95%] bg-gradient-to-b from-[#E0F5FF] to-[#F4F7F8] rounded-2xl shadow-lg border-[2px] border-[#FFFFFF] m-auto font-inter overflow-hidden"
          style={{ height: "100vh", maxHeight: "80vh" }}
        >
          <h3 className="text-[#000000] font-bold ml-10 pt-8 lg:hidden md:block sm:block block">
            Fonctionnalités
          </h3>

          <div className="relative flex flex-col h-full lg:flex-row">
            {/* LEFT SECTION (Tabs) - Absolute positioned within container */}
            <div
              className="absolute left-10 top-10 text-[18px] font-medium hidden lg:block z-20 w-64"
              role="tablist"
              aria-label="Feature navigation"
            >
              <h3 className="text-[#000000] font-bold">Fonctionnalités</h3>
              <ul className="mt-2 text-[16px] space-y-0">
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
                    className={`cursor-pointer transition-all duration-500 ease-in-out text-[17px] font-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#035E71] focus:ring-offset-2 p-2 ${activeIndex === index
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
              // className="flex items-center justify-center flex-1 h-full mx-0 overflow-hidden lg:mx lg:-ml-72 md:-ml-10 sm:-ml-20 ml-8 lg:pt-[89%] md:pt-[101%] sm:pt-[138%] pt-[160%]"
              className="lg:ml-72 md:ml-10 sm:ml-20 ml-8 overflow-hidden mb-10"

              role="tabpanel"
              aria-live="polite"
            >
              <div
                ref={scrollContentRef}
                className="w-full lg:max-w-md md:max-w-lg sm:max-w-lg lg:space-y-5 md:space-y-5 sm:space-y-3 space-y-3" 
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
                      className="flex flex-col justify-center w-full h-full py-4 focus:outline-none"
                      style={{ height: "60vh", minHeight: "60vh" }}
                      tabIndex={-1}
                    >
                      {/* <img src="" alt="" /> */}
                      {/* <img
                        src={feature.img2 || "/placeholder.svg"}
                        alt={`${feature.title} feature illustration`}
                        className="w-full h-auto transition-transform duration-500 hover:scale-105 lg:hidden md:block sm:block block"
                        loading="lazy"
                      /> */}
                      <img
                        src={feature.img || "/placeholder.svg"}
                        alt={`${feature.title} feature illustration`}
                        className="w-8 h-auto transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <h1
                        className="font-bold text-[28px] sm:text-[36px] lg:text-[43px] bg-[linear-gradient(90deg,#035E71_0%,#5DA9B9_28.37%,#035E71_76.92%)] bg-clip-text text-transparent mt-4 transition-all duration-500"
                        id={`feature-title-${index}`}
                      >
                        {feature.title}
                      </h1>
                      <p
                        className="font-semibold pt-0 text-md text-[#333333] transition-all duration-500 "
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
            className="absolute right-0 top-10 hidden lg:block z-20 w-[35%]"
            aria-hidden="true"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                variants={{}}
                src={features[activeIndex]?.img2 || "/placeholder.svg"}
                alt={features[activeIndex]?.title || "Feature image"}
                className="w-full h-auto rounded-xl"
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

      <div className="max-w-4xl mx-auto text-center mt-30">
        <div className="">
          <h1 className="mb-3 text-xl font-semibold text-center md:text-3xl lg:text-4xl font-geist">
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
        className="w-[75%] m-auto flex flex-col lg:flex-row justify-center gap-4 items-center mt-8 mb-4"
        initial={{ opacity: 0, y: 50 }}
        variants={{}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={group}
          alt="group"
          className="lg:w-[47%] md:w-[90%] sm:w-[90%] w-[100%] h-auto"
        />
        <img
          src={bar}
          alt="bar"
          className="lg:w-[47%] md:w-[90%] sm:w-[90%] w-[100%] h-auto"
        />
      </motion.div>
    </>
  );
};

export default Cards;