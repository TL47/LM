let frase = () => {
    let frase = prompt("Introduce una frase")
    let palabras = frase.split(" ").length;
    let mayusculas = frase.toUpperCase();
    document.write("Número de palabras: " + palabras + "<br>");
    document.write("Frase en mayúsculas: " + mayusculas + "<br>");
    document.write("Caracter central: " + frase[frase.length/2]);
}
frase();