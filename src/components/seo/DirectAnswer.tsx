interface DirectAnswerProps {
  heading?: string;
  children: React.ReactNode;
}

/**
 * AEO/GEO-friendly "direct answer" block placed below the hero.
 * Plain, crawlable text — no dropdowns, no hidden content.
 */
const DirectAnswer = ({ heading = "In short", children }: DirectAnswerProps) => {
  return (
    <section className="section-padding pt-0">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{heading}</h2>
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-3">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectAnswer;
