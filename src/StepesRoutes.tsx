import { Routes, Route } from "react-router-dom";
import StepesLayout from "./stepes/Layout/StepesLayout"; // 导入 Layout

import StepesHomepage from "./stepes/page/stepes_homepage_wireframe_canvas";
import StepesTechnicalHero from "./stepes/page/stepes_technical_translation_services_hero_wireframe";
import EnterpriseSupportSections from "./stepes/page/enterprise_support_sections_wireframe";
import StepesDemoRequest from "./stepes/page/stepes_demo_request_wireframe.tsx";
import GlobalContentOperationsHero from "./stepes/page/global_content_operations_hero_wireframe";
import IsoCertifiedTranslationServices from "./stepes/page/iso_certified_translation_services_wireframe";
import ProductEngineeringLocalization from "./stepes/page/StepesProductEngineeringWireframe_Final";
import LocalizationResourceCenter from "./stepes/page/Stepes_Resource_Center_Wireframe_Cost_Icon_Polished";
import ProcurementTeams from "./stepes/page/Stepes_Procurement_Teams_Wireframe_Internal_Links_Final";
import AIPoweredTranslationWorkflows from "./stepes/page/Stepes_AIPoweredTranslationWorkflows_Sections_1-12_Internal_Links_Final";
import StepesLegalTeams from "./stepes/page/Stepes_Legal_Teams_Wireframe_Internal_Links_Pass_v8";
import StepesAITranslationInsights from "./stepes/page/AITranslationInsightsWireframe_LinksReviewed";
import ResourcesTranslationQuality from "./stepes/page/Stepes_Translation_Quality_Governance_Hub_Final_Reviewed";
import ResourcesLocalizationGuides from "./stepes/page/Stepes_Localization_Guides_Wireframe_Final_Internal_Links";
import ResourcesTranslationGuides from "./stepes/page/Stepes_Translation_Guides_Hub_Final_Eyebrow_Pass";
import ResourcesGlobalContentStrategy from "./stepes/page/Stepes_Global_Content_Strategy_Hub_Final_Internal_Links_Pass";
import ResourcesTranslationGlossary from "./stepes/page/Stepes_Translation_Glossary_Editorial_Directory";
import StepesAllResourcesGuides from "./stepes/page/Stepes_All_Guides_Hub_Final_Eyebrow_Style_Fixed";
import ResourcesFileFormatSupport from "./stepes/page/Stepes_File_Format_Support_Final_Handoff";
import ResourcesSecurityCompliance from "./stepes/page/Stepes_Security_Compliance_Hub_Final_Refined_v3";

export default function StepesRoutes() {
  return (
    <Routes>
      <Route element={<StepesLayout />}>
        <Route path="/stepes/StepesHomepage" element={<StepesHomepage />} />
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
          path="/stepes/StepesDemoRequest"
          element={<StepesDemoRequest />}
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
        <Route
          path="/stepes/StepesAllResourcesGuides"
          element={<StepesAllResourcesGuides />}
        />
        <Route
          path="/stepes/ResourcesFileFormatSupport"
          element={<ResourcesFileFormatSupport />}
        />
        <Route
          path="/stepes/ResourcesSecurityCompliance"
          element={<ResourcesSecurityCompliance />}
        />
      </Route>
    </Routes>
  );
}
