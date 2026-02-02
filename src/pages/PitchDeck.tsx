import { useState } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  Users, 
  Clock, 
  Shield, 
  TrendingUp, 
  CheckCircle2,
  Building2,
  Briefcase,
  Euro,
  Calendar,
  FileSignature,
  Calculator,
  Package,
  Zap,
  Target,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Elara",
      subtitle: "Kosovo's Employer of Record",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Elara</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Kosovo's Employer of Record
            </p>
          </div>
          <p className="text-xl max-w-2xl text-foreground/80">
            Hire full-time employees in Kosovo in 7–14 days. 
            No entity required. Full compliance guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="glass-card px-6 py-3">
              <span className="text-primary font-semibold">£250–£450</span>
              <span className="text-muted-foreground ml-2">per employee/month</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "The Problem",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The <span className="gradient-text">Challenge</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">Entity Setup Takes 6–12 Months</h3>
              </div>
              <p className="text-muted-foreground">
                Setting up a legal entity in Kosovo requires significant time, legal fees, and ongoing compliance burden.
              </p>
            </div>
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">Contractor Misclassification Risk</h3>
              </div>
              <p className="text-muted-foreground">
                IR35 and EU directives are cracking down. Misclassifying employees as contractors leads to penalties and back-taxes.
              </p>
            </div>
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">HR Overhead Scales with Headcount</h3>
              </div>
              <p className="text-muted-foreground">
                Hiring international employees means navigating unfamiliar labor laws, tax codes, and compliance requirements.
              </p>
            </div>
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                  <Euro className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">UK Hiring Costs £3–4k/month</h3>
              </div>
              <p className="text-muted-foreground">
                Fully-loaded UK employee costs are 5–6x higher than comparable Kosovo talent for many roles.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "The Solution",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            The <span className="gradient-text">Elara Solution</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Elara becomes the legal employer of your Kosovo team. You manage the work; we handle everything else.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileSignature, title: "Employment Contracts", desc: "Fully compliant Kosovo contracts" },
              { icon: Calculator, title: "Payroll & Tax", desc: "Monthly processing & filings" },
              { icon: Users, title: "HR Admin", desc: "Onboarding to offboarding" },
              { icon: Package, title: "Benefits & Equipment", desc: "Optional add-ons available" },
            ].map((item, i) => (
              <div key={i} className="glass-card-hover p-6 text-center space-y-4">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Why Kosovo?",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="gradient-text">Kosovo</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 space-y-6">
              <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Young, Educated Talent</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Europe's youngest population</li>
                <li>• 30%+ graduates in STEM</li>
                <li>• Fluent English & German</li>
                <li>• Strong C-1 English speakers</li>
              </ul>
            </div>
            <div className="glass-card p-8 space-y-6">
              <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">EU Time Zone</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• GMT+1 (Central European Time)</li>
                <li>• 2-3 hours from major EU hubs</li>
                <li>• Real-time collaboration</li>
                <li>• Uses the Euro (€)</li>
              </ul>
            </div>
            <div className="glass-card p-8 space-y-6">
              <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">50% Cost Savings</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Customer Support: ~€650/mo</li>
                <li>• SDR: €700–€800/mo</li>
                <li>• Account Executive: €900–€1,000/mo</li>
                <li>• Software Engineer: ~€1,300/mo</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Market Opportunity",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Market <span className="gradient-text">Opportunity</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Global EOR Market (2024)</span>
                  <span className="text-2xl font-bold text-primary">$5B</span>
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Projected by 2036</span>
                  <span className="text-2xl font-bold text-primary">$20B</span>
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CAGR</span>
                  <span className="text-2xl font-bold text-primary">14.8%</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Key Drivers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Remote work becoming the default</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>IR35 & EU contractor crackdowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Companies need speed + compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Few EORs specialize in Kosovo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "How It Works",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Define the Role",
                desc: "Share your job requirements, compensation expectations, and timeline. We guide you through Kosovo's talent landscape.",
                time: "Day 1",
              },
              {
                step: "02",
                title: "We Employ & Onboard",
                desc: "Elara becomes the legal employer. We handle contracts and compliant onboarding.",
                time: "Days 7–14",
              },
              {
                step: "03",
                title: "You Manage, We Run Payroll",
                desc: "You manage day-to-day work. We handle monthly payroll, tax filings, and compliance.",
                time: "Ongoing",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {item.step}
                </div>
                <div className="mt-4 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {item.time}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Pricing",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Per employee, per month. No hidden fees.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold">Growth</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">£250</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Legal employment contracts",
                  "Payroll & tax filings",
                  "Social contributions",
                  "Compliant onboarding",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 space-y-6 border-primary/30">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  Popular
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold gradient-text">£450</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Everything in Growth",
                  "Priority onboarding (7 days)",
                  "Benefits administration",
                  "Dedicated account manager",
                  "Quarterly compliance reviews",
                  "Equipment leasing",
                  "Workforce analytics",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "Unit Economics",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unit <span className="gradient-text">Economics</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Avg. Monthly Fee</span>
                  <span className="text-2xl font-bold">~£300</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Est. Delivery Cost</span>
                  <span className="text-2xl font-bold">~£125</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-muted-foreground h-3 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div className="glass-card p-6 border-primary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Gross Margin</span>
                  <span className="text-2xl font-bold text-primary">~50%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Key Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">100 EUM Revenue</span>
                  <span className="font-semibold">~€30k/month</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Breakeven</span>
                  <span className="font-semibold">~50–100 EUM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Employer Cost Margin</span>
                  <span className="font-semibold">7–9% above gross</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Client Stickiness</span>
                  <span className="font-semibold">High (switching cost)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "Why Elara?",
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="gradient-text">Elara</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Fast Hiring", desc: "7–14 day onboarding vs 6–12 months for entity setup" },
              { icon: Shield, title: "Full Compliance", desc: "Eliminate misclassification risk with proper employment" },
              { icon: Calculator, title: "End-to-End", desc: "Payroll, tax, contracts handled automatically" },
              { icon: Users, title: "Scale Without Overhead", desc: "Grow headcount without growing HR team" },
              { icon: Globe, title: "EU Timezone", desc: "Strong C-1 English, real-time collaboration" },
              { icon: Award, title: "Kosovo-First Expertise", desc: "Deep local knowledge and relationships" },
            ].map((item, i) => (
              <div key={i} className="glass-card-hover p-6 space-y-4">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Let's Talk",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Build Your <span className="gradient-text">Kosovo Team</span>?
          </h2>
          <p className="text-xl max-w-2xl text-muted-foreground">
            Book a 30-minute call to discuss your hiring needs and how Elara can help you build a compliant, cost-effective team in Kosovo.
          </p>
          <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14 mt-8">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book 30 min Hiring Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <div className="flex items-center gap-8 mt-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>30 minutes</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 glass-card rounded-none border-x-0 border-t-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <a href="/" className="text-xl font-bold">Elara</a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-24 px-4 md:px-8 flex items-center justify-center">
        <div className="w-full max-w-6xl animate-fade-in-up" key={currentSlide}>
          {slides[currentSlide].content}
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 glass-card rounded-none border-x-0 border-b-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          {/* Slide dots */}
          <div className="hidden md:flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </footer>

      {/* Keyboard navigation */}
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === " ") nextSlide();
          if (e.key === "ArrowLeft") prevSlide();
        }}
        className="sr-only"
      >
        Keyboard navigation active
      </div>
    </div>
  );
};

export default PitchDeck;
