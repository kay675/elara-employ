import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageSquare, DollarSign, Clock, Building2, CheckCircle, Users, FileText, Shield, Briefcase, HeadphonesIcon, TrendingUp, Settings, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

const whyKosovo = [
  { icon: MessageSquare, text: "Strong English-speaking workforce" },
  { icon: DollarSign, text: "Competitive salary levels" },
  { icon: TrendingUp, text: "Growing outsourcing sector" },
  { icon: Clock, text: "European time zone compatibility" },
];

const steps = [
  { number: "01", title: "Identify hiring needs", description: "We help define the roles and profiles required." },
  { number: "02", title: "Select candidates", description: "Companies can hire from their own network or from Elara's candidate pool." },
  { number: "03", title: "Employment setup", description: "Elara hires the employee under local employment contracts." },
  { number: "04", title: "Payroll and compliance", description: "Elara manages payroll, tax filings and HR administration." },
];

const roles = [
  { icon: HeadphonesIcon, title: "Customer support agents" },
  { icon: TrendingUp, title: "Sales development representatives (SDRs)" },
  { icon: Users, title: "Account managers" },
  { icon: Settings, title: "Operations staff" },
  { icon: FileText, title: "Administrative assistants" },
  { icon: Briefcase, title: "Back-office teams" },
];

const benefits = [
  "Hire employees without opening a local company",
  "Ensure compliance with local labour laws",
  "Simplify payroll and tax administration",
  "Scale teams quickly in new markets",
  "Reduce administrative overhead",
];

const faqs = [
  {
    question: "Do I need to open a company in Kosovo to hire employees?",
    answer: "No. An Employer of Record allows companies to hire employees legally without setting up a local entity.",
  },
  {
    question: "What roles are commonly hired in Kosovo?",
    answer: "Customer support teams, sales development representatives, operations staff and administrative roles.",
  },
];

const EmployerOfRecordKosovo = () => {
  useEffect(() => {
    document.title = "Employer of Record Kosovo | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Employer of Record in{" "}
              <span className="gradient-text">Kosovo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
              Elara helps international companies hire employees in Kosovo without opening a local entity. Using our Employer of Record (EOR) service, businesses can legally employ talent in Kosovo while we manage payroll, employment contracts, compliance and HR administration.
            </p>
            <div className="animate-fade-in-up delay-200">
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Start Hiring in Kosovo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why companies hire in Kosovo */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why companies hire in <span className="gradient-text">Kosovo</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Kosovo has become an attractive location for companies building remote teams. The country offers a young workforce, strong English language skills and competitive salary levels compared to Western Europe.
              </p>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Many international companies build customer support teams, sales teams and operational functions in Kosovo to support global operations.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyKosovo.map((item, index) => (
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

        {/* What is an EOR */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                What is an <span className="gradient-text">Employer of Record</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>An Employer of Record (EOR) allows companies to hire employees in another country without establishing a local legal entity.</p>
                <p>The EOR becomes the legal employer on paper while the employee works day-to-day for the client company.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { step: "1", text: "Company selects a candidate" },
                  { step: "2", text: "Elara hires the employee locally" },
                  { step: "3", text: "The employee works for the company" },
                  { step: "4", text: "Elara manages payroll, contracts and compliance" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Roles companies hire in <span className="gradient-text">Kosovo</span>
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
            <p className="text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
              Many companies build multilingual customer support and outbound sales teams in Kosovo to support international markets.
            </p>
          </div>
        </section>

        {/* How hiring works */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                How hiring through <span className="gradient-text">Elara</span> works
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="glass-card-hover p-8 relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Benefits of using an <span className="gradient-text">Employer of Record</span>
              </h2>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="glass-card-hover p-6 flex items-center gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <p className="font-semibold text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
            <div className="glass-card p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border/50 last:border-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-6">
                      <span className="font-semibold pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build your team in <span className="gradient-text">Kosovo</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                If you are looking to hire employees in Kosovo, Elara can help you build compliant remote teams quickly and efficiently.
              </p>
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Start Hiring in Kosovo
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
                  <Link to="/hire-employees-kosovo" className="text-primary hover:underline">
                    Hire Employees in Kosovo →
                  </Link>
                </li>
                <li>
                  <Link to="/kosovo-payroll-services" className="text-primary hover:underline">
                    Payroll Services in Kosovo →
                  </Link>
                </li>
                <li>
                  <Link to="/kosovo-employment-law" className="text-primary hover:underline">
                    Kosovo Employment Law →
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

export default EmployerOfRecordKosovo;
