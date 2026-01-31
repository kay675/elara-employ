import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const plans = [
  {
    name: "Starter",
    description: "For your first Kosovo hires",
    price: "€250",
    period: "/employee/month",
    features: [
      "Legal employment contracts",
      "Payroll & tax filings",
      "Social contributions",
      "Compliant onboarding",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For scaling teams",
    price: "€450",
    period: "/employee/month",
    features: [
      "Everything in Starter",
      "Priority onboarding (7 days)",
      "Benefits administration",
      "Dedicated account manager",
      "Quarterly compliance reviews",
    ],
    highlighted: true,
  },
  {
    name: "Automation+",
    description: "Full-service package",
    price: "€600",
    period: "/employee/month",
    features: [
      "Everything in Growth",
      "Equipment leasing",
      "Visa & work permit support",
      "Workforce analytics",
      "24/7 priority support",
    ],
    highlighted: false,
  },
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col animate-fade-in-up ${
                plan.highlighted
                  ? "glass-card glow-purple border-primary/30"
                  : "glass-card"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan details */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full h-12 ${
                  plan.highlighted
                    ? "btn-primary-glow border-0"
                    : "btn-secondary-glass border"
                }`}
              >
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
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
