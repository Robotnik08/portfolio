export class Input {
    constructor () {
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));

        this.mouse = {
            x: 0,
            y: 0
        };

        this.mouseDown = false;

        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mousedown', this.onMouseDown.bind(this));
    }

    onKeyDown (event) {
        this[event.code] = true;
    }

    onKeyUp (event) {
        this[event.code] = false;
    }

    isKeyDown (key) {
        return this[key] || false;
    }

    isKeyUp (key) {
        return !this[key] || false;
    }

    onMouseMove (event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    }

    onMouseDown (event) {
        this.mouseDown = true;
    }

    isMouseDown () {
        return this.mouseDown;
    }

    isMouseUp () {
        return !this.mouseDown;
    }
}