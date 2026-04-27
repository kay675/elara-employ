import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CTA_LINK } from "@/lib/booking";

interface ArticleLayoutProps {
  title: string;
  description: string;
  canonical: string;
  datePublished?: string;
  summary: string;
  children: ReactNode;
  related?: { to: string; label: string }[];
}

const ArticleLayout = ({
  title,
  description,
  canonical,
  datePublished = "2026-04-27",
  summary,
  children,
  related = [],
}: ArticleLayoutProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Organization", name: "Elara EOR" },
    publisher: {
      "@type": "Organization",
      name: "Elara EOR",
      logo: { "@type": "ImageObject", url: "https://elara-eor.com/og-image.png" },
    },
    mainEntityOfPage: canonical,
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Navigation />
      <main>
        <article className="section-padding pt-32 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4">
              <Link to="/insights" className="hover:underline">Insights</Link> /
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <div className="glass-card p-6 md:p-8 mb-10">
              <h2 className="text-lg font-semibold mb-2">In short</h2>
              <p className="text-muted-foreground leading-relaxed">{summary}</p>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline">
              {children}
            </div>

            <div className="glass-card glow-purple p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Hire in Kosovo with Elara</h2>
              <Button asChild size="lg" className="btn-primary-glow border-0">
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Call <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

            {related.length > 0 && (
              <div className="glass-card p-6 md:p-8 mt-10">
                <h2 className="font-bold text-xl mb-4">Related resources</h2>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.to}>
                      <Link to={r.to} className="text-primary hover:underline">{r.label} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ArticleLayout;
