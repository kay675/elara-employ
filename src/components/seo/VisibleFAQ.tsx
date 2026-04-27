import { Helmet } from "react-helmet-async";

export interface FaqItem {
  question: string;
  answer: string;
}

interface VisibleFAQProps {
  heading?: string;
  faqs: FaqItem[];
  /** When true, also injects FAQPage JSON-LD via react-helmet. */
  includeSchema?: boolean;
}

/**
 * Fully visible, crawlable FAQ block (no accordion required for the answer text).
 * Designed for AEO/GEO so AI assistants can extract Q&A directly.
 */
const VisibleFAQ = ({ heading = "Frequently asked questions", faqs, includeSchema = true }: VisibleFAQProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">{heading}</span>
          </h2>
        </div>
        <div className="glass-card p-6 md:p-8 space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="pb-6 border-b border-border/50 last:border-0 last:pb-0">
              <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      {includeSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
    </section>
  );
};

export default VisibleFAQ;
