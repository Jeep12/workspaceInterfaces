import Figure from './Figure.js';

export default class Circle extends Figure {

    constructor(name,posX, posY, radius, fill, context) {
        super(name,posX, posY, fill, context);
        this.radius = radius;
    }

    draw() {
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }
    getRadius() {
        return this.radius
    }

}