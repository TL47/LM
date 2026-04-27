let texto = prompt("Introduzca el String");
let imprimirMitad = (texto) => {
    for (let i = 0 ; i < texto.length / 2 ; i++) {
        document.write(texto[i]);
    }
}
let imprimirUltimo = (texto) => {
    document.write(texto[texto.length - 1]);
}
let imprimirInverso = (texto) => {
    for (let i = texto.length - 1 ; i >= 0 ; i--) {
        document.write(texto[i]);
    }
}
let imprimirConGuion = (texto) => {
    for (let i = 0 ; i < texto.length ; i++) {
        i != texto.length - 1 ? document.write(texto[i] + "-"): document.write(texto[i]);
    }
}
let mostrarVocales = (texto) => {
    let vocales = 0;
    for (let i = 0 ; i < texto.length ; i++) {
        texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u' ? vocales++ : null;
    }
    document.write("El número total de vocales en el String es de " + vocales);
}
imprimirMitad(texto);
document.write("<br>");
imprimirUltimo(texto);
document.write("<br>");
imprimirInverso(texto);
document.write("<br>");
imprimirConGuion(texto);
document.write("<br>");
mostrarVocales(texto);