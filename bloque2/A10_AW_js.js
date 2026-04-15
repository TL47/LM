let calcularCuatrimestre = () => {
	let fechaActual = new Date();
	let mesActual = fechaActual.getMonth() + 1;
	let cuatrimestre = "";

	if (mesActual <= 4) {
		cuatrimestre = "primer";
	} else if (mesActual <= 8) {
		cuatrimestre = "segundo";
	} else {
		cuatrimestre = "tercer";
	}

	document.write("Estamos en el " + cuatrimestre + " cuatrimestre del año.");
};

calcularCuatrimestre();