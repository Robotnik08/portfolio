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


// Tip text for the ship version
const porttip = document.getElementById("porttip");

if (porttip != null) {
    porttip.addEventListener("mouseover", () => {
        showTip("Version 3000");
    });
    
    porttip.addEventListener("mouseout", () => {
        hideTip();
    });
}

const webDevTip = document.getElementById("web-dev-tip");

if (webDevTip != null) {
    webDevTip.addEventListener("mouseover", () => {
        showTip("I'm at year 2 out of 3.");
    });
    
    webDevTip.addEventListener("mouseout", () => {
        hideTip();
    });
}

const GLUtip = document.getElementById("GLU-tip");

if (GLUtip != null) {
    GLUtip.addEventListener("mouseover", () => {
        showTip("Grafisch Lyceum Utrecht");
    });
    
    GLUtip.addEventListener("mouseout", () => {
        hideTip();
    });
}

const UtrechtTip = document.getElementById("Utrecht-tip");

if (UtrechtTip != null) {
    UtrechtTip.addEventListener("mouseover", () => {
        showTip('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.1476171789973!2d5.1062449!3d52.0770426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6658b39d11917%3A0xc4aaed9051c276c!2sGrafisch%20Lyceum%20Utrecht!5e0!3m2!1snl!2snl!4v1705872393969!5m2!1snl!2snl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    });
    
    UtrechtTip.addEventListener("mouseout", () => {
        hideTip();
    });
}