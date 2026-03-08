import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Phone, Users, UserCheck, MessageSquare, DollarSign, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const roles = [
  { icon: TrendingUp, title: "Sales development representatives" },
  { icon: Target, title: "Lead generation specialists" },
  { icon: Phone, title: "Outbound sales agents" },
  { icon: Users, title: "Inside sales teams" },
  { icon: UserCheck, title: "Account management support" },
];

const reasons = [
  { icon: MessageSquare, text: "Strong communication skills" },
  { icon: Clock, text: "European time zone alignment" },
  { icon: DollarSign, text: "Competitive salaries" },
  { icon: Briefcase, text: "Growing experience supporting international companies" },
];

const HireSalesTeamKosovo = () => {
  useEffect(() => {
    document.title = "Hire Remote Sales Teams in Kosovo | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Build Remote Sales Teams in{" "}
              <span className="gradient-text">Kosovo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              Many companies build outbound sales and lead generation teams in Kosovo to support growth in international markets.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Sales development representatives (SDRs) and inside sales teams based in Kosovo can support companies across Europe and the UK.
            </p>
          </div>
        </section>

        {/* Typical roles */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Typical <span className="gradient-text">roles</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <div
                  key={role.title}
                  className="glass-card-hover p-6 flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{role.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Kosovo */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why companies hire sales teams in <span className="gradient-text">Kosovo</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((item, index) => (
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

        {/* How Elara Helps */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                How <span className="gradient-text">Elara</span> helps
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elara enables companies to hire sales professionals in Kosovo through our Employer of Record model. We handle local employment contracts, payroll and compliance while your team manages performance and sales targets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build your sales team in <span className="gradient-text">Kosovo</span>
              </h2>
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Start Hiring
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
                  <Link to="/hire-customer-support-kosovo" className="text-primary hover:underline">
                    Hire Customer Support Teams in Kosovo →
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

export default HireSalesTeamKosovo;
