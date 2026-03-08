import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, Search, Briefcase, Globe, MapPin, Shield, Sparkles, Eye, Headphones, TrendingUp, Users, Settings, FileText, BarChart, Megaphone, Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const roles = [
  { title: "Customer Support", icon: Headphones },
  { title: "Sales Development", icon: TrendingUp },
  { title: "Account Management", icon: Users },
  { title: "Operations", icon: Settings },
  { title: "Admin / Back Office", icon: FileText },
  { title: "Finance", icon: BarChart },
  { title: "Marketing", icon: Megaphone },
  { title: "HR / Recruitment", icon: Users },
  { title: "Tech / Product", icon: Code },
];

const benefits = [
  { title: "Access opportunities with international companies", icon: Globe },
  { title: "Be considered for remote and in-country roles", icon: MapPin },
  { title: "Work through a compliant employment model", icon: Shield },
  { title: "Smooth onboarding experience", icon: Sparkles },
  { title: "Visibility for future roles", icon: Eye },
];

const steps = [
  { number: "01", icon: UserPlus, title: "Create your profile", description: "Submit your details and tell us about your skills, experience and what kind of roles you're looking for." },
  { number: "02", icon: Search, title: "Get matched with hiring companies", description: "We connect your profile with international companies actively hiring through Elara in Kosovo." },
  { number: "03", icon: Briefcase, title: "Interview and onboard", description: "Go through the interview process and get onboarded as a fully compliant employee with benefits and protections." },
];

const faqs = [
  { question: "How do I apply through Elara?", answer: "Simply fill out the form on this page to join our talent network. Once submitted, your profile will be reviewed and matched with relevant opportunities from international companies hiring through Elara." },
  { question: "What is an Employer of Record?", answer: "An Employer of Record (EOR) is a company that becomes the legal employer on behalf of another business. This means you get a fully compliant employment contract, benefits, and protections — while working day-to-day with the hiring company." },
  { question: "What types of roles are supported?", answer: "We support a wide range of roles including customer support, sales, operations, admin, finance, marketing, HR, and tech/product positions. If your skill set doesn't fit these categories, we still encourage you to apply — new roles are added regularly." },
  { question: "Is joining the talent network free?", answer: "Yes, joining Elara's talent network is completely free. There is no cost to submit your profile or be considered for opportunities." },
];

const Candidates = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* SECTION 1 — HERO */}
        <section className="section-padding pt-32 md:pt-40 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Find opportunities with{" "}
              <span className="gradient-text">global companies</span> hiring in Kosovo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
              Join Elara's candidate network and get matched with international businesses looking to hire top talent through our Employer of Record model.
            </p>
            <div className="animate-fade-in-up delay-200">
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href="#join">
                  Join the Talent Pool
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up delay-300">
              For professionals in Kosovo looking to work with ambitious international companies.
            </p>
          </div>
        </section>

        {/* SECTION 2 — WHY THIS EXISTS */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                A simpler way to access <span className="gradient-text">global opportunities</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>Elara helps international companies hire in Kosovo without setting up a local entity.</p>
                <p>As more companies expand into the region, we are building a strong network of talented professionals ready for new opportunities.</p>
                <p>By joining our network, you can be considered for roles across customer support, sales, operations, admin, finance and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW IT WORKS */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                How it works for <span className="gradient-text">candidates</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="glass-card-hover p-8 relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY CANDIDATES JOIN */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why candidates join <span className="gradient-text">Elara</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="glass-card-hover p-6 flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — ROLES WE COMMONLY SUPPORT */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Roles we commonly <span className="gradient-text">support</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <div
                  key={role.title}
                  className="glass-card-hover p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{role.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — JOIN OUR TALENT NETWORK */}
        <section id="join" className="section-padding">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Join our <span className="gradient-text">talent network</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Submit your details and we'll be in touch when a matching opportunity arises.
              </p>
            </div>
            <div className="glass-card p-4 md:p-8 overflow-visible relative z-[1]">
              {/* 
                EMBED YOUR FORM HERE:
                Replace the src URL below with your Typeform, Google Form, or other embed URL.
                Example Typeform:  https://yourname.typeform.com/to/XXXXXX
                Example Google Form: https://docs.google.com/forms/d/e/XXXXX/viewform?embedded=true
              */}
              <iframe
                src="https://api.onsync.ai/widget/form/qXsnlCHXxNCWvsH0yOGV"
                title="Join Elara Talent Network"
                className="w-full rounded-xl border-0 min-h-[2400px] md:min-h-[2200px]"
                allow="camera; microphone; autoplay; encrypted-media"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* SECTION 7 — TRUST */}
        <section className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for global hiring.{" "}
                <span className="gradient-text">Designed for local talent.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>Elara helps international companies hire in Kosovo compliantly and efficiently.</p>
                <p>By joining our network, you gain visibility with businesses expanding into the region and building new teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
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
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Candidates;
