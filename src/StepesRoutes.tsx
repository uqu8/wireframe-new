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
import ResourcesResearchReports from "./stepes/page/Stepes_Research_Reports_Wireframe_Final_Polished";
import ResourcesWebinars from "./stepes/page/Stepes_Webinars_Hub_Wireframe_Final_Polished";
import StepesNewsPress from "./stepes/page/Stepes_News_Press_Hub_Wireframe_Customer_Facing_Refined";
import APIDocumentation from "./stepes/page/Stepes_API_Documentation_Hub_Final_Polish_v13";
import TranslationWorkflowAutomation from "./stepes/page/Stepes_Translation_Workflow_Automation_Wireframe_Final_Polished";
import TranslationQualityAssurance from "./stepes/page/Stepes_Translation_Quality_Assurance_Wireframe_Polished_Line_Fix";
import WebsiteTranslationServices from "./stepes/page/Stepes_Website_Translation_Services_Wireframe_Complete_Readability_Pass";
import WebsiteTranslationProxy from "./stepes/page/Stepes_Website_Translation_Proxy_Wireframe_Complete_Final_Polish";
import MultilingualSEOGuide from "./stepes/page/Stepes_Multilingual_SEO_Guide_Wireframe_Final";
import WebsiteLocalizationTestingChecklist from "./stepes/page/Stepes_Website_Localization_Testing_Checklist_Wireframe_v1.6";
import ContinuousWebsiteLocalization from "./stepes/page/Stepes_Continuous_Website_Localization_Guide_Wireframe_v1.2";
import AIWebsiteHumanReview from "./stepes/page/AI_Website_Translation_With_Human_Review_Wireframe";
import WebsiteTranslationVSLocalization from "./stepes/page/Stepes_Website_Translation_vs_Localization_Wireframe_v4";
import ResourcesWebsiteTranslationWorkflows from "./stepes/page/Stepes_Website_Translation_Workflows_Guide_Wireframe_v2";
import MachineTranslationPostEditing from "./stepes/page/Stepes_Machine_Translation_Post_Editing_Complete_19_Section_Wireframe_v4";
import ResourcesHowToTranslateAWebsite from "./stepes/page/How_to_Translate_a_Website_Guide_Wireframe_Final_QA";

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
        <Route
          path="/stepes/ResourcesResearchReports"
          element={<ResourcesResearchReports />}
        />
        <Route
          path="/stepes/ResourcesWebinars"
          element={<ResourcesWebinars />}
        />
        <Route path="/stepes/StepesNewsPress" element={<StepesNewsPress />} />
        <Route path="/stepes/APIDocumentation" element={<APIDocumentation />} />
        <Route
          path="/stepes/TranslationWorkflowAutomation"
          element={<TranslationWorkflowAutomation />}
        />
        <Route
          path="/stepes/TranslationQualityAssurance"
          element={<TranslationQualityAssurance />}
        />
        <Route
          path="/stepes/WebsiteTranslationServices"
          element={<WebsiteTranslationServices />}
        />
        <Route
          path="/stepes/WebsiteTranslationProxy"
          element={<WebsiteTranslationProxy />}
        />
        <Route
          path="/stepes/MultilingualSEOGuide"
          element={<MultilingualSEOGuide />}
        />
        <Route
          path="/stepes/WebsiteLocalizationTestingChecklist"
          element={<WebsiteLocalizationTestingChecklist />}
        />
        <Route
          path="/stepes/ContinuousWebsiteLocalization"
          element={<ContinuousWebsiteLocalization />}
        />
        <Route
          path="/stepes/AIWebsiteHumanReview"
          element={<AIWebsiteHumanReview />}
        />
        <Route
          path="/stepes/WebsiteTranslationVSLocalization"
          element={<WebsiteTranslationVSLocalization />}
        />
        <Route
          path="/stepes/ResourcesWebsiteTranslationWorkflows"
          element={<ResourcesWebsiteTranslationWorkflows />}
        />
        <Route
          path="/stepes/MachineTranslationPostEditing"
          element={<MachineTranslationPostEditing />}
        />
        <Route
          path="/stepes/ResourcesHowToTranslateAWebsite"
          element={<ResourcesHowToTranslateAWebsite />}
        />
      </Route>
    </Routes>
  );
}
