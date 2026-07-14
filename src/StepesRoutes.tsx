import { Routes, Route } from "react-router-dom";

import StepesTechnicalHero from "./stepes/stepes_technical_translation_services_hero_wireframe";
import EnterpriseSupportSections from "./stepes/enterprise_support_sections_wireframe";
import GlobalContentOperationsHero from "./stepes/global_content_operations_hero_wireframe";
import IsoCertifiedTranslationServices from "./stepes/iso_certified_translation_services_wireframe";
import ProductEngineeringLocalization from "./stepes/StepesProductEngineeringWireframe_Final";
import LocalizationResourceCenter from "./stepes/Stepes_Resource_Center_Wireframe_Cost_Icon_Polished";
import ProcurementTeams from "./stepes/Stepes_Procurement_Teams_Wireframe_Internal_Links_Final";
import AIPoweredTranslationWorkflows from "./stepes/Stepes_AIPoweredTranslationWorkflows_Sections_1-12_Internal_Links_Final";
import StepesLegalTeams from "./stepes/Stepes_Legal_Teams_Wireframe_Internal_Links_Pass_v8";
import StepesAITranslationInsights from "./stepes/AITranslationInsightsWireframe_LinksReviewed";
import ResourcesTranslationQuality from "./stepes/Stepes_Translation_Quality_Governance_Hub_Final_Reviewed";
import ResourcesLocalizationGuides from "./stepes/Stepes_Localization_Guides_Wireframe_Final_Internal_Links";
import ResourcesTranslationGuides from "./stepes/Stepes_Translation_Guides_Hub_Final_Eyebrow_Pass";
import ResourcesGlobalContentStrategy from "./stepes/Stepes_Global_Content_Strategy_Hub_Final_Internal_Links_Pass";
import ResourcesTranslationGlossary from "./stepes/Stepes_Translation_Glossary_Editorial_Directory";

export default function StepesRoutes() {
  return (
    <Routes>
      <Route path="/stepes/TechnicalHero" element={<StepesTechnicalHero />} />
      <Route
        path="/stepes/GlobalContentOperationsHero"
        element={<GlobalContentOperationsHero />}
      />
      <Route
        path="/stepes/EnterpriseSupportSections"
        element={<EnterpriseSupportSections />}
      />
      <Route
        path="/stepes/IsoCertifiedTranslationServices"
        element={<IsoCertifiedTranslationServices />}
      />
      <Route
        path="/stepes/ProductEngineeringLocalization"
        element={<ProductEngineeringLocalization />}
      />
      <Route
        path="/stepes/LocalizationResourceCenter"
        element={<LocalizationResourceCenter />}
      />
      <Route path="/stepes/ProcurementTeams" element={<ProcurementTeams />} />
      <Route
        path="/stepes/AIPoweredTranslationWorkflows"
        element={<AIPoweredTranslationWorkflows />}
      />
      <Route path="/stepes/StepesLegalTeams" element={<StepesLegalTeams />} />
      <Route
        path="/stepes/StepesAITranslationInsights"
        element={<StepesAITranslationInsights />}
      />
      <Route path="/stepes/StepesLegalTeams" element={<StepesLegalTeams />} />
      <Route
        path="/stepes/ResourcesTranslationQuality"
        element={<ResourcesTranslationQuality />}
      />
      <Route
        path="/stepes/ResourcesLocalizationGuides"
        element={<ResourcesLocalizationGuides />}
      />
      <Route
        path="/stepes/ResourcesTranslationGuides"
        element={<ResourcesTranslationGuides />}
      />
      <Route
        path="/stepes/ResourcesGlobalContentStrategy"
        element={<ResourcesGlobalContentStrategy />}
      />
      <Route
        path="/stepes/ResourcesTranslationGlossary"
        element={<ResourcesTranslationGlossary />}
      />
    </Routes>
  );
}
