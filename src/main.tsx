// import React from 'react'
import "./index.css";
import { initGTM } from "./utils/tracking";
import LinkTracker from "./Components/LinkTracker";

// Initialize GTM on app load
initGTM();

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Route/index";
import FixedDemoButton from "./Components/FixedDemoButton";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LinkTracker />
    <RouterProvider router={router} />
    <FixedDemoButton />
  </React.StrictMode>
);
