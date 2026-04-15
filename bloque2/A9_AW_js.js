let lado = parseInt(prompt("Introduzca el lado del cuadrado"));
let perimetro = (lado) => {
    return lado * 4;
}
document.write("El lado del perimetro del cuadrado es de: " + perimetro(lado));