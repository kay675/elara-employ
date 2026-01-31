import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the popup slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="mx-auto max-w-4xl glass-card p-6 rounded-2xl border border-border shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to improve your experience, analyse site usage, and support our marketing efforts. 
              You can accept all cookies, reject non-essential cookies, or manage your preferences.
            </p>
          </div>
          <button
            onClick={handleRejectNonEssential}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleAcceptAll}
            className="btn-primary-glow border-0"
          >
            Accept all
          </Button>
          <Button
            onClick={handleRejectNonEssential}
            variant="outline"
            className="btn-secondary-glass border"
          >
            Reject non-essential
          </Button>
          <Link to="/privacy-policy" className="inline-flex items-center justify-center">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Manage preferences
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
