import calendar from '../assets/Calendar.svg'
import arrow from '../assets/PricingArrow.svg'
import task from '../assets/Tasks.svg'
import Navbar from './navBar'
import ticket from '../assets/Vector.svg'
// import bgImage from "../assets/bg.svg";
import bgImage from "../assets/NewBg.svg";
// import { useState } from 'react';
import Plans from '../Components/plans'
import { useBillingStore } from "../store";
const Hero = () => {
    const { isMonthly, toggleBilling } = useBillingStore();
//  const [isMonthly, setIsMonthly] = useState(true);
    return (
        <div className='w-full' style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="text-center max-w-4xl mx-auto">
                <Navbar />
                <div className='max-w-7xl mx-auto px-4 lg:px-6 pt-30 pb-6'>

                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full text-sm text-[#035E71] mb-8 border border-[#0A8BA6] bg-[#045F721A] font-inter font-medium">
                        <img
                            src={ticket}
                            alt="icon"
                            className="w-5 h-5 mr-2"
                        />
                        Exclus : Business high ticket
                    </div>


                    {/* Main Headline */}
                    {/* Heading */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-[45px] font-semibold font-inter text-[#111111]">
                            Un CRM <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">Simple</span>
                            , Une Offre{" "}
                            <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"> Claire </span>{" "}
                            Et Des Résultats{" "}
                            <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"> Concrets </span>
                        </h2>

                        <p className='lg:text-[15px] md:text:[15px] sm:text-[15px] text-[14px] mt-5 text-center text-[#4C4C4C] font-medium'>Une tarification flexible et transparente pour soutenir la productivité <br /> et la croissance de votre équipe à chaque étape.</p>

                        <div className='lg:flex md:flex sm:flex block justify-center items-center gap-3 mt-6 '>
                            <div className='flex justify-center space-x-2 items-center'>
                                <img src={calendar} alt="" />
                                <p className='text-[#000000] font-inter text-[12px] font-medium'>{'7 Jours d’essai gratuit'}</p>
                            </div>
                            <div className='flex justify-center space-x-2 items-center'>
                                <img src={task} alt="" />
                                <p className='text-[#000000] font-inter text-[12px] font-medium'>Migration de données gratuites</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 font-bold relative w-full px-4">
                            {/* Monthly Label */}
                            <span
                                className={`${isMonthly
                                    ? "bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"
                                    : "text-gray-600"
                                    } text-sm sm:text-base`}
                            >
                                Abonnement Mensuel
                            </span>

                            {/* Toggle Switch */}
                            <div
                                className="relative w-12 h-6 rounded-full cursor-pointer bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71]"
                                onClick={toggleBilling}
                            >
                                <div
                                    className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-300 absolute top-0.5 ${isMonthly ? "left-1" : "left-6"
                                        }`}
                                ></div>
                            </div>

                            {/* Annual Label */}
                            <span
                                className={`${!isMonthly
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
                                className=" absolute -top-7 right-14  sm:-right-5 w-14 sm:w-20"
                            />

                            {/* Discount Badge */}
                            <button
                                className="absolute text-white px-2 py-0.5 rounded-lg font-normal text-[10px] sm:text-[12px] shadow-md transition-colors cursor-pointer -top-7 right-2 sm:-right-14"
                                style={{
                                    background: "linear-gradient(to right, #035E71, #5DA9B9, #035E71)",
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

    )
}

export default Hero
