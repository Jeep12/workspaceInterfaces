import Circle from './forms/Circle.js';
import Rect from './forms/Rect.js';
import Figure from './forms/Figure.js';


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let showSelection = document.getElementById("selection");
let figuras = [];
let cw = canvas.width = 640;
let ch = canvas.height = 480;

let isDragging = false;
let offsetX, offsetY;
let selectedFigure = null;

canvas.addEventListener('mousedown', function (event) {

    //los metodos siguientes hacen que las posiciones del mouseX, mouseY arranquen en 0,0 cuando se clickea dentro del canvas
    //sino se contempla toda la ventana
    let mouseX = event.clientX - canvas.getBoundingClientRect().left;
    let mouseY = event.clientY - canvas.getBoundingClientRect().top;
    //recorro las figuras
    for (let i = 0; i < figuras.length; i++) {
        let figura = figuras[i];

        //si el click fue hecho dentro de una figura se encarga la siguiente funcion (isInside)
    
        if (figura.isInside(mouseX, mouseY)) {
            
            figura.setFill("yellow");
            figura.draw();
            showSelection.innerHTML = figura.getName();
            selectedFigure = figura;
            offsetX = mouseX - figura.getPosX();
            offsetY = mouseY - figura.getPosY();
            isDragging = true;
            break;
        }


    }



});

canvas.addEventListener('mousemove', function (event) {
    if (isDragging && selectedFigure) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        // Calcula el desplazamiento actualizado
        const newPosX = mouseX - offsetX;
        const newPosY = mouseY - offsetY;



        // Actualiza la posición de la figura seleccionada
        selectedFigure.moveTo(newPosX, newPosY);


//dibujo denuevo para que se vaya mostrando mientras se arrastra 
        redraw();
    }
});


canvas.addEventListener('mouseup', function (event) {
    isDragging = false;
    if (selectedFigure) {
        selectedFigure.setFill(selectedFigure.getOriginalFill()); // Restaura el color original
        redraw();
    }
    selectedFigure = null;
});


//levanto el boton limpiar para limpiar el lienzo el arreglo de figuras y la variable estatica count de Figure
document.getElementById("clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    figuras = [];
    Figure.count = 1;

})

//levanto el boton Generar y creo 1 de cada tres figuras
document.getElementById("generate").addEventListener("click", (event) => {
    generateRect(true, event);
    generateRect(false, event);
    generateCircle(event);


});
function generateCircle(event) {
    //no controla que exista un objeto encima de otro objeto

    let radius = numberRandom(50);
    let posX = numberRandom(cw - (2 * radius)) + radius; // Asegura que posX esté dentro del lienzo
    let posY = numberRandom(ch - (2 * radius)) + radius; // Asegura que posY esté dentro del lienzo
    let circulo = new Circle("Figura " + Figure.count, posX, posY, radius, "green", ctx);
    circulo.draw();

    //guardo las formas que se crean en un arreglo
    figuras.push(circulo);



}

function generateRect(type, event) {
    //no controla que exista un objeto encima de otro objeto


    let height;
    let width;


    //true = rectangulo ,false =cuadrado
    if (type) {
        height = numberRandom(80);
        width = numberRandom(200);
    } else {
        let sameRandom = numberRandom(40);

        height = sameRandom;
        width = sameRandom;
    }

    // Con estos metodos(maxX,MaxY) limitamos el aleatorio para que respete el canvas y no se desborde
    // Tenemos el ancho y el alto del lienzo como maximos para posiciones en x,y 
    //para mostrar el objeto completamente limito la posicion con la mitad del mismo (ancho o alto)

    let xMax = maxX(width);
    let yMax = maxY(height);

    //una vez que tenemos los maximos podemos generar la poscion aleatoria  y generar el objeto
    let rectX = numberRandom(xMax);
    let rectY = numberRandom(yMax);


    let color;
    //si no es rectangulo 
    if (type != true) {
        color = "red";
    } else {
        color = "black";
    }
    let rectangulo = new Rect("Figura " + Figure.count, rectX, rectY, color, ctx, width, height);
    rectangulo.draw();
    //guardo las formas que se crean en un arreglo
    figuras.push(rectangulo);



}

//Numeros aleatorios limitados s
function numberRandom(max) {
    return Math.floor(Math.random() * (max + 1));
}


function maxY(height) {
    return ch - (height);
}
function maxX(width) {
    return cw - (width);
}



function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    figuras.forEach(figura => {
        figura.draw();
    });
}