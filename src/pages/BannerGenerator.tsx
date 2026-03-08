import { useEffect, useRef, useState } from "react";

const BannerGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1584;
    canvas.height = 396;

    // Draw the gradient background programmatically
    const bgGrad = ctx.createLinearGradient(0, 0, 1584, 396);
    bgGrad.addColorStop(0, "#0a0520");
    bgGrad.addColorStop(0.3, "#120830");
    bgGrad.addColorStop(0.6, "#2d1055");
    bgGrad.addColorStop(0.85, "#4a1a7a");
    bgGrad.addColorStop(1, "#5c2090");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1584, 396);

    // Draw flowing wave effect
    drawWaves(ctx);

    // Draw text
    drawText(ctx);

    setReady(true);
  }, []);

  const drawWaves = (ctx: CanvasRenderingContext2D) => {
    // Wave 1 - main flowing wave
    ctx.save();
    ctx.globalAlpha = 0.4;
    const waveGrad = ctx.createLinearGradient(0, 200, 1584, 350);
    waveGrad.addColorStop(0, "#d946ef");
    waveGrad.addColorStop(0.3, "#a855f7");
    waveGrad.addColorStop(0.6, "#7c3aed");
    waveGrad.addColorStop(1, "#c084fc");

    ctx.strokeStyle = waveGrad;
    ctx.lineWidth = 2;

    for (let w = 0; w < 8; w++) {
      ctx.beginPath();
      ctx.globalAlpha = 0.15 - w * 0.015;
      for (let x = 0; x <= 1584; x += 2) {
        const y =
          280 +
          Math.sin((x / 200) + w * 0.3) * 40 +
          Math.sin((x / 120) + w * 0.5) * 20 +
          Math.cos((x / 300) + w * 0.2) * 30 -
          w * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Glow effect along the wave
    ctx.globalAlpha = 0.15;
    const glowGrad = ctx.createRadialGradient(400, 300, 10, 400, 300, 200);
    glowGrad.addColorStop(0, "#d946ef");
    glowGrad.addColorStop(1, "transparent");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(200, 200, 400, 196);

    const glowGrad2 = ctx.createRadialGradient(1100, 280, 10, 1100, 280, 250);
    glowGrad2.addColorStop(0, "#a855f7");
    glowGrad2.addColorStop(1, "transparent");
    ctx.fillStyle = glowGrad2;
    ctx.fillRect(850, 150, 500, 246);

    // Sparkle particles
    ctx.globalAlpha = 0.6;
    for (let i = 0; i < 60; i++) {
      const px = Math.random() * 1584;
      const py = 200 + Math.random() * 180;
      const size = Math.random() * 2;
      ctx.fillStyle = `rgba(200, 160, 255, ${Math.random() * 0.5})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  };

  const drawText = (ctx: CanvasRenderingContext2D) => {
    ctx.textAlign = "center";
    const centerX = 850; // slightly right of center

    // Headline
    ctx.fillStyle = "white";
    ctx.font = "bold 52px 'Inter', 'Segoe UI', Arial, sans-serif";
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 10;
    ctx.fillText("Hire & Manage Teams in Kosovo", centerX, 155);

    // Subheadline
    ctx.font = "600 34px 'Inter', 'Segoe UI', Arial, sans-serif";
    ctx.shadowBlur = 8;
    ctx.fillText("Employer of Record for UK & EU Companies", centerX, 215);

    // Supporting text
    ctx.font = "300 21px 'Inter', 'Segoe UI', Arial, sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    ctx.shadowBlur = 5;
    ctx.fillText(
      "Build compliant remote or in-office teams without opening a local entity.",
      centerX,
      268
    );

    ctx.shadowBlur = 0;
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "elara-linkedin-banner.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-foreground text-2xl font-bold">LinkedIn Banner Preview (1584×396)</h1>
      <canvas
        ref={canvasRef}
        width={1584}
        height={396}
        className="border border-border max-w-full"
      />
      {ready && (
        <button
          onClick={handleDownload}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold"
        >
          Download Banner
        </button>
      )}
      <p className="text-muted-foreground text-sm">
        Click download to save the banner as a PNG file, then upload it to your LinkedIn company page.
      </p>
    </div>
  );
};

export default BannerGenerator;
