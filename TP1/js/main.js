let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

// Definir las coordenadas y dimensiones del rectángulo
//let x = 50;
//let y = 50;
//let width = 600;
//let height = 550;

// Crear un gradiente lineal
//let gradient = ctx.createLinearGradient(x, y, x + width, y );
// Definir los colores del gradiente
//gradient.addColorStop(0, 'black'); // Negro en el borde izquierdo
//gradient.addColorStop(0.4, 'yellow'); // Amarillo en el 40% del ancho
//gradient.addColorStop(0.6, 'yellow'); // Amarillo en el 60% del ancho

//gradient.addColorStop(1, 'red'); // Rojo en el borde derecho


// Establecer el gradiente como el estilo de relleno
//ctx.fillStyle = gradient;

// Dibujar el rectángulo con el gradiente
//ctx.fillRect(x, y, width, height);
























let imagen = new Image();
imagen.src = "assets/images/bg1.jpg";

let imagenData;
imagen.onload = function () {
    canvas.width = imagen.width;
    canvas.height = imagen.height;

    ctx.drawImage(this, 0, 0);
    imagenData = ctx.getImageData(0, 0, imagen.width, imagen.height);
    escaladoGris(imagenData.data);


    ctx.putImageData(imagenData, 0, 0);

    // console.log(getRed(imagenData, 0, 0));
    // console.log(getGreen(imagenData, 0, 0));
    //console.log(getBlue(imagenData, 0, 0));

}
function escaladoGris(imageData) {
    for (let i = 0; i < imageData.length; i += 4) {
        let escala =( imageData[i] + imageData[i + 1] + imageData[i + 2])/3;
        imageData[i] = escala;
        imageData[i + 1] = escala;
        imageData[i + 2] = escala;
    }
}



function myDrawImageMethod(image) {
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
























