import Enter2 from '../assets/Vector2.svg'
import right from '../assets/wave-right.svg'
import left from '../assets/wave-left.svg'
import klogo from '../assets/FooterLogo.svg'
import linkedIn from '../assets/Lin.svg'
import instagram from '../assets/instra.svg'
import whatsapp from '../assets/image 67.svg'
const Footer = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(203.46deg, #5DA9B9 8.86%, #035E71 71.71%)",
      }}
    >
      {/* Hero Section */}
      <div className="   mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="w-[95%]  mx-auto p-6 sm:p-8 lg:p-12 bg-white rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="text-center  space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="font-Geist font-semibold text-gray-800 leading-tight lg:text-[70px] md:text-[50px] sm:text-[35px] text-[35px]">
              {'Vous méritez mieux qu’un'} <br />
              <span
                className="font-bold text-transparent bg-clip-text"
                style={{
                  border: "none",
                  background:
                    "linear-gradient(90deg, #035E71 0%, #5DA9B9 28.37%, #035E71 76.92%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CRM standard
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              Zéro lead perdu, 100% de ventes maîtrisées.
            </p>
            <div className='flex justify-center items-center'>
              <button className="bg-[linear-gradient(106.57deg,rgba(228,150,0,0.8)_14.6%,#CA8500_111.87%)] cursor-pointer text-white lg:px-8 md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg flex justify-center items-center lg:space-x-5 md:space-x-5 sm:space-x-3 space-x-1 shadow-amber-300">
                <span className='text-white text-[14px]  hover:text-black'>Commencez en 1 clic </span>
                <img src={Enter2} alt="" className='w-[15px] h-[15px]' />
              </button>
            </div>



            {/* Connection Diagram */}
            <div className="mt-8 ml-6 sm:mt-10 lg:-mt-16 overflow-hidden ">
              <div className="w-[200px] sm:w-[350px] md:w-[350px] lg:w-[350px]  m-auto relative ">
                <div className="flex flex-col w-[200px] sm:w-[350px] md:w-[350px] lg:w-[350px]     py-30 max-md:py-6 sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-30">
                  {/* Connection Lines - Hidden on mobile, visible on sm+ */}
                  <div className="block max-md:hidden absolute  m-auto -mt-5  w-80   sm:block  inset-0  top-40 ">
                    <div className=" w-[300px] h-[2px] border-t-2 border-teal-700"></div>
                    {/* lead but */}
                  </div>
                  <div className="bg-[#035E71] z-1 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap ">
                    {/* Vos leads entrants */}
                    100% Data capturés
                  </div>
                  {/* exploties but */}
                  <div className="bg-[#035E71] z-1 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap">
                    Leads 100% exploités
                  </div>
                  {/* web left */}
                  <div className="absolute block  -left-110   -top-33 z-0  max-md:hidden">
                    <img
                      src={right}
                      className="w-110"
                      alt="jdfvjeswkfwebgvku"
                    />
                  </div>
                  {/* web right */}
                  <div className="absolute block  -right-110   -top-33 z-0 max-md:hidden">
                    <img
                      src={left}
                      className="w-110 "
                      alt="jdfvjeswkfwebgvku"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center py-6 sm:py-8  relative">
        <div className="  flex items-center justify-center z-1 ml-13">
          {/* <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center ">
            <span className="text-teal-600 font-bold text-sm sm:text-lg">
              K
            </span>
          </div> */}
          <div className="flex flex-col items-center">
            <img
              src={klogo}
              alt=""
              className="max-[640px]:w-30 max-[640px]:mt-3"
            />
            {/* <div className="w-[50%] m-auto h-[2px] bg-white -mt-20"></div> */}
          </div>
        </div>
        {/* <div
          className="absolute top-16 z-0"
          style={{
            borderTop: "2px solid",
            borderImage:
              "linear-gradient(90deg, #035E71 0%, #FFFFFF 51.66%, #2D8193 100%)",
            borderImageSlice: 1,
            width: "90%", // optional: make the border span the container
          }}
        ></div> */}
        <div
          className="absolute top-16 z-0"
          style={{
            borderTop: "2px solid",
            borderImage:
              "linear-gradient(90deg, #035E71 0%, #5DA9B9 50%, #2D8193 100%)",
            borderImageSlice: 1,
            width: "90%",
          }}
        ></div>

      </div>

      {/* Footer Section */}
      <footer className=" text-white py-8 sm:py-12 lg:py-14 font-inter">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 justify-center mx-auto max-w-5xl">
            {/* Commencez Column */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-inter font-semibold text-[18.75px] leading-[30px] tracking-normal text-left align-middle">
                <br />
              </h3>
              <div className="font-inter font-medium text-[14.73px] leading-[28px] align-middle text-[#FFFFFF]  cursor-pointer pt-2">
                <p>1,000+ sociétés utilisent</p>
                <p>Kombineo pour optimiser</p>
                <p>100% de leurs leads</p>
              </div>
            </div>

            {/*  Commencez */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-inter font-semibold text-[18.75px] leading-[30px] tracking-normal text-left align-middle">
                Commencez
              </h3>
              <div className="font-inter font-medium text-[14.13px] leading-[32px] align-middle text-[#C2C2C2]  cursor-pointer">
                <p className="">Obtenir une démo</p>
                <p className="">Commencez gratuitement</p>
                <p className="">Sign in</p>
              </div>
            </div>
            {/* Kombineo CRM Column */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-inter font-semibold text-[18.75px] leading-[30px] tracking-normal text-left align-middle">
                Kombineo CRM
              </h3>
              <div className="font-inter font-medium text-[14.73px] leading-[32px] align-middle text-[#C2C2C2]  cursor-pointer">
                <p>Fonctionnnalités</p>
                <p>Prix</p>
                <p>Témoignages</p>
                <p>FAQ’s</p>
              </div>
            </div>

            {/* Contact Column */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-inter font-semibold text-[18.75px] leading-[30px] tracking-normal text-left align-middle">
                Contact
              </h3>
              <div className="font-inter font-medium text-[14.73px] leading-[32px] align-middle text-[#C2C2C2]  cursor-pointer">
                <p className="">info@kombineo.com</p>
                <p className="">
                  <img src={whatsapp} className="w-4 inline" alt="" />

                  <span className="inline"> +33767906858</span>
                </p>
              </div>
            </div>

            {/* Social Column */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-inter font-semibold text-[18.75px] leading-[30px] tracking-normal text-left align-middle">
                Social
              </h3>
              <div className="space-y-2">
                <div className="flex items-center px-3 gap-2 rounded-[8px] w-[134px] h-[40px] bg-[#042E49] text-sm sm:text-base">
                  <div className="w-6 h-6  rounded flex items-center justify-center">
                    <img src={linkedIn} alt="" />
                  </div>
                  <span className="text-[#C2C2C2] hover:text-white cursor-pointer transition-colors">
                    LinkedIn
                  </span>
                </div>
                <div className="flex items-center px-3 gap-2 rounded-[8px] w-[134px] h-[40px] bg-[#042E49] text-sm sm:text-base">
                  <div className="w-6 h-6 rounded flex items-center justify-center">
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
                        stroke-width="1"
                      />
                      <polygon points="10,10 16,12.5 10,15" fill="#C2C2C2" />
                    </svg>
                  </div>
                  <span className="text-[#C2C2C2] hover:text-white cursor-pointer transition-colors">
                    Youtube
                  </span>
                </div>
                <div className="flex items-center px-3 gap-2 rounded-[8px] w-[134px] h-[40px] bg-[#042E49] text-sm sm:text-base">
                  <div className="w-6 h-6  rounded flex items-center justify-center">
                    <img src={instagram} alt="" />
                  </div>
                  <span className="text-[#C2C2C2] hover:text-white cursor-pointer transition-colors">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 ">
            <div className="m-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white w-[65%]"></div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="font-inter font-medium text-[15.67px] leading-[25.5px] tracking-normal align-middle text-[#C2C2C2]">
                © 2025 Kombineo. All rights reserved.
              </div>
              <div className="bg-[#042E49] px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-2 cursor-pointer">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                All Systems Operational
              </div>
              <div className="flex items-center gap-4 sm:gap-6">


                <div className="flex gap-4 text-xs sm:text-sm text-teal-200">
                  <span className="font-inter font-medium text-[12.67px] leading-[25.5px] tracking-normal align-middle text-[#C2C2C2]">
                    Politique de confidentialité
                  </span>
                  <span className="font-inter font-medium text-[12.67px] leading-[25.5px] tracking-normal align-middle text-[#C2C2C2]">
                    Conditions générales
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Footer
