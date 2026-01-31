import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "We now have full-time employees working directly for us in Kosovo without setting up a legal entity — paying around £500 per employee per month instead of £3–4k in the UK, while Elara handles payroll, tax and compliance end-to-end.",
    author: "Mezz Zare",
    role: "CEO",
    company: "Onsync.ai",
  },
  {
    quote: "The speed was incredible. We went from initial conversation to having our first developer fully onboarded in just 10 days. No legal complexity, no compliance headaches.",
    author: "Ahmed Gaal",
    role: "Co-Founder",
    company: "Clientswoop",
  },
  {
    quote: "Elara made hiring in Kosovo feel as simple as hiring locally. Their team handles everything from contracts to tax filings. We just manage the work.",
    author: "Emma Rodriguez",
    role: "VP of Engineering",
    company: "CloudBase Systems",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Growing Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Companies across the UK and EU are building their Kosovo teams with Elara
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
