"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from '../assets/Auto Layout Horizontal.svg'
import { handleButtonNavigation } from "../utils/tracking";
import { Link } from "react-router-dom";
export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "", label: "Fonctionnalités" },
    { href: "/pricing", label: "Prix" },
  ]

  const scrollToFeatures = () => {
    const headingElement = document.getElementById("features");
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full relative">
      <div className="w-[80%] md:w-[90%] lg:w-[60%] rounded-2xl mx-auto shadow-lg fixed top-1 left-0 right-0 z-50 border-[5px] border-[#0000000D]">
        <nav className="w-full bg-white p-2 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-0">
              <Link to={'/'}>
                <img src={logo || "/placeholder.svg"} alt="Logo" className="w-12 h-12 object-contain" />
              </Link>
              <Link to="/">
                <h1 className="text-2xl font-extrabold font-inter bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent cursor-pointer">
                  Kombineo
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 font-inter">
              {navigationLinks.map((link, _index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.label === "Fonctionnalités") {
                      e.preventDefault();
                      scrollToFeatures()
                    }
                  }}
                  className="text-gray-600 hover:text-gray-900 transition-colors bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={{}} // Added empty variants prop to satisfy type requirement
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.div
                  variants={{}}
                  animate={isMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{}}
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-6 h-0.5 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] block mb-1.5"
                  />
                  <motion.span
                    variants={{}}
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-6 h-0.5 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] block mb-1.5"
                  />
                  <motion.span
                    variants={{}}
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-6 h-0.5 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] block"
                  />
                </motion.div>
              </button>
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() => handleButtonNavigation('https://app.kombineo.com/demo', 'Navbar - Demander une démo', 'demo')}
              className="hidden md:block text-white px-6 py-2 rounded-lg font-medium shadow-md transition-colors cursor-pointer"
              style={{
                background: "linear-gradient(to right, #035E71, #5DA9B9, #035E71)",
              }}
              data-button-type="demo"
              data-tracking-label="Navbar - Demander une démo"
            >
              Demander une démo
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={{}}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-2">
                  {navigationLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      onClick={(e) => {
                        if (link.label === "Features") {
                          e.preventDefault();
                          scrollToFeatures();
                        }
                        setIsMenuOpen(false); // always close menu
                      }}

                      variants={{}}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      href={link.href}
                      className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent font-inter"
                    // onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div
                    variants={{}}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: navigationLinks.length * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="px-4 pt-2"
                  >
                    <button 
                      onClick={() => handleButtonNavigation('https://app.kombineo.com/demo', 'Navbar Mobile - Demander une démo', 'demo')}
                      className="w-full text-white bg-[#035E71] hover:bg-[#024A5A] px-6 py-3 rounded-lg font-medium shadow-md transition-colors cursor-pointer"
                      data-button-type="demo"
                      data-tracking-label="Navbar Mobile - Demander une démo"
                    >
                      Demander une démo
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
