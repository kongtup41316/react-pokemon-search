import { useEffect, useRef } from 'react';

export default function BlueSkyMain() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const clouds = [];
        const cloudCount = 12;

        // Create clouds
        for (let i = 0; i < cloudCount; i++) {
            const cloudWidth = Math.random() * 300 + 200;
            const cloudHeight = Math.random() * 100 + 80;
            clouds.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.5,
                width: cloudWidth,
                height: cloudHeight,
                speed: Math.random() * 0.15 + 0.03,
                opacity: Math.random() * 0.25 + 0.65,
                circles: [],
                depth: Math.random()
            });
        }

        // Generate realistic cloud shapes with noise
        clouds.forEach(cloud => {
            const numCircles = Math.floor(Math.random() * 8) + 15;
            const centerY = cloud.height / 2;
            
            for (let i = 0; i < numCircles; i++) {
                const progress = i / (numCircles - 1);
                const noise = Math.random() * 40 - 20;
                
                // Multiple layers of puffs
                const layer = Math.floor(Math.random() * 3);
                const baseRadius = (Math.random() * 30 + 30) * (1 - layer * 0.2);
                
                // Natural distribution
                const xPos = progress * cloud.width + noise;
                const heightVar = Math.sin(progress * Math.PI * 2 + Math.random() * 2) * 25;
                const yPos = centerY + heightVar + (layer * 15) + (Math.random() - 0.5) * 25;
                
                cloud.circles.push({
                    x: xPos,
                    y: yPos,
                    radius: baseRadius,
                    layer: layer
                });
            }
        });

        function drawCloud(cloud) {
            ctx.save();
            ctx.translate(cloud.x, cloud.y);

            // Create soft shadow/depth
            ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
            ctx.shadowBlur = 20;
            ctx.shadowOffsetY = 10;

            // Draw cloud with gradient for depth
            cloud.circles.forEach((circle, index) => {
                // Slight gradient for each puff
                const gradient = ctx.createRadialGradient(
                    circle.x, circle.y, 0,
                    circle.x, circle.y, circle.radius
                );
                
                const baseOpacity = cloud.opacity;
                const edgeOpacity = cloud.opacity * 0.6;
                
                gradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity})`);
                gradient.addColorStop(0.6, `rgba(250, 250, 252, ${baseOpacity * 0.9})`);
                gradient.addColorStop(1, `rgba(245, 245, 250, ${edgeOpacity})`);
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.restore();
        }

        function animate() {
            // Sky gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(0.5, '#87CEEB');
            gradient.addColorStop(1, '#B0E0E6');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw and move clouds
            clouds.forEach(cloud => {
                drawCloud(cloud);
                
                // Move cloud
                cloud.x += cloud.speed;
                
                // Reset cloud position when it goes off screen
                if (cloud.x > canvas.width + cloud.width) {
                    cloud.x = -cloud.width;
                    cloud.y = Math.random() * canvas.height * 0.6;
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none">
            <canvas 
                ref={canvasRef}
                className="w-full h-full"
            />
        </div>
    );
}