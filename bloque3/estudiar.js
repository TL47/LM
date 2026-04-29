let gestionarNotas = () => {
    let nota = 0, suma = 0, aprobados = 0, suspendidos = 0, total = 0;
    do {
        do {
            nota = parseInt(prompt("Introduce la nota del alumno (0-10) o -1 para terminar:"));
            if ((nota < 1 || nota > 10) && nota != -1) {
                alert("Nota no válida")
            }
        } while ((nota < 1 || nota > 10) && nota != -1);
        if (nota != -1) {
            if (nota >= 5) {
                aprobados++;
            } else {
                suspendidos++;
            }
            suma += nota;
            total++;
        }
    } while (nota != -1);
    if (total > 0) {
        let media = suma / total;
        document.write("Alumnos aprobados: " + aprobados + "<br>");
        document.write("Alumnos suspendidos: " + suspendidos + "<br>");
        document.write("Nota media: " + media);
    } else {
        document.write("No se introdujeron notas.");
    }
}
gestionarNotas();