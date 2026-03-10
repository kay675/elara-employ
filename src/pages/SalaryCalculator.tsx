import { useState, useMemo, useEffect } from "react";
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
import { CheckCircle } from "lucide-react";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

type Role =
  | "customer-support"
  | "sdr"
  | "operations"
  | "marketing"
  | "software-engineer";

type Country = "uk" | "germany" | "france" | "spain" | "italy";

const ROLES: { value: Role; label: string }[] = [
  { value: "customer-support", label: "Customer Support" },
  { value: "sdr", label: "Sales Development Representative" },
  { value: "operations", label: "Operations / Administration" },
  { value: "marketing", label: "Marketing Specialist" },
  { value: "software-engineer", label: "Software Engineer" },
];

const COUNTRIES: { value: Country; label: string; currency: string; symbol: string }[] = [
  { value: "uk", label: "United Kingdom", currency: "GBP", symbol: "£" },
  { value: "germany", label: "Germany", currency: "EUR", symbol: "€" },
  { value: "france", label: "France", currency: "EUR", symbol: "€" },
  { value: "spain", label: "Spain", currency: "EUR", symbol: "€" },
  { value: "italy", label: "Italy", currency: "EUR", symbol: "€" },
];

const SALARIES: Record<Role, Record<Country | "kosovo", number>> = {
  "customer-support": {
    uk: 26500, germany: 33000, france: 29000, spain: 24000, italy: 25000, kosovo: 9600,
  },
  sdr: {
    uk: 35000, germany: 45000, france: 40000, spain: 32000, italy: 34000, kosovo: 12000,
  },
  operations: {
    uk: 28000, germany: 36000, france: 30000, spain: 26000, italy: 27000, kosovo: 10200,
  },
  marketing: {
    uk: 38000, germany: 50000, france: 42000, spain: 34000, italy: 35000, kosovo: 14400,
  },
  "software-engineer": {
    uk: 65000, germany: 70000, france: 55000, spain: 45000, italy: 48000, kosovo: 24000,
  },
};

const EMPLOYER_COSTS: Record<Country | "kosovo", number> = {
  uk: 0.18, germany: 0.22, france: 0.42, spain: 0.31, italy: 0.30, kosovo: 0.10,
};

const formatCurrency = (amount: number, symbol: string) => {
  return `${symbol}${Math.round(amount).toLocaleString("en-GB")}`;
};

const SalaryCalculator = () => {
  const [role, setRole] = useState<Role>("customer-support");
  const [country, setCountry] = useState<Country>("uk");
  const [teamSize, setTeamSize] = useState(5);

  const selectedCountry = COUNTRIES.find((c) => c.value === country)!;

  const results = useMemo(() => {
    const countrySalary = SALARIES[role][country];
    const kosovoSalary = SALARIES[role].kosovo;
    const countryOnCost = EMPLOYER_COSTS[country];
    const kosovoOnCost = EMPLOYER_COSTS.kosovo;

    const countryCostPerEmployee = countrySalary * (1 + countryOnCost);
    const kosovoCostPerEmployee = kosovoSalary * (1 + kosovoOnCost);

    const countryTeamCost = countryCostPerEmployee * teamSize;
    const kosovoTeamCost = kosovoCostPerEmployee * teamSize;
    const annualSaving = countryTeamCost - kosovoTeamCost;
    const fiveYearSaving = annualSaving * 5;

    return { countryTeamCost, kosovoTeamCost, annualSaving, fiveYearSaving };
  }, [role, country, teamSize]);

  return (
    <>
      <Helmet>
        <title>Kosovo Hiring Cost Calculator | Compare Hiring Costs Across Europe | Elara EOR</title>
        <meta
          name="description"
          content="Estimate how much your company could save by hiring talent in Kosovo. Compare salary and employer costs across the UK, Germany, France, Spain and Italy."
        />
        <link rel="canonical" href="https://www.elara-eor.com/salary-calculator" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero / Intro */}
        <section className="pt-32 pb-16 px-4 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Compare Hiring Costs Across Europe
            </h1>
            <div className="space-y-4 text-muted-foreground text-lg max-w-3xl mx-auto">
              <p>
                Hiring internationally can dramatically change the cost structure of your team.
              </p>
              <p>
                This calculator provides an illustrative estimate of the employment cost difference
                between hiring in Western Europe and hiring in Kosovo through Elara's Employer of
                Record solution.
              </p>
              <p>
                Kosovo offers a highly educated workforce, strong English proficiency and
                significantly lower employment costs compared with Western Europe.
              </p>
              <p className="text-foreground font-medium">
                Use the calculator below to see the potential savings.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="pb-16 px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Inputs */}
              <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-8">
                <h2 className="text-xl font-semibold">Configure Your Team</h2>

                {/* Role */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Role</label>
                  <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((r) => (
                        <SelectItem key={r.value} value={r.value}>
                          {r.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Compare With
                  </label>
                  <Select value={country} onValueChange={(v) => setCountry(v as Country)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRIES.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-6">
                <h2 className="text-xl font-semibold">Your Estimated Savings</h2>

                {/* Country cost */}
                <div className="rounded-lg bg-secondary/50 p-5 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Your team in {selectedCountry.label}
                  </p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(results.countryTeamCost, selectedCountry.symbol)}
                    <span className="text-sm font-normal text-muted-foreground ml-2">/ year</span>
                  </p>
                </div>

                {/* Kosovo cost */}
                <div className="rounded-lg bg-secondary/50 p-5 space-y-1">
                  <p className="text-sm text-muted-foreground">Same team in Kosovo</p>
                  <p className="text-2xl font-bold text-primary">
                    €{Math.round(results.kosovoTeamCost).toLocaleString("en-GB")}
                    <span className="text-sm font-normal text-muted-foreground ml-2">/ year</span>
                  </p>
                </div>

                {/* Annual Saving */}
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-5 space-y-1">
                  <p className="text-sm text-muted-foreground">Estimated Annual Saving</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(results.annualSaving, selectedCountry.symbol)}
                  </p>
                </div>

                {/* 5-Year Saving */}
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-5 space-y-1">
                  <p className="text-sm text-muted-foreground">Estimated 5-Year Saving</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(results.fiveYearSaving, selectedCountry.symbol)}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center space-y-4">
              <Button asChild size="lg" className="btn-primary-glow border-0 text-lg px-10 py-6">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book a 30-minute hiring plan
                </a>
              </Button>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Want a more precise breakdown based on your hiring plan, salaries and team
                structure? Speak with Elara to create a tailored hiring strategy.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 rounded-lg bg-secondary/30 p-6 text-sm text-muted-foreground">
              <p className="font-medium mb-2">Disclaimer</p>
              <p>
                These figures are illustrative benchmark estimates based on publicly available
                salary data. Actual employment costs vary depending on experience, seniority,
                benefits and company structure. Elara can provide a precise cost breakdown during
                consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Kosovo */}
        <section className="pb-20 px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Why companies hire in Kosovo</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
              {[
                "Lower employment costs",
                "Highly educated workforce",
                "Strong English proficiency",
                "European time zone alignment",
                "No need to open a local entity",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <CookieConsent />
      </div>
    </>
  );
};

export default SalaryCalculator;
