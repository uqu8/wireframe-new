import React from "react";
import { BrowserRouter } from "react-router-dom";

import SesenRoutes from "./SesenRoutes";
import StepesRoutes from "./StepesRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <SesenRoutes />
      <StepesRoutes />
    </BrowserRouter>
  );
}
