let concat = () => {
    let nombre = document.getElementById("name");
    let apellido = document.getElementById("apellido");
    let total = document.getElementById("completo");
    total.value = nombre.value + " " + apellido.value;
}