import { Routes, Route } from "react-router-dom";

import SesenHomepageHero from "./sesen/SesenHero";
import SesenmedicalpageHero from "./sesen/medical_scientific_translation_hero_wireframe";
import SesenCertifiedHero from "./sesen/certified_translation_resource_hero_wireframe";
import SesenRisksHero from "./sesen/sesen_ai_assisted_clinical_translation_risks_wireframe";

export default function SesenRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SesenHomepageHero />} />
      <Route path="/SesenHero" element={<SesenHomepageHero />} />
      <Route path="/sesen/MedicalHero" element={<SesenmedicalpageHero />} />
      <Route path="/sesen/CertifiedHero" element={<SesenCertifiedHero />} />
      <Route path="/sesen/RisksHero" element={<SesenRisksHero />} />
    </Routes>
  );
}
