import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeadphonesIcon, Wrench, Globe, HelpCircle, UserCheck, MessageSquare, DollarSign, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const roles = [
  { icon: HeadphonesIcon, title: "Customer support agents" },
  { icon: Wrench, title: "Technical support specialists" },
  { icon: Globe, title: "Multilingual support teams" },
  { icon: HelpCircle, title: "Helpdesk staff" },
  { icon: UserCheck, title: "Customer success representatives" },
];

const reasons = [
  { icon: MessageSquare, text: "Strong English proficiency" },
  { icon: DollarSign, text: "Cost-effective salaries compared to Western Europe" },
  { icon: Clock, text: "Time zone alignment with Europe" },
  { icon: TrendingUp, text: "Growing outsourcing ecosystem" },
];

const HireCustomerSupportKosovo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Hire Customer Support Agents in{" "}
              <span className="gradient-text">Kosovo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              Kosovo has become a popular destination for companies building customer support teams. Many businesses hire remote support agents in Kosovo to deliver high-quality service while maintaining competitive operating costs.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              The country offers a young workforce with strong English language skills and growing experience supporting international companies.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Roles companies <span className="gradient-text">hire</span>
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
                Why companies build support teams in <span className="gradient-text">Kosovo</span>
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
                Elara enables companies to hire full-time customer support employees in Kosovo without opening a local company. We manage employment contracts, payroll, taxes and compliance while your team manages the day-to-day work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build your customer support team in <span className="gradient-text">Kosovo</span>
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
                  <Link to="/hire-sales-team-kosovo" className="text-primary hover:underline">
                    Hire Remote Sales Teams in Kosovo →
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

export default HireCustomerSupportKosovo;
