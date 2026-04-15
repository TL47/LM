let menor = (valor1, valor2, valor3) => {
    let minimo = Math.min(valor1, valor2, valor3);
    return minimo;
}
let valor1 = parseInt(prompt("Introduzca el valor 1"));
let valor2 = parseInt(prompt("Introduzca el valor 2"));
let valor3 = parseInt(prompt("Introduzca el valor 3"));
document.write("El valor mínimo de los tres es: " + menor(valor1, valor2, valor3))