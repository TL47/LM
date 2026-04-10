let acumularValores = () => {
    let suma = 0, valor;
    do {
        valor = parseInt(prompt("Ingresa un valor (9999 para finalizar la carga):"));
        valor !== 9999 ? suma += valor : null;
    } while (valor !== 9999);

    let estado = suma == 0 ? 'cero' : suma > 0 ? 'mayor a cero' : 'menor a cero';
    return "Valor acumulado: " + suma + ". Este valor es: " + estado + ".";
}
document.write(acumularValores());