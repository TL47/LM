let valor = parseInt(prompt("Introduzca un  valor para mostrar su tabla"));
let calcularTabla = (valor) => {
    for (let i = 1; i < 13 ; i++) {
        let tmp = valor * i;
        document.write(tmp + " ");
    }
}
calcularTabla(valor);