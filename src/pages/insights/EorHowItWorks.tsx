import { Link } from "react-router-dom";
import ArticleLayout from "./ArticleLayout";

const EorHowItWorks = () => (
  <ArticleLayout
    title="Employer of Record in Kosovo: how it works"
    description="A clear explanation of how an Employer of Record works in Kosovo, the legal model, what the EOR handles and what your company is responsible for."
    canonical="https://elara-eor.com/insights/employer-of-record-kosovo-how-it-works"
    summary="An Employer of Record (EOR) in Kosovo is a local company that legally employs staff on behalf of overseas businesses. The EOR issues compliant employment contracts, runs payroll and files taxes, while the client company manages day-to-day work."
    related={[
      { to: "/employer-of-record-kosovo", label: "Employer of Record in Kosovo" },
      { to: "/kosovo-employment-law", label: "Kosovo Employment Law" },
      { to: "/build-teams-in-kosovo", label: "Build Teams in Kosovo" },
    ]}
  >
    <h2>What is an Employer of Record?</h2>
    <p>An Employer of Record (EOR) is a third-party organisation that becomes the legal employer of your staff in a country where you don't have an entity. The EOR is responsible for the employment relationship under local law; you remain responsible for the work.</p>

    <h2>How the model works in Kosovo</h2>
    <ul>
      <li>You select the candidate.</li>
      <li>The EOR (e.g. Elara) signs a Kosovo employment contract with the employee.</li>
      <li>The EOR runs payroll, files income tax and pension contributions and issues payslips.</li>
      <li>The EOR invoices your company monthly.</li>
      <li>You direct the employee's day-to-day work and priorities.</li>
    </ul>

    <h2>What the EOR handles</h2>
    <ul>
      <li>Compliant employment contracts in Albanian.</li>
      <li>Monthly payroll in EUR.</li>
      <li>Income tax and social/pension contributions.</li>
      <li>Statutory leave, public holidays and benefits administration.</li>
      <li>Onboarding, offboarding and HR support.</li>
    </ul>

    <h2>What you remain responsible for</h2>
    <ul>
      <li>Defining roles, responsibilities and KPIs.</li>
      <li>Managing day-to-day work and performance.</li>
      <li>Approving salary changes, promotions and terminations.</li>
    </ul>

    <h2>Compliance and risk</h2>
    <p>Using an EOR avoids the risk of contractor misclassification and ensures employees receive proper employment protections under Kosovo law. See <Link to="/kosovo-employment-law">Kosovo employment law</Link> for an overview.</p>

    <h2>How long does setup take?</h2>
    <p>Typically 7–14 days from signed agreement to a fully onboarded hire.</p>

    <h2>When to use an EOR in Kosovo</h2>
    <ul>
      <li>Testing Kosovo as a hiring market.</li>
      <li>Hiring a single role or a small team quickly.</li>
      <li>Avoiding the cost and time of opening a local entity.</li>
    </ul>
  </ArticleLayout>
);

export default EorHowItWorks;
