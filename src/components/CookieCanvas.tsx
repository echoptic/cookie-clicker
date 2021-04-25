import React, { useEffect } from 'react';

const CookieCanvas: React.FC = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.fillRect(50, 50, 50, 50);
    let mouse = {
      x: 0,
      y: 0,
    };

    const particlesArray: any[] = [];

    canvas.addEventListener('mousedown', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;

      particlesArray.push(new FloatingNumber());
      console.log(particlesArray);
    });

    class FloatingNumber {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = 50;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = -1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 9) this.size -= 0.3;
      }
      draw() {
        ctx.font = `${this.size}px monospace`;
        ctx.textBaseline = 'hanging';
        ctx.strokeText('+1', this.x, this.y);
      }
    }

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 20) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    }
    animate();
  });

  return <canvas className="click-canvas" height="400" width="400"></canvas>;
};

export default CookieCanvas;
