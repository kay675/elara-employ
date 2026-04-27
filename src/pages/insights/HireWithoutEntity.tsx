import { Link } from "react-router-dom";
import ArticleLayout from "./ArticleLayout";

const HireWithoutEntity = () => (
  <ArticleLayout
    title="How to hire employees in Kosovo without setting up a local entity"
    description="A practical guide for international companies on hiring full-time employees in Kosovo without registering a local company, using an Employer of Record."
    canonical="https://elara-eor.com/insights/hire-employees-kosovo-without-entity"
    summary="To hire employees in Kosovo without opening a local company, partner with an Employer of Record (EOR). The EOR becomes the legal employer in Kosovo, issues compliant employment contracts and handles payroll, tax and social contributions, while your business directs the day-to-day work."
    related={[
      { to: "/hire-employees-kosovo", label: "Hire Employees in Kosovo" },
      { to: "/employer-of-record-kosovo", label: "Employer of Record in Kosovo" },
      { to: "/kosovo-payroll-services", label: "Payroll Services in Kosovo" },
    ]}
  >
    <h2>Why companies hire in Kosovo</h2>
    <p>Kosovo offers a young, English-speaking workforce, competitive salary levels and European time zone alignment. It is increasingly used by UK and EU companies to build customer support, sales and operations teams.</p>

    <h2>Two common approaches</h2>
    <h3>1. Open a local entity</h3>
    <p>Setting up a Kosovo company gives you full control but takes months, requires local accounting, and only makes sense at scale.</p>
    <h3>2. Use an Employer of Record (EOR)</h3>
    <p>An EOR like <Link to="/employer-of-record-kosovo">Elara</Link> employs staff on your behalf. You skip the entity, the local accountant and the regulatory overhead.</p>

    <h2>How EOR hiring works, step by step</h2>
    <ul>
      <li>Define the role, salary and start date.</li>
      <li>The EOR issues a Kosovo-compliant employment contract.</li>
      <li>The employee signs and starts working for your team.</li>
      <li>The EOR runs monthly payroll and handles taxes and social contributions.</li>
      <li>You receive a single monthly invoice.</li>
    </ul>

    <h2>Typical timeline</h2>
    <p>Most hires are fully onboarded within 7–14 days from signed agreement.</p>

    <h2>What it costs</h2>
    <p>Pricing is usually a transparent monthly fee per employee on top of gross salary, with no entity setup costs. See indicative ranges in our <Link to="/kosovo-salary-guide">Kosovo Salary Guide</Link>.</p>

    <h2>Compliance considerations</h2>
    <p>Employment in Kosovo requires written contracts, paid annual leave, public holidays and social security contributions. A specialist EOR handles all of this. See our overview of <Link to="/kosovo-employment-law">Kosovo employment law</Link>.</p>

    <h2>When to choose EOR vs entity</h2>
    <ul>
      <li>Hiring 1–20 people: EOR is almost always the right call.</li>
      <li>Long-term, large operation (50+): consider an entity, but many companies stay on EOR much longer.</li>
    </ul>
  </ArticleLayout>
);

export default HireWithoutEntity;
