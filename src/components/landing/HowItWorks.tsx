import { FileText, UserCheck, CreditCard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Define the Role",
    description: "Share your job requirements, compensation expectations, and timeline. We'll guide you through Kosovo's talent landscape.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "We Employ & Onboard",
    description: "Elara becomes the legal employer. We handle employment contracts, work permits, and compliant onboarding—all within 7–14 days.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "You Manage, We Run Payroll",
    description: "You manage day-to-day work and performance. We handle monthly payroll, tax filings, social contributions, and ongoing compliance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to build your compliant Kosovo team
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="glass-card-hover p-8 relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
