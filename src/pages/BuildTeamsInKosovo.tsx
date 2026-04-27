import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeadphonesIcon, TrendingUp, Briefcase, Users, Calculator, Megaphone, Code, FolderOpen, CheckCircle, Building, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import DirectAnswer from "@/components/seo/DirectAnswer";
import VisibleFAQ from "@/components/seo/VisibleFAQ";
import WhyElara from "@/components/seo/WhyElara";
import { ServiceSchema, MetaTags } from "@/components/seo/PageSchema";

const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

const teamFaqs = [
  { question: "Can I build a full department in Kosovo through Elara?", answer: "Yes. Companies use Elara to build entire teams in Kosovo — customer support, sales, operations, finance, marketing, engineering and back-office functions." },
  { question: "How quickly can I scale a team in Kosovo?", answer: "Each hire is typically onboarded in 7–14 days. Companies regularly grow from one role to a full department within a few months." },
  { question: "Do I need a Kosovo entity to hire a team?", answer: "No. Elara's Employer of Record service means you can hire as many employees as you need without registering a local company." },
  { question: "Who manages the team day-to-day?", answer: "Your company directs all day-to-day work, priorities and performance. Elara is the legal employer and handles contracts, payroll, tax and HR." },
  { question: "What roles are best suited to Kosovo?", answer: "Customer support, SDRs, operations, back-office finance and software engineering are common. Kosovo has a young, English-speaking workforce at competitive salary levels." },
  { question: "How is pricing structured for teams?", answer: "Pricing is a transparent monthly fee per employee, on top of gross salary, with no setup or entity costs." },
];

const whyElaraPoints = [
  "Build cross-functional teams in Kosovo without setting up a local company.",
  "Compliant local contracts, payroll and HR included as standard.",
  "Fast scaling — onboard each hire in 7–14 days.",
  "Specialist Kosovo focus, not a generic global EOR.",
  "Transparent monthly per-employee pricing.",
];

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
      <MetaTags
        title="Build Teams in Kosovo | Scale Departments Compliantly | Elara"
        description="Build full departments in Kosovo without opening a local entity. Elara's Employer of Record handles contracts, payroll and compliance as you scale."
        canonical="https://elara-eor.com/build-teams-in-kosovo"
      />
      <ServiceSchema
        name="Build Teams in Kosovo"
        description="Build and scale full departments in Kosovo through Elara's Employer of Record service, with compliant employment contracts, payroll and HR included."
        url="https://elara-eor.com/build-teams-in-kosovo"
        serviceType="Team Building"
      />
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

        <DirectAnswer heading="Building teams in Kosovo: how it works">
          <p>
            Building a team in Kosovo means hiring multiple full-time employees locally — typically across customer support, sales, operations, finance or engineering. With Elara as your Employer of Record, you can scale a team in Kosovo without opening a local entity. We handle contracts, payroll and compliance for every hire.
          </p>
          <p>
            This page is for founders and operations leaders planning to grow a team or open a new operational hub in Kosovo.
          </p>
        </DirectAnswer>
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

        <WhyElara points={whyElaraPoints} />

        <VisibleFAQ faqs={teamFaqs} />

        {/* Related resources */}
        <section className="section-padding pt-0">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-6 md:p-8">
              <h2 className="font-bold text-2xl mb-4">Related resources</h2>
              <ul className="space-y-3">
                <li><Link to="/employer-of-record-kosovo" className="text-primary hover:underline">Employer of Record in Kosovo →</Link></li>
                <li><Link to="/hire-employees-kosovo" className="text-primary hover:underline">Hire Employees in Kosovo →</Link></li>
                <li><Link to="/kosovo-payroll-services" className="text-primary hover:underline">Payroll Services in Kosovo →</Link></li>
                <li><Link to="/kosovo-employment-law" className="text-primary hover:underline">Kosovo Employment Law →</Link></li>
                <li><Link to="/kosovo-salary-guide" className="text-primary hover:underline">Kosovo Salary Guide →</Link></li>
                <li><Link to="/insights" className="text-primary hover:underline">Insights & guides →</Link></li>
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
