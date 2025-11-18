"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Auto Layout Horizontal.svg";
import { handleButtonNavigation } from "../utils/tracking";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function ResponsiveNavbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "", label: "Fonctionnalités" },
    { href: "/pricing", label: "Prix" },
  ];

  const scrollToFeatures = () => {
    // If we're not on the home page, navigate to home first then scroll
    if (pathname !== "/") {
      navigate("/", { state: { scrollToFeatures: true } });
    } else {
      // If we're already on home page, just scroll to features
      const el = document.getElementById("features");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="relative w-full">
      <div className="fixed left-0 right-0 top-1 z-50 mx-auto w-[80%] rounded-2xl border-[5px] border-[#0000000D] shadow-lg md:w-[90%] lg:w-[60%]">
        <nav className="w-full rounded-lg bg-white p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-0">
              <Link to={"/"}>
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Logo"
                  className="h-12 w-12 object-contain"
                />
              </Link>
              <Link to="/">
                <h1 className="cursor-pointer bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text font-inter text-2xl font-extrabold text-transparent">
                  Kombineo
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 font-inter md:flex">
              {navigationLinks.map((link, _index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.label === "Fonctionnalités") {
                      e.preventDefault();
                      scrollToFeatures();
                    }
                  }}
                  className="bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-gray-600 text-transparent transition-colors hover:text-gray-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={{}} // Added empty variants prop to satisfy type requirement
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <motion.div
                  variants={{}}
                  animate={isMenuOpen ? "open" : "closed"}
                  className="flex h-6 w-6 flex-col items-center justify-center"
                >
                  <motion.span
                    variants={{}}
                    animate={
                      isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mb-1.5 block h-0.5 w-6 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71]"
                  />
                  <motion.span
                    variants={{}}
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mb-1.5 block h-0.5 w-6 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71]"
                  />
                  <motion.span
                    variants={{}}
                    animate={
                      isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block h-0.5 w-6 bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71]"
                  />
                </motion.div>
              </button>
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() =>
                handleButtonNavigation(
                  "https://calendly.com/tom-kombineo/site-call-demo",
                  "Navbar - Demander une démo",
                  "demo"
                )
              }
              className="relative hidden cursor-pointer rounded-lg px-6 py-2 font-medium text-white shadow-md transition-colors md:block"
              style={{
                background:
                  "linear-gradient(to right, #035E71, #5DA9B9, #035E71)",
              }}
              data-button-type="demo"
              data-tracking-label="Navbar - Demander une démo"
            >
              Demander une démo
              <span className="absolute bottom-[70%] left-[92%] rounded-full bg-amber-500 px-2">
                1
              </span>
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
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-2 pb-2 pt-4">
                  {navigationLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      onClick={(e) => {
                        if (link.label === "Fonctionnalités") {
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
                      className="block rounded-lg bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text px-4 py-3 font-inter text-gray-600 text-transparent transition-colors hover:bg-gray-50 hover:text-gray-900"
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
                      onClick={() =>
                        handleButtonNavigation(
                          "https://calendly.com/tom-kombineo/site-call-demo",
                          "Navbar Mobile - Demander une démo",
                          "demo"
                        )
                      }
                      className="w-full cursor-pointer rounded-lg bg-[#035E71] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#024A5A]"
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
  );
}
