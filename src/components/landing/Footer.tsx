import { Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import elaraLogo from "@/assets/elara-logo-original.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      const sectionId = href.replace("#", "");

      if (location.pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/?scrollTo=" + sectionId);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <footer className="border-t border-border relative z-[50]">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-3">
              <img src={elaraLogo} alt="Elara" className="h-20 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Kosovo's Employer of Record. Helping UK & EU companies build 
              compliant, full-time teams in Kosovo — fast.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:aaron@elara-ero.com"
                className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleAnchorClick(e, "#how-it-works")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleAnchorClick(e, "#pricing")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link to="/candidates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Candidates
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleAnchorClick(e, "#faq")}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Hiring in Kosovo */}
          <div>
            <h4 className="font-semibold mb-4">Hiring in Kosovo</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/employer-of-record-kosovo" className="text-muted-foreground hover:text-foreground transition-colors">
                  Employer of Record in Kosovo
                </Link>
              </li>
              <li>
                <Link to="/hire-employees-kosovo" className="text-muted-foreground hover:text-foreground transition-colors">
                  Hire Employees in Kosovo
                </Link>
              </li>
              <li>
                <Link to="/kosovo-payroll-services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Payroll Services in Kosovo
                </Link>
              </li>
              <li>
                <Link to="/kosovo-salary-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kosovo Salary Guide
                </Link>
              </li>
              <li>
                <Link to="/kosovo-employment-law" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kosovo Employment Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:aaron@elara-ero.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Elara — Employer of Record in Kosovo
          </p>
          <p className="text-sm text-muted-foreground">
            Built for UK & EU companies hiring globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
