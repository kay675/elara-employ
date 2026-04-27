import { useEffect } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, FileText, Shield, Clock, CheckCircle, Calculator, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import DirectAnswer from "@/components/seo/DirectAnswer";
import VisibleFAQ from "@/components/seo/VisibleFAQ";
import WhyElara from "@/components/seo/WhyElara";
import { ServiceSchema, MetaTags } from "@/components/seo/PageSchema";

const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

const payrollFaqs = [
  { question: "Who is responsible for payroll when using Elara?", answer: "Elara processes monthly payroll in Kosovo, files income tax and social security contributions, and issues compliant payslips for every employee." },
  { question: "Do I need a Kosovo entity to run payroll there?", answer: "No. Elara acts as the legal employer through its Employer of Record service, so payroll runs under our local entity — no setup required on your side." },
  { question: "What taxes and contributions are deducted in Kosovo?", answer: "Personal income tax and pension contributions are calculated and remitted monthly. Elara handles all filings and reporting in line with Kosovo law." },
  { question: "In what currency are employees paid?", answer: "Employees in Kosovo are paid in euros (EUR) into local bank accounts." },
  { question: "How are payslips delivered?", answer: "Each employee receives a compliant monthly payslip detailing gross salary, deductions and net pay." },
  { question: "Can payroll scale from one to many employees?", answer: "Yes. The same payroll process supports a single hire or a full team — pricing scales transparently per employee." },
];

const whyElaraPoints = [
  "End-to-end Kosovo payroll: salary, tax filings, social contributions, payslips.",
  "No need to register a local entity or appoint a local accountant.",
  "Predictable monthly fee per employee.",
  "Compliant with Kosovo tax law and employment regulations.",
  "Direct support from a single point of contact.",
];

const services = [
  { icon: DollarSign, title: "Salary processing", description: "Monthly payroll calculated and paid on time in local currency." },
  { icon: FileText, title: "Tax filings", description: "Income tax and social security contribution filings handled on your behalf." },
  { icon: Shield, title: "Compliance management", description: "Payroll aligned with Kosovo labour regulations and reporting requirements." },
  { icon: Calculator, title: "Payslip generation", description: "Professional payslips issued to each employee every month." },
];

const benefits = [
  "No need to register a local entity",
  "Payroll processed in compliance with Kosovo tax law",
  "Social contributions and pension payments managed",
  "Monthly reporting and payslip distribution",
  "Scalable from one employee to full teams",
];

const KosovoPayrollServices = () => {
  useEffect(() => {
    document.title = "Kosovo Payroll Services | Elara";
  }, []);

  return (
    <div className="min-h-screen">
      <MetaTags
        title="Kosovo Payroll Services | Compliant Monthly Payroll | Elara"
        description="Outsource Kosovo payroll to Elara. Salary processing, tax filings, social contributions and payslips handled monthly — no local entity required."
        canonical="https://elara-eor.com/kosovo-payroll-services"
      />
      <ServiceSchema
        name="Kosovo Payroll Services"
        description="Monthly payroll processing in Kosovo, including salary, tax filings, social contributions and payslips, delivered through Elara's Employer of Record service."
        url="https://elara-eor.com/kosovo-payroll-services"
        serviceType="Payroll Service"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Payroll Services in{" "}
              <span className="gradient-text">Kosovo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up delay-100">
              Managing payroll in a new country can be complex. Elara handles salary processing, tax filings, social contributions and compliance so your team in Kosovo is paid correctly and on time — every month.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Our payroll service is included as part of our Employer of Record solution, meaning you don't need to set up a local entity or manage local accounting.
            </p>
            <div className="animate-fade-in-up delay-300">
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Discuss Payroll Setup
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <DirectAnswer heading="What are payroll services in Kosovo?">
          <p>
            Payroll services in Kosovo cover the monthly calculation, payment and reporting of employee salaries, taxes and social contributions in line with Kosovo law. Elara delivers payroll as part of its Employer of Record service, so international companies can pay staff in Kosovo compliantly without a local entity or accountant.
          </p>
          <p>
            This page is for finance leaders, founders and operations managers responsible for paying staff in Kosovo accurately and on time.
          </p>
        </DirectAnswer>
        {/* What's included */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What's included in our <span className="gradient-text">payroll service</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card-hover p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{service.title}</p>
                  </div>
                  <p className="text-muted-foreground ml-16">{service.description}</p>
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
                Benefits of outsourcing <span className="gradient-text">payroll</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyElara points={whyElaraPoints} />

        <VisibleFAQ faqs={payrollFaqs} />

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card glow-purple p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simplify payroll in <span className="gradient-text">Kosovo</span>
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

        {/* Related resources */}
        <section className="section-padding pt-0">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-6 md:p-8">
              <h2 className="font-bold text-2xl mb-4">Related resources</h2>
              <ul className="space-y-3">
                <li><Link to="/employer-of-record-kosovo" className="text-primary hover:underline">Employer of Record in Kosovo →</Link></li>
                <li><Link to="/hire-employees-kosovo" className="text-primary hover:underline">Hire Employees in Kosovo →</Link></li>
                <li><Link to="/kosovo-employment-law" className="text-primary hover:underline">Kosovo Employment Law →</Link></li>
                <li><Link to="/kosovo-salary-guide" className="text-primary hover:underline">Kosovo Salary Guide →</Link></li>
                <li><Link to="/build-teams-in-kosovo" className="text-primary hover:underline">Build Teams in Kosovo →</Link></li>
                <li><Link to="/insights/kosovo-payroll-guide-uk-eu-companies" className="text-primary hover:underline">Guide: Kosovo payroll guide for UK and EU companies →</Link></li>
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

export default KosovoPayrollServices;
