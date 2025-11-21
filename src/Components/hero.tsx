import ticket from '../assets/Vector.svg'
import path from '../assets/path27.svg'
import Enter2 from '../assets/Vector2.svg'
import Green from '../assets/Button-tiny.svg'
import image from '../assets/G2.png'
import star from '../assets/Star.svg'
import Navbar from './navBar'
import bgImage from "../assets/NewBg.svg";
import { handleButtonNavigation } from '../utils/tracking';
const Hero = () => {
  return (
    <div className='w-full' style={{
      backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.2)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="text-center max-w-4xl mx-auto">
        <Navbar />
        <div className='max-w-7xl mx-auto px-4 lg:px-6 pt-28 pb-6'>

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

          <h1 className="relative text-4xl font-inter md:text-6xl lg:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-[#000000] via-[#7F7F7F] via-[#000000] via-[#000000] via-[#7F7F7F] to-[#000000] bg-clip-text text-transparent">
            Parce que chaque
            <br />
            <span>lead</span> <span></span>
            <span className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
              compte
            </span>
            <div>
              <img src={path} alt="" className='absolute top-[98%] right-[18%]' />
            </div>
          </h1>



          {/* Subheading */}
          <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            {/* Chaque prospect suivi, chaque KPI en direct : Kombineo centralise tout dans un CRM pensé pour les business high-ticket. */}
            Le seul CRM qui transforme tous vos leads en opportunité d’affaires : Kombineo centralise tout dans un CRM pensé pour les business high-ticket.
          </p>

          {/* CTA Button */}
          <div className='flex justify-center items-center'>
            <button
              onClick={() => handleButtonNavigation(
                "https://calendly.com/tom-kombineo/site-call-demo",
                "Hero - Essayez gratuitement",
                "trial"
              )}
              style={{
                background:
                  "radial-gradient(80% 120% at 50% 100%, rgba(228, 165, 32, 0.65) 0%, rgba(200, 132, 0, 0.9) 100%)",
              }}
              className="text-white lg:px-8 cursor-pointer md:px-8 sm:px-5 px-1 py-3 font-semibold mb-12 shadow-md rounded-lg flex justify-center items-center lg:space-x-3 md:space-x-2 sm:space-x-2 space-x-1 shadow-amber-200"
            >
              <span className="text-white text-[14px] hover:text-black transition-colors duration-300">
                Essayez gratuitement
              </span>
              <img src={Enter2} alt="" className="w-[15px] h-[15px]" />
            </button>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-between space-x-2 items-center'>
              <img src={Green} alt="" />
              <p className='text-[#5E5E5E] font-inter text-[12px] font-[700]'>Setup en 10 minutes</p>
            </div>
            <div className='flex justify-between space-x-2 items-center'>
              <img src={Green} alt="" />
              <p className='text-[#5E5E5E] font-inter text-[12px] font-[700]'>Support & migration en 1 clic</p>
            </div>
          </div>

          <div className='flex justify-center items-center mt-6 space-x-2'>
            <img src={image} className='w-14 h-7' alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            {/* <img src={star} alt="" /> */}
          </div>

          <video 
            className='w-full h-[500px] mt-7 rounded-xl object-cover bg-gray-200'
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/Videos/TOM_VSL_V5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </div>

  )
}

export default Hero
