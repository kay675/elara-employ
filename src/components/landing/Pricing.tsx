import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_LINK, openBooking } from "@/lib/booking";

const features = [
  "Legal employment contracts",
  "Payroll & tax filings",
  "Social contributions",
  "Compliant onboarding",
  "Benefits administration",
  "Priority onboarding",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No long-term contracts. Cancel anytime. Scale up or down as needed.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl p-8 md:p-10 flex flex-col glass-card glow-purple border-primary/30 animate-fade-in-up">
            {/* Plan details */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Elara Plan</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Everything you need to hire compliantly in Kosovo
              </p>
              <div className="flex items-baseline justify-center gap-1 flex-wrap">
                <span className="text-5xl font-bold gradient-text">€300</span>
                <span className="text-muted-foreground">/ employee / month</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button asChild className="w-full h-12 btn-primary-glow border-0">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" onClick={openBooking}>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scarcity line */}
        <div className="text-center mt-12">
          <p className="inline-flex items-center gap-2 glass-card px-6 py-3 text-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">
              Limited onboarding slots each month to ensure compliance quality
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
