interface WhyElaraProps {
  heading?: string;
  points: string[];
}

/**
 * Concise, citation-friendly "Why companies choose Elara" block.
 * Plain text bullets — no hype, easy for AI systems to summarise.
 */
const WhyElara = ({ heading = "Why companies choose Elara", points }: WhyElaraProps) => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {heading}
          </h2>
          <ul className="space-y-3 text-foreground">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyElara;
