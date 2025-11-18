import React from "react";
import { handleButtonNavigation } from "../utils/tracking";
import { useBillingStore } from "../store";

const featuresScale: string[] = [
  "Contacts illimités",
  "Appels illimités",
  "Mises à jour des appels en temps réel",
  "Connexion directe à ta Landing Page",
  "Module de Setting intégré",
  "Tableau de bord KPI en temps réel",
  "Intégrations Make & Zapier",
  "Intégrations Zoom & Google Meet",
  "Gestion des rôles : Super Admin / Closer / Setter",
];

const featuresPower: string[] = [
  "Tout de SCALE, plus :",
  "Commissions RH en temps réel",
  "Prévisions de revenus automatiques",
  "Tableaux KPI avancés Setting & Closing",
  "Envoi d’e-mails personnalisés illimités",
  "Tags personnalisés",
  "Paiement tracking",
  "Automatisations avancées",
  "Analyses marketing (add-on)",
  "Assistance 7j/7 par chat",
  "Rôles supplémentaires : Manager Setter / Closer & Comptable",
];

// const EnterpriseBadge: React.FC = () => (
//     <div className="flex items-center gap-2 text-sm text-slate-600">
//         <div className="relative h-9 w-9">
//             <img
//                 src={ProfileImage}
//                 alt="Profile"
//                 className="h-full w-full rounded-full object-cover shadow-sm"
//             />
//         </div>
//         <div className="leading-tight">
//             <div className="font-medium text-[#035E71]">Henri Darnet</div>
//             <div className="text-xs text-[#247A8C80]">CEO à <span className="text-[#035E71]">Mindeo</span> </div>
//         </div>
//     </div>
// );

const Check: React.FC = () => (
  <svg
    aria-hidden={true}
    className="h-4 w-4 flex-none"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.44.007L3.3 9.733a1 1 0 1 1 1.406-1.422l3.01 2.977 6.537-6.604a1 1 0 0 1 1.45.006Z"
      clipRule="evenodd"
    />
  </svg>
);

