import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeadphonesIcon, TrendingUp, Briefcase, Users, Calculator, Megaphone, Code, FolderOpen, CheckCircle, Building, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

const departments = [
  { icon: HeadphonesIcon, title: "Customer support" },
  { icon: TrendingUp, title: "Sales and business development" },
  { icon: Briefcase, title: "Administration" },
  { icon: Users, title: "Operations" },
  { icon: Calculator, title: "Finance and accounting" },
  { icon: Megaphone, title: "Marketing" },
  { icon: Code, title: "Software engineering" },
  { icon: FolderOpen, title: "Back-office functions" },
];

const benefits = [
  { icon: Building, text: "No need to open a local entity" },
  { icon: Shield, text: "Full compliance with Kosovo labour law" },
  { icon: Zap, text: "Hire in days, not months" },
  { icon: CheckCircle, text: "Payroll, contracts and HR handled for you" },
];

const BuildTeamsInKosovo = () => {
  useEffect(() => {
    document.title = "Build Teams in Kosovo | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Build Teams in{" "}
              <span className="gradient-text">Kosovo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              International companies are building full departments in Kosovo to support global operations. From customer support and sales to engineering and finance, Kosovo offers a skilled, English-speaking workforce at competitive rates.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Elara's Employer of Record service lets you scale your team in Kosovo without the complexity of setting up a local company.
            </p>
          </div>
        </section>

        {/* Departments */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Departments you can <span className="gradient-text">build</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Companies use Elara to build teams across every function.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={dept.title}
                  className="glass-card-hover p-6 flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <dept.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{dept.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why build with <span className="gradient-text">Elara</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, index) => (
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

        {/* How it works */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                How it <span className="gradient-text">works</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                You identify the roles you need. Elara hires each employee locally under a compliant employment contract. We manage payroll, tax filings, benefits and HR administration. Your team works for you day-to-day — we handle everything else.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to build your team in <span className="gradient-text">Kosovo</span>?
              </h2>
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Hiring Call
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
                  <Link to="/hire-employees-kosovo" className="text-primary hover:underline">
                    Hire Employees in Kosovo →
                  </Link>
                </li>
                <li>
                  <Link to="/kosovo-salary-guide" className="text-primary hover:underline">
                    Kosovo Salary Guide →
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

export default BuildTeamsInKosovo;
