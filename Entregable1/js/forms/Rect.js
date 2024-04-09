import Figure from './Figure.js';

export default class Rect extends Figure {

    constructor(name, posX, posY, fill, context, width, height) {
        super(name, posX, posY, fill, context);
        this.height = height;
        this.width = width;
    }

  
    draw() {
        super.draw();
        this.context.fillRect(this.posX, this.posY, this.width, this.height)
    }

    isRectangle() {
        return this.width != this.height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }

   
        //le llega la posicion del mouse para ver si esta dentro del mismo
        //hereda getPosX() y getPosY()
        // si el mouse en x, es mayor o igual al inicio de la figura osea  getPosX() y menor al  getPosX() + width (el final)
        //en el eje x esta dentro del rectangulo
        //de igual maera con la altura height y getGetPosY
    isInside(x, y) {
        return (
            x >= this.getPosX() &&
            x <= this.getPosX() + this.width &&
            y >= this.getPosY() &&
            y <= this.getPosY() + this.height
        );
    }
}