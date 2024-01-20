import { Time } from "./imports/time.mjs";
import { Input } from "./imports/input.mjs";
import { Vector2 } from "./imports/vector.mjs";


const tip = document.querySelector(".tip");


function showTip (text) {
    setTip(text);
    tip.style.visibility = "visible";

}

function hideTip () {
    tip.style.visibility = "hidden";
}
hideTip();

function setTip (text) {
    tip.innerHTML = text;
}

function setTipPosition (x, y) {
    tip.style.left = x + "px";
    tip.style.top = y + "px";
}

const SCREEN_MARGIN = 10;

const time = new Time();
const input = new Input();
time.subscribe(() => {
    const windowSize = new Vector2(window.innerWidth, window.innerHeight);
    const tipSize = new Vector2(tip.offsetWidth, tip.offsetHeight);
    setTipPosition(Math.min(input.mouse.x - 5, windowSize.x - tipSize.x - SCREEN_MARGIN), Math.min(input.mouse.y + 25, windowSize.y - tipSize.y - SCREEN_MARGIN));
});

time.start();



const porttip = document.getElementById("porttip");

porttip.addEventListener("mouseover", () => {
    showTip("Version 3000");
});

porttip.addEventListener("mouseout", () => {
    hideTip();
});


const langs = document.getElementById("langs");

langs.addEventListener("mouseover", () => {
    showTip('Backend is PHP');
});

langs.addEventListener("mouseout", () => {
    hideTip();
});
