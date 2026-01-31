import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const Demo = () => {
  return (
    <section id="demo" className="section-padding">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            See Elara in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See a real hiring flow: contract → onboarding → payroll → ongoing support
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="glass-card glow-purple p-3 rounded-2xl">
          <div className="aspect-video rounded-xl bg-secondary/30 flex flex-col items-center justify-center gap-6 border border-border relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
            </div>

            {/* Play button */}
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-xl font-semibold text-foreground mb-1">Demo Coming Soon</p>
              <p className="text-muted-foreground">Full walkthrough of our hiring platform</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Can't wait? Let's talk about your hiring needs now.
          </p>
          <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book a 15-min Hiring Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
