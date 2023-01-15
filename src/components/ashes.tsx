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

class Particle {
  private x: number = Math.random() * window.innerWidth;
  private y: number = Math.random() * window.innerHeight;
  private size: number;

  private vx: number;
  private vy: number;

  constructor() {
    this.vx = Math.random() - 0.5;
    this.vy = Math.random() - 0.5;
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
      this.y = Math.random() * window.innerHeight;

      this.vx = Math.random() - 0.5;
      this.vy = Math.random() - 0.5;
      this.size = generateSize();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#3333333f";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

export const Ashes = memo(() => {
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
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
});
