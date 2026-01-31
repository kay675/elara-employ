import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import elaraLogo from "@/assets/elara-logo.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={elaraLogo} alt="Elara" className="h-10 w-auto" />
          </Link>
          <Button asChild variant="ghost">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 md:px-8 py-12">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 30 January 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elara ("Elara", "we", "us") respects your privacy and is committed to protecting personal data. This Privacy Policy explains how we collect, use, and safeguard personal information when operating our business and delivering our Employee of Record (EOR) and related services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This policy applies to individuals who interact with us, including clients, prospective clients, employees engaged through Elara, candidates, business partners, and visitors to our website.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Elara trades under the name Elara and supports businesses hiring and employing talent in Albania and other jurisdictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              For the purposes of applicable data protection law, Elara acts as a data controller where we determine how and why personal data is processed, and as a data processor where we process personal data on behalf of our clients.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Legal entity: Elara sh.p.k.</li>
              <li>Registered office: [Pending]</li>
              <li>Operational jurisdiction: Republic of Albania</li>
              <li>UK correspondence address (non-establishment): 25 Oriental Square, London, NW9 0FR</li>
              <li>Contact: kay@elara-ero.com</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you have questions about this policy or how we handle personal data, you can contact us using the details above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Legal Basis</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process personal data in accordance with applicable data protection legislation, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Regulation (EU) 2016/679 (General Data Protection Regulation – GDPR)</li>
              <li>Albanian Law No. 9887 "On the Protection of Personal Data", as amended</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Where we process personal data relating to individuals located in the United Kingdom, we also comply with the UK General Data Protection Regulation (UK GDPR) to the extent applicable.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Where relevant, we also comply with Albanian employment and labour laws when processing employee data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Personal Data We Handle</h2>
            <p className="text-muted-foreground leading-relaxed">
              The personal data we collect depends on the nature of your relationship with Elara.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Business and Client Contacts</h3>
            <p className="text-muted-foreground leading-relaxed">
              This may include names, job titles, business contact details, contractual information, billing details, and communications.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Employees and Candidates</h3>
            <p className="text-muted-foreground leading-relaxed">
              This may include identification documents, contact details, employment history, qualifications, payroll and tax information, bank details, right-to-work documentation, and information required to manage employment relationships.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Website and Technical Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you use our website, we may collect technical information such as IP address, browser type, device information, and usage data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. How We Collect Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect personal data directly from you, from our clients where necessary to provide EOR services, from third-party providers such as payroll or compliance partners, and automatically through our website and systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Why We Use Personal Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process personal data only where permitted by law, including where it is necessary:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>To enter into or perform contracts</li>
              <li>To provide EOR, payroll, HR, and employment services</li>
              <li>To meet legal, tax, and regulatory obligations</li>
              <li>To operate, manage, and improve our business</li>
              <li>To protect our systems, people, and clients</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Where consent is required, we will seek it explicitly and it can be withdrawn at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Sharing Personal Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We share personal data only where necessary and proportionate. This may include sharing data with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Clients, where required to deliver EOR services</li>
              <li>Payroll, benefits, HR, and compliance providers</li>
              <li>Professional advisers such as lawyers and accountants</li>
              <li>Regulators or authorities where legally required</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All third parties are required to protect personal data appropriately and to use it only for agreed purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              In order to provide our services, personal data may be transferred between Albania, the European Economic Area, the United Kingdom, and other jurisdictions where our clients or service providers are located.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Where personal data is transferred internationally, we ensure appropriate safeguards are in place in accordance with applicable data protection law, including standard contractual clauses or other lawful transfer mechanisms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elara maintains safeguards including access controls, encryption, staff training, and incident response procedures appropriate to the nature of the data processed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including to meet legal, regulatory, and contractual requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Retention periods vary depending on the type of data and applicable obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have rights in relation to your personal data, including the right to access, correct, delete, restrict, or object to certain processing, and the right to data portability.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Requests can be made by contacting kay@elara-ero.com.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You also have the right to lodge a complaint with the supervisory authority in the country where you reside, work, or where an alleged infringement has occurred. For data processing carried out by Elara as an Albanian-established entity, the relevant authority is the Albanian Commissioner for the Right to Information and Protection of Personal Data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies on our website. Further information is available in our Cookie Policy below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in law or technology.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle personal data, please contact:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Elara<br />
              Email: kay@elara-ero.com
            </p>
          </section>

          {/* Albania Employment Privacy Addendum */}
          <div className="border-t border-border my-12 pt-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Albania-Localised Employment Privacy Addendum</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Albania Employment Privacy Notice (Supplement)</h2>
              <p className="text-muted-foreground leading-relaxed">
                This supplement applies where Elara provides Employee of Record services involving individuals employed or engaged in Albania.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Local Legal Context</h2>
              <p className="text-muted-foreground leading-relaxed">
                In addition to UK and EU data protection law, Elara processes employee personal data in line with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Albanian Labour Code</li>
                <li>Albanian Law No. 9887 "On the Protection of Personal Data" (as amended)</li>
                <li>Guidance issued by the Albanian Commissioner for the Right to Information and Protection of Personal Data</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Where Albanian law imposes stricter requirements, those requirements prevail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Categories of Employee Data (Albania)</h2>
              <p className="text-muted-foreground leading-relaxed">
                For employees engaged in Albania, Elara may process additional data required under local law, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>National identification numbers</li>
                <li>Employment contracts and amendments</li>
                <li>Salary, tax, pension, and social insurance records</li>
                <li>Health declarations where legally required</li>
                <li>Leave, working time, and statutory benefit records</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This data is processed strictly for employment, compliance, and payroll purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Local Processing & Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain employee data may be:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Stored locally in Albania where required by law</li>
                <li>Accessed by local payroll providers, accountants, or authorities</li>
                <li>Retained in accordance with Albanian statutory retention periods</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All such processing is subject to confidentiality obligations and appropriate safeguards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclosure to Authorities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Employee data may be disclosed to Albanian authorities, including tax, labour, or social insurance bodies, where required by law or regulation.
              </p>
            </section>
          </div>

          {/* Data Processing Agreement */}
          <div className="border-t border-border my-12 pt-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Data Processing Agreement (DPA)</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This Data Processing Agreement ("DPA") forms part of the agreement between Elara ("Processor") and the client ("Controller") under which Elara provides Employee of Record and related services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Roles of the Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                1.1 The Client acts as Data Controller in respect of personal data relating to individuals it engages through Elara.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                1.2 Elara acts as Data Processor, processing personal data on documented instructions from the Client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Scope of Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elara will process personal data solely for the purpose of:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Providing EOR, payroll, HR, and employment administration services</li>
                <li>Complying with applicable employment and regulatory obligations</li>
                <li>Performing obligations under the parties' agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Categories of Data & Data Subjects</h2>
              <h3 className="text-xl font-semibold mt-4 mb-2">Data Subjects</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Employees and candidates engaged by the Client</li>
                <li>Client personnel and authorised users</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">Personal Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Identification and contact details</li>
                <li>Employment and payroll data</li>
                <li>Tax, social security, and benefits data</li>
                <li>Performance and compliance records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Processor Obligations</h2>
              <p className="text-muted-foreground leading-relaxed">Elara shall:</p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Process personal data only on documented instructions from the Client</li>
                <li>Ensure personnel are bound by confidentiality obligations</li>
                <li>Implement appropriate technical and organisational security measures</li>
                <li>Assist the Client with data subject requests where applicable</li>
                <li>Notify the Client without undue delay of any personal data breach</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sub-Processors</h2>
              <p className="text-muted-foreground leading-relaxed">
                5.1 The Client authorises Elara to engage sub-processors for payroll, IT, compliance, and professional services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                5.2 Elara will ensure sub-processors are subject to equivalent data protection obligations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                5.3 A current list of sub-processors will be made available on request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Where personal data is transferred outside the UK or EEA, Elara shall ensure appropriate safeguards are in place, including Standard Contractual Clauses or other lawful mechanisms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Security Measures</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elara maintains safeguards including access controls, encryption, staff training, and incident response procedures appropriate to the nature of the data processed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Data Subject Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elara will assist the Client, where reasonably requested, in responding to data subject access requests, rectification, deletion, or restriction requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Deletion or Return of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination of services, Elara will, at the Client's option, delete or return personal data unless retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each party's liability under this DPA shall be subject to the liability limitations set out in the main agreement, except where prohibited by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                This DPA shall be governed by English law, and the courts of England shall have exclusive jurisdiction.
              </p>
            </section>
          </div>

          {/* Cookie Policy */}
          <div className="border-t border-border my-12 pt-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They help the site function properly and provide insights into how it is used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies We Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the following categories of cookies:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li><strong>Strictly Necessary Cookies:</strong> Required for the website to function and cannot be switched off.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website so we can improve performance.</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalisation.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and measure campaign effectiveness.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can manage or withdraw consent at any time through your browser settings or our cookie preferences tool.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in law or technology.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elara — Employer of Record in Kosovo
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
