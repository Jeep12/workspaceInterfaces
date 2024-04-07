class Pen {

    constructor(posX, posY, fill, context, estilo) {
        this.antX = posX;
        this.antY = posY;
        this.posX = posX;
        this.posY = posY;
        this.ctx = context;
        this.estilo = estilo;
        this.fill = fill;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.fill;
        this.ctx.moveTo(this.antX, this.antY);
        this.ctx.lineTo(this.posX, this.posY);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    moveTo(posX, posY) {
        this.antX = this.posX;
        this.antY = this.posY;
        this.posX = posX;
        this.posY = posY;
    }



}