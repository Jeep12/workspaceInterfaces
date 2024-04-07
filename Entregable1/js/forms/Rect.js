import Figure from './Figure.js';

export default class Rect extends Figure {

    constructor(posX, posY, fill, context, width, height) {
        super(posX, posY, fill, context);
        this.height = height;
        this.width = width;
    }

    draw() {
        super.draw();   
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
    }

    isRectangle(){
        return this.width != this.height;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
}