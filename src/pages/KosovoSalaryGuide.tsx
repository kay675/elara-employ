import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeadphonesIcon, TrendingUp, FileText, Settings, Users, GraduationCap, DollarSign, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const salaryRoles = [
  { icon: HeadphonesIcon, title: "Customer support agents", range: "€400 – €800 /month" },
  { icon: TrendingUp, title: "Sales development representatives", range: "€500 – €1,000 /month" },
  { icon: FileText, title: "Administrative assistants", range: "€350 – €650 /month" },
  { icon: Settings, title: "Operations staff", range: "€450 – €900 /month" },
];

const competitiveReasons = [
  { icon: Users, text: "Growing workforce" },
  { icon: DollarSign, text: "Lower cost of living" },
  { icon: GraduationCap, text: "Strong education levels" },
  { icon: Globe, text: "Increasing international business presence" },
];

const KosovoSalaryGuide = () => {
  useEffect(() => {
    document.title = "Kosovo Salary Guide | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Kosovo Salary Guide for{" "}
              <span className="gradient-text">Employers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              Companies hiring remote teams often research salary expectations before entering a new market. Kosovo offers competitive salary levels for many operational and service roles compared to Western Europe.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Typical roles hired by international companies include customer support agents, sales development representatives and operations staff.
            </p>
          </div>
        </section>

        {/* Salary Ranges */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Typical salary <span className="gradient-text">ranges</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {salaryRoles.map((role, index) => (
                <div
                  key={role.title}
                  className="glass-card-hover p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <role.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{role.title}</p>
                  </div>
                  <p className="text-primary font-bold text-lg ml-16">{role.range}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8 max-w-2xl mx-auto text-sm">
              Salaries vary depending on experience, language skills and role requirements. Ranges shown are indicative and based on market observations.
            </p>
          </div>
        </section>

        {/* Why competitive */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why salary levels are <span className="gradient-text">competitive</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {competitiveReasons.map((item, index) => (
                <div
                  key={item.text}
                  className="glass-card-hover p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Learn how to build your team in <span className="gradient-text">Kosovo</span> with Elara
              </h2>
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="section-padding pt-0">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-bold text-lg mb-4">Related Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/employer-of-record-kosovo" className="text-primary hover:underline">
                    Employer of Record in Kosovo →
                  </Link>
                </li>
                <li>
                  <Link to="/kosovo-employment-law" className="text-primary hover:underline">
                    Kosovo Employment Law →
                  </Link>
                </li>
                <li>
                  <Link to="/kosovo-payroll-services" className="text-primary hover:underline">
                    Payroll Services in Kosovo →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default KosovoSalaryGuide;
