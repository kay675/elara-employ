import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Results from "@/components/landing/Results";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Guarantee from "@/components/landing/Guarantee";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { HomeDirectAnswer, HiringInKosovoLinks, HomeQuickFAQ } from "@/components/landing/HomeSeoSections";
import { MetaTags } from "@/components/seo/PageSchema";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        // Clean up URL
        window.history.replaceState({}, "", "/");
      }, 100);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen">
      <MetaTags
        title="Elara EOR – Hire Talent in Kosovo Without Opening a Company"
        description="Elara EOR helps you hire, onboard and manage employees in Kosovo — compliantly and affordably. Specialist Employer of Record for Kosovo."
        canonical="https://elara-eor.com/"
      />
      <Navigation />
      <main>
        <Hero />
        <HomeDirectAnswer />
        <Results />
        <HowItWorks />
        <Benefits />
        <Features />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <HiringInKosovoLinks />
        <HomeQuickFAQ />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
