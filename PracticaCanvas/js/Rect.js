import Figure from './Figure.js';

export default class Rect extends Figure {

    constructor(name,posX, posY, fill, context, width, height) {
        super(name,posX, posY, fill, context);
        this.height = height;
        this.width = width;
    }

    draw() {
        super.draw();   
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
    }
}