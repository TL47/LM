let calcularPrecio = () => {
    let valor = document.getElementById('pizza').value;
    let cantidad = document.getElementById('cantidad').value;
    let total = document.getElementById('total');
    let precio;
    switch (valor) {
        case "queso":
            precio = 4;
            break;
        case "jamon":
            precio = 6;
            break;
        case "especial":
            precio = 10;
            break;
    }
    total.value = (precio * cantidad) + "€";
}