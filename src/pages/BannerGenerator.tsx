import { useEffect, useRef } from "react";

const BannerGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/elara-linkedin-banner-v2.png";

    img.onload = () => {
      // Draw background image
      canvas.width = 1584;
      canvas.height = 396;
      ctx.drawImage(img, 0, 0, 1584, 396);

      // Cover existing text area with a gradient patch
      const gradient = ctx.createLinearGradient(0, 0, 1584, 0);
      // Sample colors from the background
      gradient.addColorStop(0, "rgba(20, 5, 50, 0.95)");
      gradient.addColorStop(0.3, "rgba(30, 10, 60, 0.92)");
      gradient.addColorStop(0.5, "rgba(50, 15, 80, 0.85)");
      gradient.addColorStop(0.7, "rgba(60, 20, 100, 0.88)");
      gradient.addColorStop(1, "rgba(80, 30, 120, 0.92)");

      // Paint over old text region (center area)
      ctx.fillStyle = gradient;
      ctx.fillRect(300, 80, 1000, 260);

      // Redraw the wave from the original image by not covering it fully
      // Actually let's just use the clean background approach
      // Re-draw the full background
      ctx.drawImage(img, 0, 0, 1584, 396);

      // Now overlay semi-transparent layer to soften any text
      // Actually, better approach: just draw new text on top matching the design
      // The v2 background is close enough, let's overlay corrected text

      // Clear center text area with background-matching gradient  
      const grd = ctx.createLinearGradient(350, 0, 1250, 396);
      grd.addColorStop(0, "rgba(25, 8, 55, 0.98)");
      grd.addColorStop(0.5, "rgba(55, 18, 90, 0.97)");
      grd.addColorStop(1, "rgba(75, 25, 110, 0.98)");
      ctx.fillStyle = grd;
      ctx.fillRect(350, 70, 900, 270);

      // Draw text
      ctx.textAlign = "center";
      ctx.fillStyle = "white";

      // Headline
      ctx.font = "bold 52px 'Inter', 'Segoe UI', sans-serif";
      ctx.fillText("Hire & Manage Teams in Kosovo", 792, 160);

      // Subheadline
      ctx.font = "bold 34px 'Inter', 'Segoe UI', sans-serif";
      ctx.fillText("Employer of Record for UK & EU Companies", 792, 220);

      // Supporting text
      ctx.font = "300 22px 'Inter', 'Segoe UI', sans-serif";
      ctx.fillText(
        "Build compliant remote or in-office teams without opening a local entity.",
        792,
        270
      );
    };
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "elara-linkedin-banner.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-white text-2xl font-bold">LinkedIn Banner Preview</h1>
      <canvas
        ref={canvasRef}
        width={1584}
        height={396}
        className="border border-white/20 max-w-full"
      />
      <button
        onClick={handleDownload}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Download Banner (1584×396)
      </button>
    </div>
  );
};

export default BannerGenerator;
