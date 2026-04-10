let salarioTotal = () => {
    let salario, i, contadorSalarioMenor = 0, contadorSalarioMayor = 0, noValido = false, total = 0;
    for (i = 0; i < 5 && !noValido; i++) {
        salario = parseInt(prompt("Introduzca un salario:"));
        total += salario;
        if (salario <= 0) {
            noValido = true;
        } else {
            if (salario >= 100 && salario <= 300) {
                contadorSalarioMenor++;
            } else {
                if (salario > 300) {
                    contadorSalarioMayor++;
                }
            }
        }
    }
    let resultado = "";
    if (!noValido) {
        resultado = "Los salarios entre 100 y 300 son: " + contadorSalarioMenor + "<br> Los salarios mayores de 300 son: " + contadorSalarioMayor + "<br> Y el gasto total de la empresa en salarios es de: " + total;
    } else {
        resultado = "El salario introducido es incorrecto";
    }
    return resultado;
}
document.write(salarioTotal());