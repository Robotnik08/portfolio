export class Canvas {
    constructor (id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    fitScreen() {
        if (this.canvas.width == window.innerWidth && this.canvas.height == window.innerHeight) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    setColor(color) {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
    }

    setFont(font) {
        this.ctx.font = font;
    }

    drawImage(image, x, y, width, height) {
        this.ctx.drawImage(image, x, y, width, height);
    }

    drawRect(x, y, width, height) {
        this.ctx.fillRect(x, y, width, height);
    }

    drawText(text, x, y) {
        this.ctx.fillText(text, x, y);
    }

    drawLine(x1, y1, x2, y2, radius = 1) {
        this.ctx.beginPath();
        this.ctx.lineWidth = radius * 2;
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    drawCircle(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }
}