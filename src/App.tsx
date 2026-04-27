import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Insights from "./pages/Insights";
import InsightHireWithoutEntity from "./pages/insights/HireWithoutEntity";
import InsightEorHowItWorks from "./pages/insights/EorHowItWorks";
import InsightKosovoPayrollGuide from "./pages/insights/KosovoPayrollGuide";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SalesDeck from "./pages/SalesDeck";
import Candidates from "./pages/Candidates";
import EmployerOfRecordKosovo from "./pages/EmployerOfRecordKosovo";
import HireCustomerSupportKosovo from "./pages/HireCustomerSupportKosovo";
import HireSalesTeamKosovo from "./pages/HireSalesTeamKosovo";
import KosovoSalaryGuide from "./pages/KosovoSalaryGuide";
import HireEmployeesKosovo from "./pages/HireEmployeesKosovo";
import BuildTeamsInKosovo from "./pages/BuildTeamsInKosovo";
import BannerGenerator from "./pages/BannerGenerator";
import KosovoPayrollServices from "./pages/KosovoPayrollServices";
import KosovoEmploymentLaw from "./pages/KosovoEmploymentLaw";
import SalaryCalculator from "./pages/SalaryCalculator";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sales-deck" element={<SalesDeck />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/employer-of-record-kosovo" element={<EmployerOfRecordKosovo />} />
          <Route path="/hire-customer-support-kosovo" element={<HireCustomerSupportKosovo />} />
          <Route path="/hire-sales-teams-kosovo" element={<HireSalesTeamKosovo />} />
          <Route path="/kosovo-salary-guide" element={<KosovoSalaryGuide />} />
          <Route path="/hire-employees-kosovo" element={<HireEmployeesKosovo />} />
          <Route path="/build-teams-in-kosovo" element={<BuildTeamsInKosovo />} />
          <Route path="/kosovo-payroll-services" element={<KosovoPayrollServices />} />
          <Route path="/kosovo-employment-law" element={<KosovoEmploymentLaw />} />
          <Route path="/savings-calculator" element={<SalaryCalculator />} />
          <Route path="/salary-calculator" element={<Navigate to="/savings-calculator" replace />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/banner-generator" element={<BannerGenerator />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/hire-employees-kosovo-without-entity" element={<InsightHireWithoutEntity />} />
          <Route path="/insights/employer-of-record-kosovo-how-it-works" element={<InsightEorHowItWorks />} />
          <Route path="/insights/kosovo-payroll-guide-uk-eu-companies" element={<InsightKosovoPayrollGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
