import { FileSignature, Calculator, Users, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const features = [
  {
    icon: FileSignature,
    title: "Local Employment Contracts",
    description: "Elara becomes the legal employer of record, providing fully compliant Kosovo employment contracts.",
  },
  {
    icon: Calculator,
    title: "Payroll, Tax & Social Contributions",
    description: "Monthly payroll processing, tax filings, and social security contributions handled automatically.",
  },
  {
    icon: Users,
    title: "HR Admin & Compliant Onboarding",
    description: "Full HR support including compliant onboarding, offboarding, and ongoing administrative tasks.",
  },
  {
    icon: Package,
    title: "Equipment, Benefits & Analytics",
    description: "Add-ons available: equipment leasing, benefits packages, and workforce analytics.",
  },
];

const weHandle = [
  "Employment contracts & legal employer status",
  "Payroll processing & tax filings",
  "Social contributions & compliance",
  "Onboarding & offboarding",
  "HR admin & documentation",
];

const youHandle = [
  "Day-to-day work management",
  "Performance reviews",
  "Team communication",
  "Compensation strategy",
  "Project assignments",
];

const Features = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Full-Service <span className="gradient-text">EOR</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to hire compliantly in Kosovo
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* What We Handle vs What You Handle */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold">What Elara handles</h3>
            </div>
            <ul className="space-y-3">
              {weHandle.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-foreground font-bold">Y</span>
              </div>
              <h3 className="text-xl font-bold">What you handle</h3>
            </div>
            <ul className="space-y-3">
              {youHandle.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book 30 min Hiring Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
