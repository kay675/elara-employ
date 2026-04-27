import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeadphonesIcon, TrendingUp, Briefcase, Users, Calculator, Megaphone, Code, FolderOpen, MessageSquare, DollarSign, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import DirectAnswer from "@/components/seo/DirectAnswer";
import VisibleFAQ from "@/components/seo/VisibleFAQ";
import WhyElara from "@/components/seo/WhyElara";
import { ServiceSchema, MetaTags } from "@/components/seo/PageSchema";

const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

const faqs = [
  { question: "How do I hire an employee in Kosovo without a local entity?", answer: "Use an Employer of Record (EOR) like Elara. We become the legal employer in Kosovo, issue compliant employment contracts and run payroll, while your team manages the work." },
  { question: "How long does hiring in Kosovo take?", answer: "Typically 7–14 days from signed agreement to a fully onboarded employee, including contracts, payroll setup and compliance registrations." },
  { question: "What does it cost to hire in Kosovo through Elara?", answer: "Pricing is a transparent monthly fee per employee on top of gross salary, covering employment, payroll, tax filings and HR administration." },
  { question: "What employment benefits are required in Kosovo?", answer: "Statutory benefits include paid annual leave, public holidays and employer social security and pension contributions, all administered by Elara." },
  { question: "Can I hire across multiple roles or departments?", answer: "Yes. Companies hire customer support, sales, operations, finance, marketing, engineering and back-office staff through Elara — from one role to entire teams." },
  { question: "Do employees sign contracts with my company or with Elara?", answer: "Employees sign Kosovo-compliant contracts with Elara as the legal employer. Your company directs day-to-day work via a service agreement with Elara." },
  { question: "What if I need to end an employment?", answer: "Terminations follow Kosovo labour law including notice periods. Elara manages the legal process so you remain compliant." },
];

const whyElaraPoints = [
  "Specialist Kosovo focus — deep local knowledge, not a one-size-fits-all global EOR.",
  "Hire across any department: support, sales, operations, finance, engineering and more.",
  "Onboarding in 7–14 days under compliant local contracts.",
  "Transparent monthly pricing with no entity setup cost.",
  "Single point of contact for hiring, payroll and HR queries.",
];

const roles = [
  { icon: HeadphonesIcon, title: "Customer support teams" },
  { icon: TrendingUp, title: "Sales development representatives" },
  { icon: Briefcase, title: "Administrative staff" },
  { icon: Users, title: "Operations teams" },
  { icon: Calculator, title: "Finance and accounting staff" },
  { icon: Megaphone, title: "Marketing specialists" },
  { icon: Code, title: "Software engineers" },
  { icon: FolderOpen, title: "Back-office teams" },
];

const reasons = [
  { icon: MessageSquare, text: "Strong English proficiency" },
  { icon: DollarSign, text: "Competitive salaries vs Western Europe" },
  { icon: Clock, text: "European time zone alignment" },
  { icon: Globe, text: "Growing international business ecosystem" },
];

const HireEmployeesKosovo = () => {
  useEffect(() => {
    document.title = "Hire Employees in Kosovo | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              How to Hire Employees in{" "}
              <span className="gradient-text">Kosovo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              Elara helps international companies hire full-time employees across all departments in Kosovo — without opening a local entity. From customer support and sales to finance, marketing and engineering, we make it simple to build your team.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Using our Employer of Record service, your employees are hired compliantly under local contracts while working directly for your company.
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
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Companies hiring through Elara recruit across many functions and departments.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Why companies hire in <span className="gradient-text">Kosovo</span>
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
                Elara enables companies to hire full-time employees in Kosovo without opening a local company. We manage employment contracts, payroll, taxes and compliance while your team manages the day-to-day work. Whether you need one employee or an entire department, Elara handles the legal and administrative complexity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start hiring in <span className="gradient-text">Kosovo</span>
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
                  <Link to="/kosovo-payroll-services" className="text-primary hover:underline">
                    Payroll Services in Kosovo →
                  </Link>
                </li>
                <li>
                  <Link to="/employer-of-record-kosovo" className="text-primary hover:underline">
                    Employer of Record in Kosovo →
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

export default HireEmployeesKosovo;
