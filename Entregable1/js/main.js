import Figure from './forms/Figure.js';
import Circle from './forms/Circle.js';
import Rect from './forms/Rect.js';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

let cw = canvas.width = 640;
let ch = canvas.height = 480;
let haveForms = null;
let posx, posy;

let figuras = [];
for(let i =0;i<figuras.length;i++){
    figuras[i].addEventListener("click", ()=> {
        console.log("se clickeo una figura");
    })
}

document.getElementById("clear").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    haveForms=false;

})

document.getElementById("generate").addEventListener("click", (event) => {
    generateRect(true, event);
    generateRect(false, event);
    generateCircle(event);
    console.log(figuras);

    // Agregar event listener a las figuras
    figuras.forEach(figura => {
        figura.addEventListener("click", () => {
            console.log("Se clickeó una figura");
        });
    });


});
function generateCircle(event) {
    haveForms = true;
    let radius = numberRandom(50);
    let posX = numberRandom(cw - 2 * radius) + radius; // Asegura que posX esté dentro del lienzo
    let posY = numberRandom(ch - 2 * radius) + radius; // Asegura que posY esté dentro del lienzo
    let circulo2 = new Circle(posX, posY, radius, "green", ctx);
    circulo2.draw();
    // Verificar si el punto está dentro de alguna figura
    console.log("Posicion del click circulo (" + event.clientX + "," + event.clientY + ")");
    figuras.push(Circle);


}


let height;
let width;
function generateRect(type, event) {
    //no controla que exista un objeto encima de otro objeto
    // Verificar si el punto está dentro de alguna figura
    haveForms = true;

    let text = type == true ? "Rectangulo" : "Cuadrado";

    console.log("Posicion del click " + text + "(" + event.clientX + "," + event.clientY + ")");

    //true = rectangulo ,false (cuadrado)
    if (type) {
        height = numberRandom(80);
        width = numberRandom(200);
    } else {
        let sameRandom = numberRandom(40);

        height = sameRandom;
        width = sameRandom;
    }
    //Defino el ancho y la altura

    // Con estos metodos(maxX,MaxY) limitamos el aleatorio para que respete el canvas y no se desborde
    // Tenemos el ancho y el alto del lienzo como maximos para posiciones en x,y 
    //para mostrar el objeto completamente limito la posicion con la mitad del mismo (ancho o alto)

    let xMax = maxX(width);
    let yMax = maxY(height);

    //una vez que tenemos los maximos podemos generar la poscion aleatoria  y generar el objeto
    let rectX = numberRandom(xMax);
    let rectY = numberRandom(yMax);
    posx = rectX;
    posy = rectY;

    let color;
    //si no es rectangulo 
    if (type != true) {
        color = "red";
    } else {
        color = "black";
    }
    let rectangulo = new Rect(rectX, rectY, color, ctx, width, height);
    rectangulo.draw();
    figuras.push(rectangulo);



    return rectangulo;
}

//Numeros aleatorios limitados 
function numberRandom(max) {
    return Math.floor(Math.random() * (max + 1));
}
function maxY(height) {
    return ch - (height / 2);
}
function maxX(width) {
    return cw - (width / 2);
}



