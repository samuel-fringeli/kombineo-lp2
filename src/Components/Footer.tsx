import { memo, type ReactNode } from "react";
import klogo from "../assets/FooterLogo.svg";
import linkedIn from "../assets/Lin.svg";
import instagram from "../assets/instra.svg";
import whatsapp from "../assets/image 67.svg";
import desktopGif from "/Videos/MOCKUP_ORDI_1.gif";
import mobileGif from "/Videos/MOCKUP_TEL_1.mov (1).gif";
import SharedButton from "../shared-components/SharedButton";

const gradientBg = "linear-gradient(203.46deg, #5DA9B9 8.86%, #035E71 71.71%)";
const gradientText =
  "linear-gradient(90deg, #035E71 0%, #5DA9B9 28.37%, #035E71 76.92%)";
const gradientBorder =
  "linear-gradient(90deg, #035E71 0%, #5DA9B9 50%, #2D8193 100%)";

interface FooterLinkColumn {
  title: string;
  links: (string | ReactNode)[];
}

interface SocialLink {
  icon: string | ReactNode;
  name: string;
}

const footerLinks: FooterLinkColumn[] = [
  {
    title: "",
    links: [
      "1,000+ sociétés utilisent Kombineo pour optimiser 100% de leurs leads",
    ],
  },
  {
    title: "Commencez",
    links: ["Obtenir une démo", "Commencez gratuitement", "Sign in"],
  },
  {
    title: "Kombineo CRM",
    links: ["Fonctionnnalités", "Prix", "Témoignages", "FAQ’s"],
  },
  {
    title: "Contact",
    links: [
      "info@kombineo.com",
      <>
        <img
          key="whatsapp"
          src={whatsapp}
          alt="WhatsApp"
          className="mr-1 inline w-4"
        />
        +33767906858
      </>,
    ],
  },
];

const socialLinks: SocialLink[] = [
  { icon: linkedIn, name: "LinkedIn" },
  {
    name: "YouTube",
    icon: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="4"
          width="19"
          height="17"
          rx="5"
          fill="#C2C2C2"
          opacity="0.2"
        />
        <rect
          x="2"
          y="4"
          width="19"
          height="17"
          rx="5"
          stroke="#C2C2C2"
          strokeWidth="1"
        />
        <polygon points="10,10 16,12.5 10,15" fill="#C2C2C2" />
      </svg>
    ),
  },
  { icon: instagram, name: "Instagram" },
];

const Footer: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ background: gradientBg }}>
      {/* Hero Section */}
      <section className="mx-auto mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-[95%] space-y-8 rounded-2xl bg-white p-6 text-center shadow-xl sm:rounded-3xl sm:p-8 lg:p-12">
          <h1 className="font-Geist text-[35px] font-semibold leading-tight text-gray-800 sm:text-[45px] lg:text-[70px]">
            Vous méritez mieux qu’un <br />
            <span
              className="bg-clip-text font-bold text-transparent"
              style={{
                background: gradientText,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CRM standard
            </span>
          </h1>

          <p className="mx-auto max-w-lg text-base text-gray-600 sm:text-lg lg:text-xl">
            Zéro lead perdu, 100% de ventes maîtrisées.
          </p>

          <div className="flex justify-center">
            <SharedButton label="Commencez en 1 clic" gradientDirection="ltr" />
          </div>

          {/* Responsive GIFs */}
          <div className="relative -mt-12 w-full overflow-hidden rounded-2xl">
            <img
              src={desktopGif}
              alt="Desktop preview"
              className="hidden h-[80vh] w-full object-cover md:block"
            />
            <img
              src={mobileGif}
              alt="Mobile preview"
              className="block h-[50vh] w-full object-cover md:hidden"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative flex justify-center py-8">
        <img src={klogo} alt="Kombineo Logo" className="z-10 max-sm:mt-3" />
        <div
          className="absolute top-16 z-0"
          style={{
            borderTop: "2px solid",
            borderImage: gradientBorder,
            borderImageSlice: 1,
            width: "90%",
          }}
        ></div>
      </div>

      {/* Footer Section */}
      <footer className="pb-8 pt-4 font-inter text-white">
        <div className="lg:px-18 container mx-auto px-12 sm:px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {footerLinks.map(({ title, links }, idx) => (
              <div
                key={idx}
                className={`space-y-3 ${!title && "lg:pt-10 max-w-44"}`}
              >
                {title && (
                  <h3 className="text-[18.75px] font-semibold leading-[30px]">
                    {title}
                  </h3>
                )}
                <div
                  className={`cursor-pointer space-y-1 text-[14px] text-[#C2C2C2] ${
                    !title && "text-white font-semibold"
                  }`}
                >
                  {links.map((link, i) => (
                    <p key={i} className="transition-colors hover:text-white">
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Column */}
            <div className="space-y-3 pb-8">
              <h3 className="text-[18.75px] font-semibold leading-[30px]">
                Social
              </h3>
              <div className="space-y-2">
                {socialLinks.map(({ icon, name }, i) => (
                  <div
                    key={i}
                    className="flex h-[40px] w-[134px] cursor-pointer items-center gap-2 rounded-[8px] bg-[#042E49] px-3 text-sm transition-colors hover:bg-[#064b6b]"
                  >
                    <div className="flex h-6 w-6 items-center justify-center">
                      {typeof icon === "string" ? (
                        <img src={icon} alt={name} />
                      ) : (
                        icon
                      )}
                    </div>
                    <span className="text-[#C2C2C2] hover:text-white">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white pt-8 sm:flex-row">
            <p className="text-[15px] text-[#C2C2C2]">
              © 2025 Kombineo. All rights reserved.
            </p>

            <div className="flex items-center gap-2 rounded-full bg-[#042E49] px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              All Systems Operational
            </div>

            <div className="flex gap-4 text-[12px] text-[#C2C2C2]">
              <span className="cursor-pointer hover:text-white">
                Politique de confidentialité
              </span>
              <span className="cursor-pointer hover:text-white">
                Conditions générales
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);
