let traduccion = (opt) => {
    let texto;
    switch (opt) {
        case 'casa':
            texto = "House"
            break;
        case 'mesa':
            texto = "Table"
            break;
        case 'perro':
            texto = "Dog"
            break;
        case 'gato':
            texto = "Cat"
            break;
        default:
            texto = 0
    }
    return texto
}

let opt = prompt("Introduce una palabra de estas para ver su traducción: casa, mesa, perro o gato")
document.write("Traducción: " + traduccion(opt));