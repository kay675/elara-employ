import { useEffect, useState, useRef } from "react";
import { TrendingDown, TrendingUp, Euro, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "90%",
    label: "Faster than entity setup",
    description: "Days to hire vs months of incorporation",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Lower employment costs",
    description: "Compared to UK-based hiring",
  },
  {
    icon: Euro,
    value: "£250–600",
    label: "Simple monthly fee",
    description: "Transparent per-employee pricing",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Labour-law compliance",
    description: "Full legal protection guaranteed",
  },
];

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Results That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for UK/EU companies hiring in Kosovo — with enterprise-grade contracts, 
            payroll, and labour-law compliance.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`glass-card-hover p-8 text-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 mb-4">
                <metric.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-4xl font-bold gradient-text mb-2">{metric.value}</p>
              <p className="font-semibold text-foreground mb-1">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Proof paragraph */}
        <div className="mt-12 glass-card p-8 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="text-foreground font-semibold">Enterprise-grade infrastructure.</span>{" "}
            Startup agility. Whether you're hiring your first Kosovo-based team member or 
            scaling to dozens, Elara delivers the same compliant, fast, and transparent service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;
