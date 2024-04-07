import Circle from './Circle.js';
import Figure from './Figure.js';
import Rect from './Rect.js';

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let circulo = new Circle(100, 100, 20, "red", ctx);
let circulo2 = new Circle(200, 100, 40, "green", ctx);
let circulo3 = new Circle(300, 100, 20, "red", ctx);
canvas.width = 580;
canvas.height= 600;

let rectangulo = new Rect(0, 0, "red", ctx, 40, 40);
rectangulo.draw();


let isDragging = false;
//declaro las variables para poder ser utilizadas en distintos eventos.
let offsetX, offsetY;

canvas.addEventListener('mousedown', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

        isDragging = true;
        //obtengo la posicion cuando se hace click en el canvas y la guardo en offsetX y offsetY
        offsetX = mouseX - rectangulo.posX;
        offsetY = mouseY - rectangulo.posY;

    
});

canvas.addEventListener('mousemove', function(event) {
    if (isDragging) {
        const mouseX = event.clientX ;
        const mouseY = event.clientY ;
        //aca muevo el rectangulo usando la posicion de cuando se hace click, con la posicion del recangulo
        rectangulo.moveTo(mouseX - offsetX, mouseY - offsetY);
        
        redraw();
    }
});

canvas.addEventListener('mouseup', function(event) {
    isDragging = false;
});

function redraw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rectangulo.draw();
}