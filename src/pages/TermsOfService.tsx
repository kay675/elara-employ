import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 md:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-foreground">Elara</span>
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: 30th January 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            These Terms of Service ("Terms") govern the provision of services by Elara ("Elara", "we", "us") to the client identified in the applicable order form or agreement ("Client", "you").
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            By entering into an agreement with Elara or using our services, you agree to be bound by these Terms.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. About Elara</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elara is an Employee of Record (EOR) services provider operating through a legal entity established in Albania.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Elara employs individuals in Albania on behalf of its clients and provides employment, payroll, HR, and compliance services in accordance with Albanian law and applicable international data protection requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Scope of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              2.1 Elara provides Employee of Record and related services, which may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Employment contracts under Albanian labour law</li>
              <li>Payroll processing, tax, and social insurance administration</li>
              <li>Statutory compliance and reporting</li>
              <li>HR administration and employment support</li>
              <li>Benefits administration where agreed</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              2.2 The precise scope of services will be set out in a written agreement, order form, or statement of work between the parties.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              2.3 Elara does not provide legal, tax, or immigration advice to the Client unless expressly agreed in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Employment Model & Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              3.1 Elara acts as the legal employer of individuals engaged under the EOR model.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              3.2 The Client retains full responsibility for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Day-to-day direction and supervision of work</li>
              <li>Task allocation, deliverables, and performance management</li>
              <li>Ensuring that work instructions are lawful and compliant</li>
              <li>Workplace health and safety obligations relating to the role</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              3.3 Nothing in these Terms creates a partnership, joint venture, or agency relationship between the parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Client Obligations</h2>
            <p className="text-muted-foreground leading-relaxed">The Client shall:</p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              4.1 Provide accurate and timely information required for employment, payroll, and compliance purposes.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              4.2 Ensure that all roles, responsibilities, and instructions comply with applicable laws, including Albanian labour law where relevant.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              4.3 Cooperate reasonably with Elara in connection with audits, compliance checks, or regulatory requests.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              4.4 Indemnify Elara against losses, penalties, or claims arising from inaccurate information, unlawful instructions, or Client-directed employment decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Fees and Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              5.1 Fees are as set out in the applicable order form or agreement.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              5.2 Unless otherwise agreed:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Fees are invoiced monthly in advance</li>
              <li>Payment terms are 14 days from invoice date</li>
              <li>All fees are exclusive of VAT or equivalent taxes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              5.3 Elara reserves the right to suspend services for overdue payments following reasonable written notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Employment Matters</h2>
            <p className="text-muted-foreground leading-relaxed">
              6.1 Employment contracts, employee rights, and statutory obligations are governed by Albanian labour law.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              6.2 Elara will administer employment matters in good faith and in accordance with local legal requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              6.3 The Client acknowledges that employment actions (including termination) may involve mandatory notice periods, severance, or statutory procedures which cannot be waived.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              6.4 Any termination or material employment change must be coordinated with Elara in advance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              7.1 Each party shall comply with applicable data protection laws, including the EU General Data Protection Regulation and Albanian data protection legislation.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              7.2 Where Elara processes personal data on behalf of the Client, such processing shall be governed by the Data Processing Agreement (DPA) between the parties.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              7.3 Further information is set out in Elara's Privacy Policy and Employee Privacy Notices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              8.1 Each party shall keep confidential any non-public information disclosed in connection with the services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              8.2 Confidential information may be disclosed only:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Where required by law or regulation</li>
              <li>To professional advisers under confidentiality obligations</li>
              <li>With the other party's prior written consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              8.3 These obligations survive termination of the agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              9.1 Each party retains ownership of its pre-existing intellectual property.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              9.2 No intellectual property rights are transferred unless expressly agreed in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Warranties and Disclaimers</h2>
            <p className="text-muted-foreground leading-relaxed">
              10.1 Elara warrants that it will provide the services with reasonable skill and care.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              10.2 Except as expressly stated, all warranties and conditions are excluded to the fullest extent permitted by law.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              10.3 Elara does not guarantee any commercial, financial, or employment outcome for the Client.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              11.1 Neither party shall be liable for indirect, incidental, or consequential losses.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              11.2 Elara's total aggregate liability arising out of or in connection with the services shall not exceed the total fees paid by the Client in the 12 months preceding the event giving rise to the claim.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              11.3 Nothing in these Terms limits liability for fraud, wilful misconduct, or liabilities which cannot be excluded by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Term and Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              12.1 The agreement shall continue for the term specified in the applicable order form.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              12.2 Either party may terminate for material breach that remains unremedied following written notice.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              12.3 Upon termination:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>All outstanding fees become immediately due</li>
              <li>Employment matters shall be handled in accordance with Albanian law</li>
              <li>Personal data shall be handled in line with the DPA and Privacy Policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Neither party shall be liable for failure or delay in performance due to events beyond its reasonable control, including governmental actions, regulatory changes, or infrastructure failures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the Republic of Albania.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              The courts of Albania shall have exclusive jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. General</h2>
            <p className="text-muted-foreground leading-relaxed">
              15.1 These Terms constitute the entire agreement between the parties in relation to the services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              15.2 Amendments must be agreed in writing and signed by both parties.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              15.3 If any provision is found unenforceable, the remaining provisions remain in full force and effect.
            </p>
          </section>
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

export default TermsOfService;
