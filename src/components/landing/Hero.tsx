import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Clock } from "lucide-react";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/10 blur-[80px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm animate-fade-in-up">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Kosovo's compliance-led EOR</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up delay-100">
              Hire in Kosovo in{" "}
              <span className="gradient-text">7–14 Days</span>
              {" "}— Without Setting Up an Entity
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up delay-200">
              Hiring abroad is slow and risky. Entity setup takes months. Contractor 
              misclassification is rising. We become the legal employer, you run the day-to-day.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book 30 min Hiring Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in-up delay-400">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">70+</p>
                  <p className="text-sm text-muted-foreground">Hires completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Compliant</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">7-14</p>
                  <p className="text-sm text-muted-foreground">Days to hire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Trust & Stats */}
          <div className="animate-fade-in-up delay-300">
            <div className="glass-card glow-purple p-8 rounded-2xl">
              <div className="text-center mb-6">
                <p className="text-6xl font-bold gradient-text mb-2">£500</p>
                <p className="text-xl text-foreground">Per employee, per month</p>
                <p className="text-muted-foreground mt-2">
                  Instead of £3–4k in the UK
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Full payroll, tax & compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>70+ hires completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>7–14 days to hire</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust logos placeholder */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Trusted by companies across the UK & EU</p>
              <div className="flex flex-wrap justify-center gap-6 opacity-50">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 rounded bg-muted/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
