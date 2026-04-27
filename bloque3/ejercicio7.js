let mostrarDeportes = () => {
    let dep1 = document.getElementById('dep1');
    let dep2 = document.getElementById('dep2');
    let dep3 = document.getElementById('dep3');
    let cad = "";
    if (dep1.checked) {
        cad += "Ha seleccionado Fútbol <br>"; 
    }
    if (dep2.checked) {
        cad += "Ha seleccionado Básket <br>"; 
    }
    if (dep3.checked) {
        cad += "Ha seleccionado Tenis <br>"; 
    }
    document.getElementById('resultado').innerHTML = cad;
}