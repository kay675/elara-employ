import { useState, useMemo, useEffect, useRef } from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ArrowRight, Calculator, TrendingDown, Globe, GraduationCap, Clock, Building2 } from "lucide-react";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const EUR_TO_GBP = 0.86;

type Role = "customer-support" | "sdr" | "operations" | "marketing" | "software-engineer";
type Country = "uk" | "germany" | "france" | "spain" | "italy";

const ROLES: { value: Role; label: string }[] = [
  { value: "customer-support", label: "Customer Support" },
  { value: "sdr", label: "Sales Development Representative" },
  { value: "operations", label: "Operations / Admin" },
  { value: "marketing", label: "Marketing" },
  { value: "software-engineer", label: "Software Engineer" },
];

const COUNTRIES: { value: Country; label: string; symbol: string; flag: string }[] = [
  { value: "uk", label: "United Kingdom", symbol: "£", flag: "🇬🇧" },
  { value: "germany", label: "Germany", symbol: "€", flag: "🇩🇪" },
  { value: "france", label: "France", symbol: "€", flag: "🇫🇷" },
  { value: "spain", label: "Spain", symbol: "€", flag: "🇪🇸" },
  { value: "italy", label: "Italy", symbol: "€", flag: "🇮🇹" },
];

// Salaries in local currency (GBP for UK, EUR for others)
const SALARIES: Record<Role, Record<Country | "kosovo", number>> = {
  "customer-support": { uk: 26500, germany: 34000, france: 32000, spain: 24000, italy: 26000, kosovo: 9600 },
  sdr:                { uk: 35000, germany: 45000, france: 40000, spain: 32000, italy: 34000, kosovo: 12000 },
  operations:         { uk: 28000, germany: 36000, france: 30000, spain: 26000, italy: 27000, kosovo: 10200 },
  marketing:          { uk: 38000, germany: 50000, france: 42000, spain: 34000, italy: 35000, kosovo: 14400 },
  "software-engineer":{ uk: 65000, germany: 70000, france: 55000, spain: 45000, italy: 48000, kosovo: 24000 },
};

const EMPLOYER_COSTS: Record<Country | "kosovo", number> = {
  uk: 0.18, germany: 0.21, france: 0.42, spain: 0.31, italy: 0.32, kosovo: 0.10,
};

const formatCurrency = (amount: number, symbol: string) =>
  `${symbol}${Math.round(amount).toLocaleString("en-GB")}`;

/* Animated number display */
const AnimatedValue = ({ value, symbol }: { value: number; symbol: string }) => {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number>();
  const prevRef = useRef(value);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    prevRef.current = value;
    const duration = 400;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value]);

  return <>{symbol}{display.toLocaleString("en-GB")}</>;
};

const WHY_KOSOVO = [
  { icon: TrendingDown, text: "Lower employment costs than Western Europe" },
  { icon: GraduationCap, text: "Highly educated workforce" },
  { icon: Globe, text: "Strong English proficiency" },
  { icon: Clock, text: "European time zone alignment" },
  { icon: Building2, text: "No local entity required with Elara" },
];

