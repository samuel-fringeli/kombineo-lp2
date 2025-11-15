import { useState, useEffect, useRef, useCallback } from "react";
import SharedButton from "../shared-components/SharedButton";

const FixedDemoButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const buttonRef = useRef(null);

  // Function to determine if the button should be hidden
  const checkVisibility = useCallback(() => {
    const hero = document.getElementById("hero");
    const footer = document.getElementById("footer");
    const button = buttonRef.current;

    if (!hero || !footer || !button) {
      return;
    }

    // Get the vertical coordinates of the elements
    const heroRect = hero.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const isCoveringByHero =
      heroRect.bottom >= buttonRect.top && heroRect.bottom <= buttonRect.bottom;
    const isFooterOnScreen = footerRect.top < window.innerHeight;

    if (isFooterOnScreen || isCoveringByHero) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    if (
      heroRect.bottom > buttonRect.top ||
      footerRect.top < buttonRect.bottom
    ) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Initial check
    checkVisibility();

    // Attach scroll event listener for visibility updates
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [checkVisibility]);

  return (
    <div
      ref={buttonRef}
      className={`fixed z-9999 -bottom-12 flex w-full justify-center lg:hidden transition-opacity duration-300 backdrop-blur p-4 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <SharedButton
        className="!bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] !shadow-[#035E71]"
        label="Demander une démo"
        href="https://app.kombineo.com/"
      />
    </div>
  );
};

export default FixedDemoButton;
