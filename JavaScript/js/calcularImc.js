var titulo = document.querySelector(".titulo");
titulo.textContent = "Julio Nutricionista";	//atribui valor de texto a tag

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i<pacientes.length; i++){
	console.log(pacientes[i]);

	var peso = (pacientes[i].querySelector(".info-peso")).textContent ;
	var altura = (pacientes[i].querySelector(".info-altura")).textContent;
	var tdimc = pacientes[i].querySelector(".info-imc");
	if(peso <= 0 || peso >= 500){
		tdimc.textContent = "peso invalido!";
		pacientes[i].classList.add("paciente-invalido");
	}
	else if(altura <= 0 || altura >= 3.00){
		tdimc.textContent = "altura invalida!";
		pacientes[i].classList.add("paciente-invalido");
	}
	else{
		var imc = calcularImc(peso,altura);
		tdimc.textContent = imc
	}	
}

function calcularImc(peso,altura) {
	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}



