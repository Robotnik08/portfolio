export class Time {
    CLOCKS_PER_SEC = 1000;
    TICKS_PER_SEC = 60;

    constructor() {
        this.deltaTime = 0;
        this.subscribers = [];

        this.lastTime = new Date().getTime();

        this.stopped = false;

        this.fps = 0;
    }

    update () {
        if (this.stopped) {
            this.stopped = true;
            return;
        }

        const currentTime = new Date().getTime();
        this.deltaTime = (currentTime - this.lastTime) / this.CLOCKS_PER_SEC * this.TICKS_PER_SEC;
        this.lastTime = currentTime;

        this.fps = 1 / this.deltaTime * this.TICKS_PER_SEC;

        for (let func of this.subscribers) {
            func(this.deltaTime);
        }

        requestAnimationFrame(this.update.bind(this));
    }

    start () {
        this.update();
    }

    subscribe (callback) {
        this.subscribers.push(callback);
    }

    unsubscribe (callback) {
        this.subscribers = this.subscribers.filter(func => func !== callback);
    }
}