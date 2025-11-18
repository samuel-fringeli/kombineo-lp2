// src/routes/index.js
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import PricingPage from "../Pricing";
import TermsPage from "../TermsPage";
import PrivacyPage from "../PrivacyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
]);

export default router;