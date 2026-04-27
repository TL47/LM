let pedirVector = () => {
    let vector = new Array(8);
    for (let indice = 0; indice < vector.length; indice++) {
        vector[indice] = parseInt(prompt("Introduzca el elemento " + (indice + 1)));
    }
    return vector;
}
let mostrarResultados = (vector) => {
    let suma = 0;
    let sumMayor = 0;
    let cuentaMayor = 0;
    for (let i = 0 ; i < vector.length ; i++) {
        suma += vector[i];
        vector[i] > 36 ? sumMayor += vector[i] : null;
        vector[i] > 50 ? cuentaMayor++ : null;
    }
    document.writeln("La suma de todos los valores es de: " + suma);
    document.writeln("La suma de todos los valores mayores de 36 es de: " + sumMayor);
    document.writeln("La cantidad de valores mayores de 50 es de: " + cuentaMayor);
}

let vector = pedirVector();
mostrarResultados(vector);