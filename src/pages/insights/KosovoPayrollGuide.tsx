import { Link } from "react-router-dom";
import ArticleLayout from "./ArticleLayout";

const KosovoPayrollGuide = () => (
  <ArticleLayout
    title="Kosovo payroll guide for UK and EU companies"
    description="A practical Kosovo payroll guide for UK and EU companies covering currency, taxes, social contributions, payslips and how to run payroll without a local entity."
    canonical="https://elara-eor.com/insights/kosovo-payroll-guide-uk-eu-companies"
    summary="Payroll in Kosovo is paid monthly in euros and is subject to income tax and pension contributions. UK and EU companies can run payroll without a local entity by using an Employer of Record, which calculates pay, files taxes and issues compliant payslips."
    related={[
      { to: "/kosovo-payroll-services", label: "Payroll Services in Kosovo" },
      { to: "/kosovo-salary-guide", label: "Kosovo Salary Guide" },
      { to: "/employer-of-record-kosovo", label: "Employer of Record in Kosovo" },
    ]}
  >
    <h2>The basics of Kosovo payroll</h2>
    <ul>
      <li>Currency: euro (EUR).</li>
      <li>Frequency: monthly.</li>
      <li>Payslips: required for every employee.</li>
      <li>Filings: monthly income tax and pension contributions.</li>
    </ul>

    <h2>Income tax</h2>
    <p>Personal income tax in Kosovo is applied on a progressive basis. The employer withholds tax at source and remits it monthly. Exact bands and thresholds are set by Kosovo tax law and updated periodically.</p>

    <h2>Social and pension contributions</h2>
    <p>Both employer and employee contribute to the mandatory pension scheme. Contributions are calculated as a percentage of gross salary and remitted monthly.</p>

    <h2>Statutory benefits</h2>
    <ul>
      <li>Paid annual leave (minimum 20 days).</li>
      <li>Public holidays.</li>
      <li>Sick leave under Kosovo labour law.</li>
    </ul>

    <h2>How UK and EU companies typically run Kosovo payroll</h2>
    <h3>Option 1: Open a local entity</h3>
    <p>Requires Kosovo company registration, a local accountant and ongoing reporting. Suitable for large, long-term operations.</p>
    <h3>Option 2: Use an Employer of Record</h3>
    <p>The EOR becomes the legal employer and runs payroll, filings and payslips on your behalf. No local entity needed. See our <Link to="/kosovo-payroll-services">Kosovo payroll services</Link>.</p>

    <h2>What a monthly payroll cycle looks like via EOR</h2>
    <ul>
      <li>You confirm any salary changes, bonuses or absences.</li>
      <li>The EOR calculates gross-to-net for each employee.</li>
      <li>Salaries are paid in EUR to local bank accounts.</li>
      <li>Income tax and pension contributions are filed and remitted.</li>
      <li>Each employee receives a compliant payslip.</li>
      <li>You receive one consolidated monthly invoice.</li>
    </ul>

    <h2>Common questions</h2>
    <h3>Can I pay employees in GBP?</h3>
    <p>No. Kosovo employment payroll is paid in EUR.</p>
    <h3>Do I need a Kosovo bank account?</h3>
    <p>Not when using an EOR. You fund payroll via a single invoice in your preferred currency.</p>
    <h3>Are bonuses and commissions supported?</h3>
    <p>Yes — they are processed through standard monthly payroll and taxed accordingly.</p>
  </ArticleLayout>
);

export default KosovoPayrollGuide;
