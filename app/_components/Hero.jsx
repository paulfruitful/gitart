"use client";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridWidth = 52;
    const gridHeight = 7;
    const boxSize = 15;
    const boxSpacing = 3;

    const colors = ["#334155", "#0e4429", "#006d32", "#26a641", "#39d353"];
    const boxes = [];

    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        boxes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          size: boxSize,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      boxes.forEach((box) => {
        box.x += box.dx;
        box.y += box.dy;

        if (box.x < 0 || box.x > canvas.width - box.size) box.dx *= -1;
        if (box.y < 0 || box.y > canvas.height - box.size) box.dy *= -1;

        ctx.fillStyle = box.color;
        ctx.fillRect(box.x, box.y, box.size, box.size);
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle canvas resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative text-[#f1f1f1] py-16 px-6 h-[50vh] lg:h-[80vh] grid text-center w-full overflow-x-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10" />

      {/* Hero Content */}
      <div className="max-w-4xl justify-self-center self-center mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#00d9d9]">
          Design Your GitHub Contributions
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-white">
          Give your GitHub Contributions Beauty, a Pattern, ande a Style
        </p>
        <a
          href="#grid"
          className="bg-[#00d9d9] text-[#1e1e2f] font-semibold py-3 px-6 rounded-md flex items-center justify-center space-x-2 hover:bg-[#00b8b8] transition duration-300"
        >
          <span>Start Styling</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
