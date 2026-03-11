import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update canonical URL per route
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const url = pathname === "/" ? "https://elara-eor.com/" : `https://elara-eor.com${pathname}`;
      canonical.setAttribute("href", url);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
