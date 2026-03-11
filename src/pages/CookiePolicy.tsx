import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: 30 January 2026</p>

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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Cookie Policy, please contact:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Elara<br />
              Email: kay@elara-ero.com
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

export default CookiePolicy;
