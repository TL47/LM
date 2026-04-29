let obtenerTraduccion = (palabra) => {
    let map = new Map([
        ["perro", "dog"],
        ["gato", "cat"],
        ["casa", "house"],
        ["mesa", "table"]
    ]);

    return map.get(palabra);
}

let seleccion = prompt("Introduce una palabra (casa, mesa, perro o gato):");
document.write("Traducción: " + obtenerTraduccion(seleccion));

// .set(llave, valor): Sirve para guardar un dato. Por ejemplo, miMapa.set("edad", 25).

// .get(llave): Recupera el valor usando su llave. Si pides "edad", te devuelve 25.

// .has(llave): Te dice si esa llave ya existe (devuelve true o false).

// .delete(llave): Borra ese elemento específico de la lista.

// .clear(): Vacía todo el mapa de un solo golpe.