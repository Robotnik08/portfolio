export class Input {
    constructor () {
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
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
}