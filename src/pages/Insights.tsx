import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";

const articles = [
  {
    to: "/insights/hire-employees-kosovo-without-entity",
    title: "How to hire employees in Kosovo without setting up a local entity",
    desc: "A practical guide to hiring full-time staff in Kosovo via an Employer of Record.",
  },
  {
    to: "/insights/employer-of-record-kosovo-how-it-works",
    title: "Employer of Record in Kosovo: how it works",
    desc: "What an EOR is, the legal model in Kosovo, and what to expect step-by-step.",
  },
  {
    to: "/insights/kosovo-payroll-guide-uk-eu-companies",
    title: "Kosovo payroll guide for UK and EU companies",
    desc: "Currency, taxes, social contributions and payslip basics for foreign employers.",
  },
];

const Insights = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Insights & Guides | Hiring in Kosovo | Elara</title>
      <meta name="description" content="Practical guides on hiring, payroll and employment law in Kosovo for international companies." />
      <link rel="canonical" href="https://elara-eor.com/insights" />
    </Helmet>
    <Navigation />
    <main>
      <section className="section-padding pt-32 md:pt-40 lg:pt-48">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Insights</span> & guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, no-fluff guides on hiring, payroll and employment in Kosovo for UK and EU companies.
          </p>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-4xl grid md:grid-cols-1 gap-4">
          {articles.map((a) => (
            <Link key={a.to} to={a.to} className="glass-card-hover p-6 block">
              <h2 className="text-xl font-bold mb-2 text-foreground">{a.title} →</h2>
              <p className="text-muted-foreground">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    <CookieConsent />
  </div>
);

export default Insights;
