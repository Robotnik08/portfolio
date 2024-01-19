export class Vector2 {
    IS_VECTOR2 = true;
    IS_VECTOR = true;

    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    add (vector) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    subtract (vector) {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }

    multiply (scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    divide (scalar) {
        return new Vector2(this.x / scalar, this.y / scalar);
    }

    magnitude () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    normalize () {
        return this.divide(this.magnitude());
    }

    dot (vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    distance (vector) {
        return this.subtract(vector).magnitude();
    }

    angle (vector) {
        return Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude()));
    }

    rotate (angle) {
        return new Vector2(
            this.x * Math.cos(angle) - this.y * Math.sin(angle),
            this.x * Math.sin(angle) + this.y * Math.cos(angle)
        );
    }

    static get zero () {
        return new Vector2(0, 0);
    }

    static get one () {
        return new Vector2(1, 1);
    }

    static get up () {
        return new Vector2(0, -1);
    }

    static get down () {
        return new Vector2(0, 1);
    }

    static get left () {
        return new Vector2(-1, 0);
    }

    static get right () {
        return new Vector2(1, 0);
    }


    static get random () {
        return new Vector2(Math.random(), Math.random());
    }

    static get randomDirection () {
        return Vector2.random.normalize();
    }
}