const Background: React.FC = () => (
  <div aria-hidden={true} className="absolute inset-0 -z-10">
    {/* soft gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-white" />
    {/* subtle grid */}
    <svg className="absolute inset-0 h-full w-full opacity-[0.35]">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(219 234 254)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm ${className}`}
  >
    {children}
  </div>
);

// interface PriceProps {
//     amount: number;
//     per?: string;
//     after?: string;
// }
// const Price: React.FC<PriceProps> = ({ amount, per = "per month", after = "facturé annuellement" }) => (
//     <div className="mt-2">
//         <div className="flex items-end gap-1">
//             <span className="text-4xl font-semibold tracking-tight text-[€#111111]">€{amount}</span>
//             <div className="text-start">
//                 <span className="mb-1 text-sm text-[#4C4C4C]">{per}</span>
//                 <div className="text-xs text-[#4C4C4C]">{after}</div>
//             </div>

//         </div>
//     </div>
// );

interface FeatureProps {
  children: React.ReactNode;
}
const Feature: React.FC<FeatureProps> = ({ children }) => (
  <li className="flex items-start gap-1.5">
    <span className="mt-1 text-emerald-500">
      <Check />
    </span>
    <span className="text-start text-sm text-slate-700">{children}</span>
  </li>
);

const PricingSection: React.FC = () => {
  const { isMonthly } = useBillingStore();
  return (
    <section className="relative">
      <Background />

      <div className="mx-auto max-w-5xl px-0 sm:px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {/* SCALE */}
          <Card className="flex flex-col p-6 sm:p-5">
            <div className="text-start text-sm font-semibold tracking-wide text-[#1E1E1E]">
              SCALE
            </div>
            <p className="text-start text-sm text-[#4C4C4C]">
              Parfait pour les petites équipes et les startups.
            </p>
            {isMonthly ? (
              <>
                <div className="mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[€#111111]">
                      €39
                    </span>
                    <span className="-pt-10 text-sm text-[#4C4C4C]">
                      par mois
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[€#111111]">
                      €29
                    </span>
                    <span className="-pt-10 text-sm text-[#4C4C4C]">
                      facturé annuellement
                    </span>
                  </div>
                </div>
              </>
            )}
            <button
              onClick={() =>
                handleButtonNavigation(
                  "https://app.kombineo.com/onboarding?plan=scale",
                  "Pricing - Get Started (Scale)",
                  "cta"
                )
              }
              className="mt-8 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white shadow hover:text-black focus:outline-none focus:ring-2 focus:ring-slate-400/40"
              style={{
                background:
                  "linear-gradient(90deg, #035E71 0%, #5DA9B9 28.37%, #035E71 76.92%)",
              }}
              data-button-type="cta"
              data-tracking-label="Pricing - Get Started (Scale)"
            >
              Démarrer un essai gratuit de 7 jours
            </button>
            <ul className="mt-6 space-y-3">
              {featuresScale.map((f) => (
                <Feature key={f}>{f}</Feature>
              ))}
            </ul>
          </Card>
          {/* POWER - highlighted */}
          <Card className="relative flex flex-col p-6 shadow-lg ring-2 ring-[#E49600] sm:p-5">
            <div className="absolute -right-4 -top-4 -translate-x-1/2">
              <div
                style={{
                  background: "radial-gradient(circle, #FFCF72, #E49600)",
                }}
                className="rounded-full px-3 py-1 text-[12px] font-normal tracking-wide text-white shadow"
              >
                LE PLUS POPULAIRE
              </div>
            </div>

            <div className="text-start text-sm font-semibold tracking-wide text-[#000000]">
              Power
            </div>
            <p className="mt-1 text-start text-sm text-[#000000]">
              Idéal pour les équipes et les projets en pleine croissance.
            </p>
            {isMonthly ? (
              <>
                <div className="mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[€#111111]">
                      €69
                    </span>
                    <span className="-pt-10 text-sm text-[#4C4C4C]">
                      par mois
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-2">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[€#111111]">
                      €49
                    </span>
                    <span className="-pt-10 text-sm text-[#4C4C4C]">
                      facturé annuellement
                    </span>
                  </div>
                </div>
              </>
            )}

            <button
              onClick={() =>
                handleButtonNavigation(
                  "https://app.kombineo.com/onboarding",
                  "Pricing - Start 7-day free trial (Power)",
                  "trial"
                )
              }
              style={{
                background: "radial-gradient(circle, #FFCF72, #E49600)",
              }}
              className="mt-8 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              data-button-type="trial"
              data-tracking-label="Pricing - Start 7-day free trial (Power)"
            >
              Démarrer un essai gratuit de 7 jours
            </button>

            <ul className="mt-6 space-y-3">
              {featuresPower.map((f) => (
                <Feature key={f}>{f}</Feature>
              ))}
            </ul>
          </Card>

          {/* ENTERPRISE */}
          <Card className="flex flex-col p-6 sm:p-5">
            <div className="text-start text-sm font-semibold tracking-wide text-[#1E1E1E]">
              Entreprise
            </div>
            <p className="mt-1 text-start text-sm text-[#4C4C4C]">
              Conçu pour répondre aux besoins des grandes organisations.
            </p>

            <button
              onClick={() =>
                handleButtonNavigation(
                  "https://calendly.com/tom-kombineo/site-call-demo",
                  "Pricing - Booker une démo (Enterprise)",
                  "demo"
                )
              }
              style={{
                background:
                  "linear-gradient(90deg, #035E71 0%, #5DA9B9 28.37%, #035E71 76.92%)",
              }}
              className="mt-12 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-sky-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-sky-400/60"
              data-button-type="demo"
              data-tracking-label="Pricing - Booker une démo (Enterprise)"
            >
              Booker une démo
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
