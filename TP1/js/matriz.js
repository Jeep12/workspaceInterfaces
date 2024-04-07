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
