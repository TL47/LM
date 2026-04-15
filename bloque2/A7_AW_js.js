let mostrarValores = () => {
    let negativos = 0, positivos = 0, multiplos = 0, sumaPares = 0;
    for (let i = 0 ; i < 10 ; i++) {
        let valor = parseInt(prompt("Introduzca el valor" + i + ": "))
        if (valor > 0) {
            positivos++;
        } else if (valor < 0) {
            negativos++;
        }
        if (valor % 15 == 0) {
            multiplos++;
        }
        if (valor % 2 == 0) {
            sumaPares += valor;
        }
    }
    document.write("La cantidad de negativos es de " + negativos + " la cantidad de positivos es de " + positivos + " la cantidad de multiplos de 15 es de " + multiplos + " y la suma de los pares es de: " + sumaPares);
}
mostrarValores();