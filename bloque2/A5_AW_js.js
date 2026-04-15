let censo = () => {
    let dni = 1;
    let personas = 0, varones = 0; mujeres = 0, edadMayor = 0;
    do {
        dni = prompt("Introduzca su número de documento (0 para terminar)");
        if (dni != 0) {
            alert("Nueva persona censada");
            personas++; 
            let edad = parseInt(prompt("Introduzca su edad"));
            let sexo;
            // Introduce sexo
            do {
                sexo = prompt("Introduzca su sexo (Masculino o Femenino)");
            } while (sexo != "Masculino" && sexo != "Femenino");
            // Compruebo varones o mujeres
            if (sexo == "Masculino") {
                varones++;
            } else {
                mujeres++;
            }
            // Compruebo la edad
            if (edad >= 16 && edad <= 65) {
                edadMayor++;
            }
        }
    } while(dni != 0);
    document.writeln("El número de personas censadas es de: " + personas);
    document.writeln("El número de varones censados es de: " + varones);
    document.writeln("El número de mujeres censadas es de: " + mujeres);
    document.writeln("El número de personas censadas entre 16 y 65 años es de: " + edadMayor);
}
censo();