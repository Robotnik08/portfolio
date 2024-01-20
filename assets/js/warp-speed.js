import { Canvas } from "./imports/canvas.mjs";
import { Time } from "./imports/time.mjs";
import { Vector2 } from "./imports/vector.mjs";
import { Color } from "./imports/color.mjs";
import { Input } from "./imports/input.mjs";

const canvas = new Canvas("main-canvas");
const time = new Time();
const input = new Input();

let warpspace = false;

class Star {
    constructor (position, color) {
        if (!position.IS_VECTOR2) throw new Error("Position must be a vector2");
        if (!color.IS_COLOR) throw new Error("Color must be a color");

        this.position = position;
        this.last_pos = position;
        this.color = color;
    }
}

const stars = []; // array of stars

for (let i = 0; i < 150; i++) {
    stars.push(
        new Star (
            Vector2.random, // intial position
            Color.yellow // color
        )
    );
}

for (let i = 0; i < 300; i++) {
    moveStars(1);
}
function calcSize (position) {
    return position.distance(new Vector2(0.5, 0.5));
}

function drawStars () {
    for (let star of stars) {
        canvas.setColor(star.color);


        canvas.drawLine(canvas.width*star.position.x, canvas.height*star.position.y, canvas.width*star.last_pos.x, canvas.height*star.last_pos.y, calcSize(star.position) * 8);
        canvas.drawCircle(canvas.width*star.position.x, canvas.height*star.position.y, calcSize(star.position) * 2);
    }
}

function moveStars (deltaTime) {
    // stars move away from the center, they speed up as they get closer to the edge (like a warp speed effect)

    for (let i in stars) {
        const distanceFromCenter = stars[i].position.distance(new Vector2(0.5, 0.5));
        const speed = (1 - distanceFromCenter) / (warpspace ? 50 : 200);
        stars[i].last_pos = stars[i].position;
        stars[i].position = stars[i].position.add(stars[i].position.subtract(new Vector2(0.5, 0.5)).normalize().multiply(speed * deltaTime));

        if (
            stars[i].position.x < -0.1 ||
            stars[i].position.x > 1.1 ||
            stars[i].position.y < -0.1 ||
            stars[i].position.y > 1.1
        ) {
            stars[i] = new Star (
                new Vector2(0.5 + (Math.random()-0.5) / 50, 0.5 + (Math.random()-0.5) / 50), // intial position
                Color.yellow // color
            );
        }
    }
}

function update (deltaTime) {
    canvas.fitScreen();
    if (warpspace) {
        canvas.setColor(new Color(0, 0, 0, 0.1));
        canvas.drawRect(0, 0, canvas.width, canvas.height);
    } else {
        canvas.setColor(new Color(0, 0, 0, 0.3));
        canvas.drawRect(0, 0, canvas.width, canvas.height);
    } 

    moveStars(deltaTime);
    drawStars();

}

time.subscribe(update);
time.start();

let started = false;
let start = () => {
    if (!started) {
        started = true;
        startSequence();
    }
};
document.addEventListener('mousedown', start);
document.addEventListener('touchstart', start);
document.addEventListener('keydown', start);

function startSequence () {
    document.getElementById('titles').classList.add('title-disappear');
    setTimeout(() => {
        warpspace = true;
    }, 4000/10);
    setTimeout(() => {
        document.getElementById('titles').style.display = 'none';
        warpspace = false;
        
        document.getElementById('main').style.display = 'flex';
        document.getElementById('main').classList.add('main-appearance');
    }, 4050);
}