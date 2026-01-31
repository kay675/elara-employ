import { Check, Zap, Clock, Globe } from "lucide-react";

const benefits = [
  "Skip the 6–12 month entity setup",
  "Hire full-time employees without misclassification risk",
  "Payroll, tax, and contracts handled end-to-end",
  "Scale headcount without growing HR overhead",
  "EU time zone, strong English, high-calibre talent",
];

const whyNow = [
  {
    icon: Globe,
    text: "Remote teams are the default",
  },
  {
    icon: Zap,
    text: "Regulators cracking down on contractor misclassification",
  },
  {
    icon: Clock,
    text: "Companies want speed + certainty",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Elara</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build your Kosovo team, nothing you don't
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">What you get with Elara</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 flex flex-col justify-center">
            <div className="text-center">
              <p className="text-6xl font-bold gradient-text mb-4">£500</p>
              <p className="text-xl text-foreground mb-2">Per employee, per month</p>
              <p className="text-muted-foreground">
                Instead of £3–4k in the UK while we handle payroll, tax, and compliance end-to-end
              </p>
            </div>
          </div>
        </div>

        {/* Why Now Strip */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Why now?</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {whyNow.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
