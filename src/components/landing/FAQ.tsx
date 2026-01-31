import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

const faqs = [
  {
    question: "Do I need to set up a legal entity in Kosovo?",
    answer: "No. That's the whole point of an Employer of Record. Elara becomes the legal employer in Kosovo on your behalf. We handle all local incorporation requirements, employment contracts, and legal compliance. You simply manage your team's day-to-day work.",
  },
  {
    question: "Is this compliant vs hiring contractors?",
    answer: "Yes, this is fully compliant. Using an EOR means your team members are genuine employees with proper employment contracts, benefits, and protections. This eliminates the risk of contractor misclassification, which is increasingly scrutinized by tax authorities across Europe.",
  },
  {
    question: "How fast can we hire someone?",
    answer: "Typically 7–14 days from signed agreement to fully onboarded employee. This includes drafting compliant employment contracts, setting up payroll, and completing all necessary registrations. Compare this to 6–12 months to set up your own legal entity.",
  },
  {
    question: "Who manages payroll, tax, and contracts?",
    answer: "Elara handles all of this end-to-end. We process monthly payroll, file all required tax returns, handle social security contributions, and maintain compliant employment contracts. You receive a simple monthly invoice and manage your team's work.",
  },
  {
    question: "Can we offer benefits or equipment?",
    answer: "Absolutely. We offer add-on packages for benefits administration (health insurance, pension contributions, etc.) and equipment leasing. We can also support visa and work permit applications for relocating employees.",
  },
  {
    question: "What does onboarding look like if I'm not HR/techy?",
    answer: "We handle everything. You share the job details and candidate information, and we take it from there. We draft contracts, handle legal requirements, set up payroll, and ensure compliance. You'll have a dedicated account manager to guide you through the process.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about hiring with Elara
          </p>
        </div>

        {/* Accordion */}
        <div className="glass-card p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 last:border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Let's talk.
          </p>
          <Button asChild size="lg" className="btn-primary-glow border-0 text-lg h-14">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Book 30 min Hiring Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
