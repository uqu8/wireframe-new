import { Routes, Route } from "react-router-dom";
import SesenLayout from "./sesen/Layout/SesenLayout"; // 导入 Layout

import SesenHomepageHero from "./sesen/page/SesenHero";
import SesenmedicalpageHero from "./sesen/page/medical_scientific_translation_hero_wireframe";
import SesenCertifiedHero from "./sesen/page/certified_translation_resource_hero_wireframe";
import SesenRisksHero from "./sesen/page/sesen_ai_assisted_clinical_translation_risks_wireframe";

export default function SesenRoutes() {
  return (
    <Routes>
      <Route element={<SesenLayout />}>
        <Route path="/" element={<SesenHomepageHero />} />
        <Route path="/SesenHero" element={<SesenHomepageHero />} />
        <Route path="/sesen/MedicalHero" element={<SesenmedicalpageHero />} />
        <Route path="/sesen/CertifiedHero" element={<SesenCertifiedHero />} />
        <Route path="/sesen/RisksHero" element={<SesenRisksHero />} />
      </Route>
    </Routes>
  );
}
