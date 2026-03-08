import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
