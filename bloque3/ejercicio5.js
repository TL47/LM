let calcularPrecio = () => {
    let valor = document.getElementById('pizza').value;
    let opcion = document.getElementById('precio');
    switch (valor) {
        case "Jamon":
            opcion.value = "4€";
            break;
        case "Muzzarella":
            opcion.value = "6€";
            break;
        case "Morrones":
            opcion.value = "10€";
            break;
    }
}