export const CTA_LINK = "https://calendar.app.google/aMeKYh884UyKZX9j9";

export const openBooking = (e: React.MouseEvent) => {
  e.preventDefault();
  window.open(CTA_LINK, "_blank", "noopener,noreferrer");
};
