export default class Figure {
    static count = 0; // Variable estática

    constructor(name, posX, posY, fill, context) {
        Figure.count++;
        this.name = name;
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
    }


 
    getName() {
        return this.name;
    }
    setFill(fill) {
        this.fill = fill;
    }
    getFill() {
        return this.fill;
    }
    setPosX(posX) {
        this.posX = posX;
    }
    setPosY(posY) {
        this.posY = posY;
    }
    getPosX() {
        return this.posX
    }
    getPosY() {
        return this.posY
    }
    getPosition() {
        return { x: this.getPosX(), y: this.getPosY() }
    }
    draw() {
        this.context.fillStyle = this.fill;
    }
    moveTo(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }


}

