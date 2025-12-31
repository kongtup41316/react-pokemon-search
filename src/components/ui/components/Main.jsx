import { useEffect, useRef } from 'react';

export default function Main() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        const starCount = 800;

        // Create stars distributed across entire screen
        for (let i = 0; i < starCount; i++) {
            const size = Math.random();
            let color;
            if (size > 0.95) {
                color = { r: 200, g: 220, b: 255 }; // Blue-white
            } else if (size > 0.9) {
                color = { r: 255, g: 240, b: 220 }; // Yellow-white
            } else if (size > 0.85) {
                color = { r: 255, g: 200, b: 180 }; // Orange
            } else {
                color = { r: 255, g: 255, b: 255 }; // White
            }
            
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                baseX: Math.random() * canvas.width,
                baseY: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.7 + 0.3,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                direction: Math.random() > 0.5 ? 1 : -1,
                jiggleSpeed: Math.random() * 0.02 + 0.01,
                jiggleAmount: Math.random() * 2 + 1,
                color: color
            });
            stars[i].baseX = stars[i].x;
            stars[i].baseY = stars[i].y;
        }

        let time = 0;
        const mouse = { x: -1000, y: -1000 };
        const repelDistance = 100;

        canvas.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        canvas.addEventListener('mouseleave', () => {
            mouse.x = -1000;
            mouse.y = -1000;
        });

        function animate() {
            time += 0.01;

            // Deep space background
            ctx.fillStyle = '#0a0a0f';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add nebula clouds
            for (let i = 0; i < 3; i++) {
                const nebulaX = canvas.width * (0.3 + i * 0.2);
                const nebulaY = canvas.height * (0.3 + i * 0.25);
                const gradient = ctx.createRadialGradient(
                    nebulaX, nebulaY, 0,
                    nebulaX, nebulaY, canvas.width * 0.4
                );
                
                if (i === 0) {
                    gradient.addColorStop(0, 'rgba(138, 43, 226, 0.15)');
                    gradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.08)');
                } else if (i === 1) {
                    gradient.addColorStop(0, 'rgba(25, 25, 112, 0.12)');
                    gradient.addColorStop(0.5, 'rgba(0, 0, 139, 0.06)');
                } else {
                    gradient.addColorStop(0, 'rgba(72, 61, 139, 0.1)');
                    gradient.addColorStop(0.5, 'rgba(106, 90, 205, 0.05)');
                }
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Draw and animate stars
            stars.forEach((star, i) => {
                // Calculate distance from mouse
                const dx = mouse.x - star.baseX;
                const dy = mouse.y - star.baseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Repel effect
                let repelX = 0;
                let repelY = 0;
                if (distance < repelDistance) {
                    const force = (repelDistance - distance) / repelDistance;
                    repelX = -(dx / distance) * force * 30;
                    repelY = -(dy / distance) * force * 30;
                }

                // Jiggle effect - random movement around base position
                star.x = star.baseX + Math.sin(time * star.jiggleSpeed * 100 + i) * star.jiggleAmount + repelX;
                star.y = star.baseY + Math.cos(time * star.jiggleSpeed * 80 + i) * star.jiggleAmount + repelY;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity})`;
                ctx.fill();

                // Add glow for brighter stars
                if (star.radius > 1.2) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity * 0.2})`;
                    ctx.fill();
                }

                // Twinkle effect
                star.opacity += star.twinkleSpeed * star.direction;
                if (star.opacity >= 1 || star.opacity <= 0.3) {
                    star.direction *= -1;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Redistribute stars on resize
            stars.forEach(star => {
                star.baseX = Math.random() * canvas.width;
                star.baseY = Math.random() * canvas.height;
                star.x = star.baseX;
                star.y = star.baseY;
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <canvas 
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-black w-55 h-70 flex justify-center items-center rounded-full bg-white shadow-2xl">
                    <p className="text-lg">hello</p>
                </div>
            </div>
        </div>
    );
}