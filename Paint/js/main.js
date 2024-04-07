/** 
*/

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;


let mouseUp = true;
let mouseDown = false;
let penClick = false;
let miImagen = null;
let miPen = null;




canvas.addEventListener("mousedown", (e) => {
    if (penClick == true) {
        mouseDown = true;
        mouseUp = false;
        miPen = new Pen(e.layerX, e.layerY, 'black', ctx, 'black');
        
    }
});

canvas.addEventListener("mouseup", (e) => {
    mouseDown = false;
    mouseUp = true;

});
canvas.addEventListener("mousemove", (e) => {
    //console.log("Coordenadas del evento: \n" +e.layerX, e.layerY);
    if (mouseDown && miPen != null) {
        miPen.moveTo(e.layerX, e.layerY);
        miPen.draw();
    }

});
let btnLapiz = document.getElementById("pen");
btnLapiz.addEventListener("click", (e) => {
    penClick = true;

});

function main() {
    //Pintamos el canvas

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);


}