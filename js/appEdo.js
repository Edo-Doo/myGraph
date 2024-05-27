function crearMatrizIncidencia(Sale, Llega, e, n, dirigida) {
    // Crear matriz AG con n filas y e columnas inicializadas a 0
    let AG = new Array(n);
    for (let k = 0; k < n; k++) {
        AG[k] = new Array(e).fill(0);
    }

    // Rellenar la matriz AG según las aristas y si el grafo es dirigido o no
    for (let i = 0; i < e; i++) {
        AG[Sale[i],i] = 1; // Marca el nodo de salida con 1
        if (dirigida) {
            AG[Llega[i],i] = -1; // Si es dirigido, marca el nodo de llegada con -1
        } else {
            AG[Llega[i],i] = 1; // Si no es dirigido, marca también con 1
        }
    }

    // Imprimir la matriz de incidencia
    console.log("La matriz de incidencia es:");
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < e; j++) {
            row += AG[i][j] + " ";
            //console.log(AG[i][j]);
        }
        console.log(row);
    }

    return AG;
}

// Ejemplo de uso
let Sale = [0, 0, 1]; // Índices de los nodos de donde sale cada arista
let Llega = [1, 2, 2]; // Índices de los nodos donde llega cada arista
let numAristas = 3;
let numNodos = 3;
let esDirigido = true;

let matriz = crearMatrizIncidencia(Sale, Llega, numAristas, numNodos, esDirigido);
