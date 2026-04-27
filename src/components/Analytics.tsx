import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = "G-H5VFM9SQCC";

/**
 * Fires a GA4 page_view on every route change (including initial load and
 * back/forward navigation). The base gtag config has send_page_view disabled
 * (in index.html) so this is the single source of page_view events — no
 * duplicates on first load.
 */
const Analytics = () => {
  const { pathname, search } = useLocation();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    const path = pathname + search;
    if (lastTracked.current === path) return;
    lastTracked.current = path;

    // Defer one tick so route components have a chance to update document.title
    const id = window.setTimeout(() => {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", "page_view", {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
        send_to: MEASUREMENT_ID,
      });
    }, 0);

    return () => window.clearTimeout(id);
  }, [pathname, search]);

  return null;
};

export default Analytics;
