import { Canvas } from './imports/canvas.mjs';

const canvas = new Canvas('space-background');




const stars = []; // [x, y, radius, speed]

for (let i = 0; i < 100; i++) {
    const radius = Math.random();
    stars.push(
        {
            x: Math.random(),
            y: Math.random(),
            radius: radius * 2,
            speed: Math.random(),
            color: `rgba(${Math.max(0, Math.random()-radius) * 255}, ${Math.max(0, Math.random()-radius) * 255}, ${Math.max(0, Math.random()-radius) * 255}, 1)`
        }
    );

    // sort by radius
    stars.sort((a, b) => {
        return a.radius - b.radius;
    });
}

function drawStars () {
    for (let i = 0; i < stars.length; i++) {
        canvas.setColor(stars[i].color);
        canvas.drawRect(stars[i].x * canvas.width, stars[i].y * canvas.height, stars[i].radius * canvas.height/10, stars[i].radius * canvas.height/10);
    }
}
function moveStars () {
    for (let i = 0; i < stars.length; i++) {
        stars[i].y += stars[i].speed/200;
        if (stars[i].y > 1) {
            stars[i].y = -0.2;
            stars[i].x = Math.random();
        }
    }
}



function update () {
    canvas.fitScreen();
    canvas.clear();
    drawStars();
    moveStars();
    requestAnimationFrame(update);
}

update();