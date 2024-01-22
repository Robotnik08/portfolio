import { Canvas } from './imports/canvas.mjs';
import { Time } from './imports/time.mjs';
import { Vector2 } from './imports/vector.mjs';
import { Color } from './imports/color.mjs';
import { getNoise } from './imports/perlin-noise.mjs';
import { Random } from './imports/random.mjs';

const canvas = new Canvas('main-canvas');
const time = new Time();

const random = new Random();

let seed = random.seed;

let x_offset = 0;

const PRECISION = 20;

const colormap = [
    {color: new Color(0, 0, 255), value: 0.3}, // deep water
    {color: new Color(0, 130, 255), value: 0.5}, // water
    {color: new Color(255, 255, 0), value: 0.56}, // sand
    {color: new Color(0, 255, 0), value: 0.7}, // grass
    {color: new Color(100, 100, 100), value: 0.78}, // stone
    {color: new Color(255, 255, 255), value: 1} // snow
];


function update (deltaTime) {
    canvas.fitScreen();
    canvas.clear();

    for (let y = -3; y < canvas.height/PRECISION + 3; y++) {
        for (let x = -3; x < canvas.width/PRECISION + 3; x++) {

            const noise = getNoise((x + x_offset)/PRECISION, y/PRECISION, seed);

            // get color from colormap
            let color = colormap[0].color;
            for (let i = 0; i < colormap.length; i++) {
                if (noise < colormap[i].value) {
                    color = colormap[i].color;
                    break;
                }
            }
            

            canvas.setColor(color.rgba);
            canvas.drawRect(x * PRECISION, y * PRECISION, PRECISION, PRECISION);
        }
    }

    x_offset += deltaTime/20;
}

time.subscribe(update);
time.start();