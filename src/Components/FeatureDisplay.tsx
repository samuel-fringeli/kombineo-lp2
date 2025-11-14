import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap as gsapLib } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import app from "../assets/apps_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg";
import sideImage from "../assets/KPI.png";
import CockpitImage from "../assets/Cockpit IA.png";
import settingImage from "../assets/A setting.png";
import AppealsImage from "../assets/closing calls.png";
import FellowImage from "../assets/Follow upp.png";
import CommImage from "../assets/commissions.png";

gsapLib.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Cockpit IA",
    img: app,
    description:
      "Analysez vos appels de vente grâce à l’IA adaptée à votre niche. Le Cockpit centralise vos données clés, suit vos objectifs et vous alerte sur vos follow-up. Décidez plus vite et gardez toujours une vue claire sur votre activité.",
    img2: CockpitImage,
  },
  {
    title: "Setting appel",
    img: app,
    description:
      "Chaque lead est automatiquement intégré dans Kombineo dès son entrée dans votre tunnel, quelle que soit la source. L’automatisation du processus de prise de rendez-vous élimine les pertes et augmente vos taux de conversion.",
    img2: settingImage,
  },
  {
    title: "Appels de closing",
    img: app,
    description:
      "Mettez à jour vos appels en deux clics seulement. Visualisez vos performances instantanément grâce à l’IA et optimisez vos taux de closing avec des insights pertinents.",
    img2: AppealsImage,
  },
  {
    title: "Follow up",
    img: app,
    description:
      "Ne laissez aucun lead passer entre les mailles. Suivez vos prospects tout au long de leur cycle de vente avec rappels automatisés et notifications intégrées.",
    img2: FellowImage,
  },
  {
    title: "KPI",
    img: app,
    description:
      "Pilotez vos ventes en temps réel : CA contracté, taux de closing, sources d’appels, objections récurrentes… Suivez vos indicateurs clés et prenez des décisions éclairées.",
    img2: sideImage,
  },
  {
    title: "Commissions",
    img: app,
    description:
      "Boostez la motivation de vos setters et closers grâce au suivi des commissions en temps réel. Les montants sont calculés automatiquement, vous gagnez du temps et augmentez la performance.",
    img2: CommImage,
  },
];

const FeatureDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // --- Mobile detection ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- Click handler for tabs ---
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (!isMobile && scrollContentRef.current) {
      const featureHeight =
        featureRefs.current[0]?.offsetHeight || window.innerHeight * 0.6;
      const yOffset = -(index * featureHeight);
      gsapLib.to(scrollContentRef.current, {
        y: yOffset,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  // --- ScrollTrigger setup ---
  useEffect(() => {
    if (isMobile) {
      gsapLib.set(scrollContentRef.current, { y: 0 });
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return;
    }

    const featureSection = featureSectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    const scrollContent = scrollContentRef.current;
    if (!featureSection || !pinWrapper || !scrollContent) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const totalFeatures = features.length;
    const featureHeight =
      featureRefs.current[0]?.offsetHeight || window.innerHeight * 0.6;
    const totalScrollDistance = featureHeight * totalFeatures;

    gsapLib.to(scrollContent, {
      y: () => -(totalScrollDistance - featureHeight),
      ease: "none",
      scrollTrigger: {
        id: "featurePin",
        trigger: featureSection,
        start: "top top",
        end: `+=${totalScrollDistance + window.innerHeight / 3}`,
        pin: pinWrapper,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progressIndex = Math.min(
            Math.floor(self.progress * totalFeatures),
            totalFeatures - 1
          );
          if (progressIndex !== activeIndex) {
            setActiveIndex(progressIndex);
          }
        },
      },
    });
  }, [isMobile]);

  return (
    <div id="features" ref={featureSectionRef} className="relative pt-24">
      <div
        ref={pinWrapperRef}
        className="m-auto w-[95%] overflow-hidden rounded-2xl border-[2px] border-white bg-gradient-to-b from-[#E0F5FF] to-[#F4F7F8] font-inter"
      >
        {/* --- Desktop Tabs --- */}
        <div
          className={`absolute left-8 top-10 z-20 lg:w-40 xl:w-64  ${
            isMobile ? "hidden" : "block"
          }`}
        >
          <h3 className="mb-2 font-bold text-black">Fonctionnalités</h3>
          <ul className="space-y-1">
            {features.map((f, i) => (
              <li
                key={i}
                onClick={() => handleTabClick(i)}
                tabIndex={0}
                className={`cursor-pointer rounded-lg p-2 transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#035E71] to-[#5DA9B9] font-extrabold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {f.title}
              </li>
            ))}
          </ul>
        </div>

        {/* --- Scrollable Feature Content --- */}
        <div
          className={`relative z-10 w-full overflow-hidden p-8 lg:h-[80vh] lg:pl-40 xl:ps-44 2xl:h-[80vh]`}
        >
          <div
            ref={scrollContentRef}
            className="h-full w-full lg:max-w-xs xl:max-w-md"
          >
            {features.map((f, i) => (
              <div
                key={i}
                ref={(el) => (featureRefs.current[i] = el)}
                className="flex flex-col justify-start p-8 pt-4 lg:h-[75vh] xl:h-[80vh]"
                style={{
                  scrollbarWidth: "thin",
                  scrollBehavior: "smooth",
                }}
              >
                <img src={f.img} alt="" className="w-8" />
                <h1 className="mt-4 bg-gradient-to-r from-[#035E71] to-[#5DA9B9] bg-clip-text text-[28px] font-bold text-transparent sm:text-[32px] lg:text-[40px]">
                  {f.title}
                </h1>
                <p className="pt-3 text-lg font-medium leading-relaxed text-[#333]">
                  {f.description}
                </p>

                {/* --- Mobile Image --- */}
                <div className="mt-6 w-full lg:hidden">
                  <img
                    src={f.img2}
                    alt={f.title}
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Desktop Image --- */}
        <div className="absolute right-8 top-8 hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={features[activeIndex].img2}
              alt={features[activeIndex].title}
              className="h-[70vh] rounded-xl object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FeatureDisplay;
