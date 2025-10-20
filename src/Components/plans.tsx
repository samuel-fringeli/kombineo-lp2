import React from "react";
import { useBillingStore } from "../store";

const featuresScale: string[] = [
    "Gestion des tâches",
    "Résumé de l'IA",
    "Suivi des progrès",
    "Étiquettes intelligentes",
];

const featuresPower: string[] = [
    "Tout en Basic",
    "Collaboration en équipe",
    "Actions groupées",
    "Traduction de requête",
    "Tableaux de bord personnalisables",
    "Assistance prioritaire",
];

// const EnterpriseBadge: React.FC = () => (
//     <div className="flex items-center gap-2 text-sm text-slate-600">
//         <div className="relative w-9 h-9">
//             <img
//                 src={ProfileImage}
//                 alt="Profile"
//                 className="w-full h-full rounded-full object-cover shadow-sm "
//             />
//         </div>
//         <div className="leading-tight">
//             <div className="font-medium text-[#035E71]">Henri Darnet</div>
//             <div className="text-xs text-[#247A8C80]">CEO à <span className="text-[#035E71]">Mindeo</span> </div>
//         </div>
//     </div>
// );

const Check: React.FC = () => (
    <svg aria-hidden={true} className="w-4 h-4 flex-none" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.44.007L3.3 9.733a1 1 0 1 1 1.406-1.422l3.01 2.977 6.537-6.604a1 1 0 0 1 1.45.006Z" clipRule="evenodd" />
    </svg>
);

const Background: React.FC = () => (
    <div aria-hidden={true} className="absolute inset-0 -z-10">
        {/* soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-white" />
        {/* subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.35]">
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
    <div className={`rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm ${className}`}>{children}</div>
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
//                 <span className="mb-1 text-[#4C4C4C] text-sm">{per}</span>
//                 <div className="text-[#4C4C4C] text-xs">{after}</div>
//             </div>

//         </div>
//     </div>
// );

interface FeatureProps {
    children: React.ReactNode;
}
const Feature: React.FC<FeatureProps> = ({ children }) => (
    <li className="flex items-start gap-1.5">
        <span className="mt-1 text-emerald-500"><Check /></span>
        <span className="text-sm text-slate-700 text-start">{children}</span>
    </li>
);

const PricingSection: React.FC = () => {
    const { isMonthly } = useBillingStore();
    return (
        <section className="relative py-12 sm:py-16">
            <Background />

            <div className="mx-auto max-w-5xl px-0 sm:px-6">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {/* SCALE */}
                    <Card className="p-6 sm:p-5 flex flex-col">
                        <div className="text-sm font-semibold tracking-wide text-[#1E1E1E] text-start">ÉCHELLE</div>
                        <p className="text-sm text-[#4C4C4C] text-start">Parfait pour les petites équipes et les startups.</p>
                          {isMonthly ? <>
                            <div className="mt-2">
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-semibold tracking-tight text-[€#111111] ">€39</span>
                                    <span className=" text-[#4C4C4C] text-sm -pt-10">par mois</span>
                                </div>
                            </div>
                        </> : <>
                             <div className="mt-2">
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-semibold tracking-tight text-[€#111111] ">€29</span>
                                    <span className=" text-[#4C4C4C] text-sm -pt-10">facturé annuellement</span>
                                </div>
                            </div>
                        </>}
                        <button
                            className="mt-8 inline-flex justify-center rounded-lg text-white px-4 py-2.5 text-sm font-medium shadow focus:outline-none focus:ring-2 focus:ring-slate-400/40 hover:text-black"
                            style={{
                                background: "linear-gradient(90deg, #035E71 0%, #5DA9B9 28.37%, #035E71 76.92%)",
                            }}
                        >
                            Get Started
                        </button>
                        <ul className="mt-6 space-y-3">
                            {featuresScale.map((f) => (
                                <Feature key={f}>{f}</Feature>
                            ))}
                        </ul>
                    </Card>
                    {/* POWER - highlighted */}
                    <Card className="relative p-6 sm:p-5 flex flex-col ring-2 ring-[#E49600] shadow-lg">
                        <div className="absolute -top-4 -right-4 -translate-x-1/2 ">
                            <div style={{ background: "radial-gradient(circle, #FFCF72, #E49600)", }} className="px-3 py-1 rounded-full  text-white text-[12px] font-normal tracking-wide shadow">
                                LE PLUS POPULAIRE
                            </div>
                        </div>

                        <div className="text-sm font-semibold tracking-wide text-[#000000] text-start">POUVOIR</div>
                        <p className="mt-1 text-sm text-start text-[#000000]">Idéal pour les équipes et les projets en pleine croissance.</p>
                        {isMonthly ? <>
                            <div className="mt-2">
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-semibold tracking-tight text-[€#111111] ">€69</span>
                                    <span className=" text-[#4C4C4C] text-sm -pt-10">par mois</span>
                                </div>
                            </div>
                        </> : <>
                             <div className="mt-2">
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-semibold tracking-tight text-[€#111111] ">€49</span>
                                    <span className=" text-[#4C4C4C] text-sm -pt-10">facturé annuellement</span>
                                </div>
                            </div>
                        </>}

                        <button style={{ background: "radial-gradient(circle, #FFCF72, #E49600)", }} className="mt-8 inline-flex justify-center rounded-lg text-white px-4 py-2.5 text-sm font-semibold shadow hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-400/50">
                            Start 7-day free trial
                        </button>

                        <ul className="mt-6 space-y-3">
                            {featuresPower.map((f) => (
                                <Feature key={f}>{f}</Feature>
                            ))}
                        </ul>


                    </Card>

                    {/* ENTERPRISE */}
                    <Card className="p-6 sm:p-5 flex flex-col">
                        <div className="text-sm font-semibold tracking-wide text-[#1E1E1E] text-start">Entreprise</div>
                        <p className="mt-1 text-sm text-[#4C4C4C] text-start">Conçu pour répondre aux besoins des grandes organisations.</p>
                        {/* <Price amount={129} /> */}

                        {/* <div className="mt-10 text-start">
                            <h3 className="text-[#035E71]">XXeuros de générés </h3>
                            <p className="text-[12px] italic text-[#000000]">“Un plaisir de travailler avec Tom et des résultats exceptionnels pour une premiere collaboration.”</p>
                        </div>

                        <div className="mt-6">
                            <EnterpriseBadge />
                        </div> */}

                        <button style={{
                            background: "linear-gradient(90deg, #035E71 0%, #5DA9B9 28.37%, #035E71 76.92%)",
                        }} className="md:mt-72 mt-28 inline-flex justify-center rounded-lg  text-white px-4 py-2.5 text-sm hover:text-black font-medium shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400/60">
                            Booker une démo
                        </button>
                    </Card>
                </div>

                {/* Fine print */}
                {/* <p className="mt-6 text-center text-xs text-slate-500">
                    Les prix indiqués sont par membre / par mois, taxes en sus.
                </p> */}
            </div>
        </section>
    );
};

export default PricingSection;
