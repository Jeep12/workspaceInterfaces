let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Definir las coordenadas y dimensiones del rectángulo
let x = 50;
let y = 50;
let width = 600;
let height = 550;

// Crear un gradiente lineal
let gradient = ctx.createLinearGradient(x, y, x + width, y );
// Definir los colores del gradiente
gradient.addColorStop(0, 'black'); // Negro en el borde izquierdo
gradient.addColorStop(0.4, 'yellow'); // Amarillo en el 40% del ancho
gradient.addColorStop(0.6, 'yellow'); // Amarillo en el 60% del ancho
gradient.addColorStop(1, 'red'); // Rojo en el borde derecho


// Establecer el gradiente como el estilo de relleno
ctx.fillStyle = gradient;

// Dibujar el rectángulo con el gradiente
ctx.fillRect(x, y, width, height);
























/*
let imagen = new Image();
imagen.src = "assets/images/2x2.jpg";

let imagenData;
imagen.onload = function () {
    
    canvas.width = imagen.width;
    canvas.height = imagen.height;
    imagenData = ctx.getImageData(0, 0, imagen.width, imagen.height); 
    myDrawImageMethod(this);

    console.log(getRed(imagenData, 0, 0));
    console.log(getGreen(imagenData, 0, 0));
    console.log(getBlue(imagenData, 0, 0));
    console.log(imagenData.data);
    
}



function myDrawImageMethod(image) {
    ctx.drawImage(image, 0, 0);
}

function getRed(imagedata, x, y) {
    index = (x + y * imagedata.width) * 4;
    return imagedata.data[index + 0];
}

function getGreen(imagedata, x, y) {
    index = (x + y * imagedata.width) * 4;
    return imagedata.data[index + 1];
}

function getBlue(imagedata, x, y) {
    index = (x + y * imagedata.width) * 4;
    return imagedata.data[index + 2];
}


ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 200, 100);

let imageData = ctx.createImageData(200, 100);
let data = imageData.data;

let red = 255;
let green = 0;
let blue = 0;
let alpha = 255;

// Iterar sobre cada píxel y establecer su color
for (let i = 0; i < data.length; i += 4) {
    data[i] = red;       // componente rojo
    data[i + 1] = green; // componente verde
    data[i + 2] = blue;  // componente azul
    data[i + 3] = alpha; // componente alfa (opacidad completa)
}

// Dibujar el objeto ImageData en el lienzo en las coordenadas (100, 50)
ctx.putImageData(imageData, 300, 50);

    // Crear un gradiente lineal
    let gradient = ctx.createLinearGradient(0, 0, 0, 200); // Desde (0,0) hasta (200,0)

    // Establecer los colores del gradiente
    gradient.addColorStop(0, "rgb(0,0,0)");   // Color rojo en el inicio
    gradient.addColorStop(1, "rgb(255,255,255)");  // Color azul en el final

    // Establecer el gradiente como el estilo de relleno
    ctx.fillStyle = gradient;

    // Dibujar un cuadrado utilizando el gradiente como color de relleno
    ctx.fillRect(50, 50, 200, 200); // Rectángulo de tamaño 200x200, empezando desde (50,50)
*/
























//REPASO
let matriz = [];
for (let i = 0; i < 100; i++) {
    matriz[i] = [];
    for (let j = 0; j < 100; j++) {
        matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
}

valorParImpar();

function valorParImpar() {
    let valorMinImpar = valorMaximo(matriz);



    let valorMAXPar = 0;
    for (let i = 0; i < 100; i++) {
        let fila = "";
        for (let j = 0; j < 100; j++) {
            fila += matriz[i][j] + " ";
            if (esPar(i)) {
                if (matriz[i][j] > valorMAXPar) {
                    valorMAXPar = matriz[i][j];
                }
            } else {
                if (matriz[i][j] < valorMinImpar) {
                    valorMinImpar = matriz[i][j];
                }
            }


        }
        return { maxPar: valorMAXPar, minImpar: valorMinImpar };
    }

}

function valorMaximo() {
    let valor = 0;
    for (let i = 0; i < 100; i++) {
        let fila = "";
        for (let j = 0; j < 100; j++) {
            fila += matriz[i][j] + " ";

            if (matriz[i][j] > valor)
                valor = matriz[i][j];
        }

    }
    return valor;
}


function esPar(numero) {
    return numero % 2 == 0;
}
