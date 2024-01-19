import { Canvas } from './imports/canvas.mjs';
import { Time } from './imports/time.mjs';
import { Vector2 } from './imports/vector.mjs';
import { Color } from './imports/color.mjs';

const canvas = new Canvas('main-canvas');
const time = new Time();

class Block {
    constructor (position, radius, speed, color) {
        if (!position.IS_VECTOR2) throw new Error('Position must be a vector2');
        if (!color.IS_COLOR) throw new Error('Color must be a color');

        this.position = position;
        this.radius = radius;
        this.speed = speed;
        this.color = color;
    }
}


const blocks = []; // array of stars

for (let i = 0; i < 100; i++) {
    const radius = Math.random();
    blocks.push(
        new Block (
            new Vector2(Math.random(), Math.random()), // intial position
            radius * 2, // radius
            Math.random(), // speed
            new Color (Math.max(0, Math.random()-radius) * 255, Math.max(0, Math.random()-radius) * 255, Math.max(0, Math.random()-radius) * 255, 1) // color
        )
    );

    // sort by radius
    blocks.sort((a, b) => {
        return a.radius - b.radius;
    });
}

function drawStars () {
    for (let i = 0; i < blocks.length; i++) {
        canvas.setColor(blocks[i].color);
        canvas.drawRect(blocks[i].position.x * canvas.width, blocks[i].position.y * canvas.height, blocks[i].radius * canvas.height/10, blocks[i].radius * canvas.height/10);
    }
}
function moveStars (deltaTime) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].position.y += blocks[i].speed/200 * deltaTime;
        if (blocks[i].position.y > 1) {
            blocks[i].position.y = -0.2;
            blocks[i].position.x = Math.random();
        }
    }
}



function update (deltaTime) {
    canvas.fitScreen();
    canvas.clear();
    drawStars();
    moveStars(deltaTime);
}

time.subscribe(update);
time.start();