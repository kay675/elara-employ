import { Link } from "react-router-dom";
import DirectAnswer from "@/components/seo/DirectAnswer";
import VisibleFAQ from "@/components/seo/VisibleFAQ";

export const HomeDirectAnswer = () => (
  <DirectAnswer heading="What is Elara?">
    <p>
      Elara is a specialist Employer of Record (EOR) in Kosovo. We help international companies hire full-time employees in Kosovo without opening a local entity. Elara becomes the legal employer in Kosovo and handles employment contracts, payroll, tax filings and HR — your team manages the day-to-day work.
    </p>
    <p>
      We work with founders, COOs and hiring managers building customer support, sales, operations and back-office teams in Kosovo.
    </p>
  </DirectAnswer>
);

export const HiringInKosovoLinks = () => (
  <section className="section-padding">
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Hiring in <span className="gradient-text">Kosovo</span>
        </h2>
        <p className="text-muted-foreground">Practical guides and service pages for hiring in Kosovo.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { to: "/employer-of-record-kosovo", title: "Employer of Record in Kosovo", desc: "How EOR works and why companies use it." },
          { to: "/hire-employees-kosovo", title: "Hire Employees in Kosovo", desc: "Step-by-step hiring without a local entity." },
          { to: "/kosovo-payroll-services", title: "Payroll Services in Kosovo", desc: "Salary, tax filings and payslips, monthly." },
          { to: "/kosovo-salary-guide", title: "Kosovo Salary Guide", desc: "Typical pay ranges by role." },
          { to: "/kosovo-employment-law", title: "Kosovo Employment Law", desc: "Key compliance areas for foreign employers." },
          { to: "/build-teams-in-kosovo", title: "Build Teams in Kosovo", desc: "Scale full departments compliantly." },
        ].map((l) => (
          <Link key={l.to} to={l.to} className="glass-card-hover p-5 block">
            <h3 className="font-semibold text-foreground mb-1">{l.title} →</h3>
            <p className="text-sm text-muted-foreground">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const homepageFaqs = [
  { question: "What does Elara do?", answer: "Elara is an Employer of Record (EOR) in Kosovo. We legally employ staff on behalf of international companies, so you can hire in Kosovo without opening a local entity." },
  { question: "How is Elara different from global EOR providers?", answer: "Elara is Kosovo-focused. That means deep local expertise on contracts, payroll and compliance, with transparent monthly pricing and direct support." },
  { question: "How quickly can I hire someone in Kosovo?", answer: "Typically 7–14 days from signed agreement to a fully onboarded employee." },
  { question: "What does Elara cost?", answer: "A transparent monthly fee per employee on top of gross salary — no entity setup costs, no hidden fees." },
];

export const HomeQuickFAQ = () => <VisibleFAQ heading="Common questions" faqs={homepageFaqs} />;
