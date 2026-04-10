import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Clock, Shield, Users, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

const keyAreas = [
  { icon: FileText, title: "Employment contracts", description: "Written contracts are required under Kosovo law. They must specify role, salary, working hours and notice periods." },
  { icon: Clock, title: "Working hours and leave", description: "The standard working week is 40 hours. Employees are entitled to a minimum of 20 days paid annual leave." },
  { icon: Shield, title: "Social contributions", description: "Employers must contribute to pension and social insurance funds. Rates are set by law and deducted monthly." },
  { icon: Users, title: "Termination and notice", description: "Dismissal procedures must follow legal requirements including notice periods and severance where applicable." },
];

const compliancePoints = [
  "Employment contracts must be in writing and registered",
  "Statutory minimum wage provisions exist under Kosovo labour law.",
  "Employers must provide paid annual leave and public holidays",
  "Social security contributions are mandatory for all employees",
  "Anti-discrimination protections are enshrined in law",
  "Foreign companies can employ staff through an Employer of Record",
];

const KosovoEmploymentLaw = () => {
  useEffect(() => {
    document.title = "Kosovo Employment Law | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Kosovo Employment Law for{" "}
              <span className="gradient-text">Foreign Companies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              Understanding local employment regulations is essential before hiring in Kosovo. This guide covers the key areas of Kosovo labour law that international companies should be aware of when building teams.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Elara ensures full compliance with Kosovo employment law as part of our Employer of Record service, so your company can focus on operations while we handle the legal requirements.
            </p>
            <div className="animate-fade-in-up delay-300">
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Get Compliance Advice
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Key areas */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Key areas of <span className="gradient-text">Kosovo labour law</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {keyAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="glass-card-hover p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{area.title}</p>
                  </div>
                  <p className="text-muted-foreground ml-16">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance checklist */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Compliance <span className="gradient-text">essentials</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {compliancePoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground">{point}</p>
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
                Stay compliant when hiring in <span className="gradient-text">Kosovo</span>
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
                  <Link to="/kosovo-salary-guide" className="text-primary hover:underline">
                    Kosovo Salary Guide →
                  </Link>
                </li>
                <li>
                  <Link to="/employer-of-record-kosovo" className="text-primary hover:underline">
                    Employer of Record in Kosovo →
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

export default KosovoEmploymentLaw;
