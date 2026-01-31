import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const Guarantee = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <div className="glass-card glow-purple p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 mb-8">
              <Shield className="w-10 h-10 text-primary" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No Long-Term Contracts. <span className="gradient-text">Cancel Anytime.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Scale your team up or down with no lock-ins, penalties, or exit friction. 
              We earn your business every month through quality service, not contractual obligations.
            </p>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary" />
                No setup fees
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary" />
                No hidden costs
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary" />
                No minimum commitment
              </div>
            </div>

            {/* CTA */}
            <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Start Risk-Free Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
