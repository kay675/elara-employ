export const CTA_LINK = "https://calendar.app.google/ZgtedFMv5cXSefYU9";

export const openBooking = (e: React.MouseEvent) => {
  e.preventDefault();
  window.open(CTA_LINK, "_blank", "noopener,noreferrer");
};
