export class Color {
    IS_COLOR = true;

    constructor (r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    get hex () {
        return this.toHex();
    }

    get hexA () {
        return this.toHexA();
    }

    get rgba () {
        return this.toString();
    }

    toString () {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    toHex () {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
    }

    toHexA () {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}${this.a.toString(16)}`;
    }

    blend (color, amount) {
        return new Color(
            this.r + (color.r - this.r) * amount,
            this.g + (color.g - this.g) * amount,
            this.b + (color.b - this.b) * amount,
            this.a + (color.a - this.a) * amount
        );
    }

    static fromString (string) {
        const [r, g, b, a] = string.match(/(\d{1,3})/g).map(num => parseInt(num));
        return new Color(r, g, b, a);
    }

    static fromHex (hex) {
        if (hex[0] === '#') hex = hex.substr(1);
        if (hex.length === 3) hex = hex.split('').map(char => char + char).join('');
        if (hex.length === 4) hex = hex.split('').map(char => char + char).join('');
        if (hex.length === 6) hex = hex + 'ff';
        if (hex.length === 8) hex = hex;
        return new Color(parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16), parseInt(hex.substr(6, 2), 16) / 255);
    }

    static get black () {
        return new Color(0, 0, 0);
    }

    static get white () {
        return new Color(255, 255, 255);
    }

    static get red () {
        return new Color(255, 0, 0);
    }

    static get green () {
        return new Color(0, 255, 0);
    }

    static get blue () {
        return new Color(0, 0, 255);
    }

    static get yellow () {
        return new Color(255, 255, 0);
    }

    static get cyan () {
        return new Color(0, 255, 255);
    }

    static get magenta () {
        return new Color(255, 0, 255);
    }

    static get transparent () {
        return new Color(0, 0, 0, 0);
    }

    static get random () {
        return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }

    static get randomOpaque () {
        return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, 1);
    }

    static get randomTransparent () {
        return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random());
    }


}