import { createRef, memo, useEffect } from "react";

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
};

const generateSize = () => {
  const size = Math.random() * 200;
  const clamped = size < 100 ? 100 : size;

  return clamped;
};

const generateSpeed = () => {
  const vx = Math.random() - 0.5;
  const vy = Math.random() + 0.8;
  return { vx, vy };
};

class Particle {
  private x: number = Math.random() * window.innerWidth;
  private y: number = Math.random() * window.innerHeight;
  private size: number;

  private vx: number;
  private vy: number;

  constructor() {
    const { vx, vy } = generateSpeed();
    this.vx = vx;
    this.vy = vy;
    this.size = generateSize();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (
      this.x > window.innerWidth ||
      this.y > window.innerHeight ||
      this.x + this.size < 0 ||
      this.y + this.size < 0
    ) {
      // reset particle
      this.x = Math.random() * window.innerWidth;
      this.y = -100;

      const { vx, vy } = generateSpeed();
      this.vx = vx;
      this.vy = vy;
      this.size = generateSize();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#2222221f";
    // ctx.fillStyle = "#22222233";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

const AshesNoMemo: React.FC = () => {
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    for (let i = 0; i < window.innerWidth / 20; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      clearCanvas(ctx);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, [canvasRef]);

  return (
    <canvas className="fixed top-0 left-0 -z-50" ref={canvasRef}>
      Enable canvas!
    </canvas>
  );
};

export const Ashes = memo(AshesNoMemo);
Ashes.displayName = "Ashes";