const SalaryCalculator = () => {
  const [role, setRole] = useState<Role>("customer-support");
  const [country, setCountry] = useState<Country>("uk");
  const [teamSize, setTeamSize] = useState(5);

  const selectedCountry = COUNTRIES.find((c) => c.value === country)!;

  const results = useMemo(() => {
    const countrySalary = SALARIES[role][country];
    const kosovoSalaryEur = SALARIES[role].kosovo;
    const countryOnCost = EMPLOYER_COSTS[country];
    const kosovoOnCost = EMPLOYER_COSTS.kosovo;

    // Normalise Kosovo salary to the display currency
    const kosovoSalary = country === "uk" ? kosovoSalaryEur * EUR_TO_GBP : kosovoSalaryEur;

    const countryCostPerEmployee = countrySalary * (1 + countryOnCost);
    const kosovoCostPerEmployee = kosovoSalary * (1 + kosovoOnCost);

    const countryTeamCost = countryCostPerEmployee * teamSize;
    const kosovoTeamCost = kosovoCostPerEmployee * teamSize;
    const annualSaving = countryTeamCost - kosovoTeamCost;
    const fiveYearSaving = annualSaving * 5;
    const costReductionPct = countryTeamCost > 0 ? Math.round((annualSaving / countryTeamCost) * 100) : 0;

    return { countryTeamCost, kosovoTeamCost, annualSaving, fiveYearSaving, countryOnCost, kosovoOnCost, costReductionPct };
  }, [role, country, teamSize]);

  useEffect(() => {
    document.title = "Kosovo Hiring Cost Calculator | Elara EOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Estimate how much your company could save by hiring in Kosovo compared with Western Europe using Elara's hiring savings calculator.");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.elara-eor.com/salary-calculator";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative section-padding pt-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary/10 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm mb-8 animate-fade-in-up">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Hiring Savings Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
            Compare Hiring Costs{" "}
            <span className="gradient-text">Across Europe</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            This calculator provides an illustrative estimate of the employment cost difference
            between hiring in Western Europe and hiring in Kosovo through Elara's Employer of
            Record solution.
          </p>
        </div>
      </section>

      {/* Why Kosovo – Benefits Primer */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why companies hire in <span className="gradient-text">Kosovo</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHY_KOSOVO.map(({ icon: Icon, text }) => (
              <div key={text} className="glass-card p-5 flex flex-col items-center text-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Inputs */}
            <div className="glass-card p-8 md:p-10 space-y-8">
              <h2 className="text-xl font-bold">Configure Your Team</h2>

              {/* Role */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-muted-foreground">Role</label>
                <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                  <SelectTrigger className="w-full bg-secondary/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((r) => (
                      <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Select the primary role you're looking to hire.</p>
              </div>

              {/* Country */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-muted-foreground">Compare With</label>
                <Select value={country} onValueChange={(v) => setCountry(v as Country)}>
                  <SelectTrigger className="w-full bg-secondary/50 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        <span className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span>{c.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Choose the country you'd compare Kosovo against.</p>
              </div>

              {/* Team Size */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-muted-foreground">Team Size</label>
                  <span className="text-2xl font-bold text-primary">{teamSize}</span>
                </div>
                <Slider
                  value={[teamSize]}
                  onValueChange={(v) => setTeamSize(v[0])}
                  min={1}
                  max={100}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">
                  Team size: {teamSize} employee{teamSize !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Spacer visual to balance the card */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Employer on-costs include payroll tax, social contributions, pensions and mandatory benefits
                  for each country.
                </p>
              </div>
            </div>

            {/* Right: Results */}
            <div className="glass-card p-8 md:p-10 space-y-5">
              <h2 className="text-xl font-bold">Your Estimated Savings</h2>

              {/* Country & Kosovo costs – subdued */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary/30 p-4 space-y-1">
                  <p className="text-xs text-muted-foreground">
                    {selectedCountry.flag} {selectedCountry.label}
                  </p>
                  <p className="text-lg font-semibold text-muted-foreground/80">
                    <AnimatedValue value={results.countryTeamCost} symbol={selectedCountry.symbol} />
                  </p>
                  <p className="text-[11px] text-muted-foreground/60">per year</p>
                  <p className="text-[11px] text-muted-foreground/50">Employer cost: {Math.round(results.countryOnCost * 100)}%</p>
                </div>
                <div className="rounded-xl bg-secondary/30 p-4 space-y-1">
                  <p className="text-xs text-muted-foreground">🇽🇰 Kosovo</p>
                  <p className="text-lg font-semibold text-muted-foreground/80">
                    <AnimatedValue value={results.kosovoTeamCost} symbol={selectedCountry.symbol} />
                  </p>
                  <p className="text-[11px] text-muted-foreground/60">per year</p>
                  <p className="text-[11px] text-muted-foreground/50">Employer cost: {Math.round(results.kosovoOnCost * 100)}%</p>
                </div>
              </div>

              {/* Annual Saving – HERO figure */}
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.08] p-7 md:p-8 text-center glow-purple">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">You Save</p>
                <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-none">
                  <AnimatedValue value={results.annualSaving} symbol={selectedCountry.symbol} />
                </p>
                <p className="text-sm text-muted-foreground mt-3">per year by hiring in Kosovo through Elara</p>
              </div>

              {/* 5-Year Saving */}
              <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Estimated 5-Year Saving</p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  <AnimatedValue value={results.fiveYearSaving} symbol={selectedCountry.symbol} />
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">Based on current team size</p>
              </div>

              {/* Cost Reduction % */}
              <div className="rounded-xl bg-secondary/30 p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">Estimated Cost Reduction</p>
                <p className="text-3xl font-bold text-foreground">{results.costReductionPct}%</p>
                <p className="text-[11px] text-muted-foreground mt-1">lower cost compared to {selectedCountry.label}</p>
              </div>

              {/* Inline CTA */}
              <div className="pt-1">
                <Button asChild size="lg" className="btn-primary-glow border-0 w-full text-base py-6">
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                    Book a 30-minute hiring plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Speak with Elara about building your team in Kosovo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology / Disclaimer */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-lg font-bold mb-4">How this calculator works</h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Figures shown are illustrative benchmark estimates based on salary benchmarks and typical
                employer cost assumptions in each country.
              </p>
              {country === "uk" && (
                <p>
                  Kosovo benchmark salaries are converted into GBP using a fixed internal exchange rate
                  (€1 = £{EUR_TO_GBP.toFixed(2)}) for comparison purposes.
                </p>
              )}
              <p>
                Actual hiring costs vary depending on role seniority, experience, benefits, exact location,
                and employment structure. For a more precise breakdown based on your hiring plan, speak
                with Elara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card glow-purple p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get a tailored <span className="gradient-text">hiring plan</span> for your team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                These figures are illustrative estimates. Elara can provide a more precise breakdown based
                on your hiring needs, role mix, salaries, and team structure.
              </p>
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg px-10 py-6">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book a 30-minute hiring plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default SalaryCalculator;
