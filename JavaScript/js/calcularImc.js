var titulo = document.querySelector(".titulo");
titulo.textContent = "Julio Nutricionista";	//atribui valor de texto a tag

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i<pacientes.length; i++){
	console.log(pacientes[i]);

	var peso = (pacientes[i].querySelector(".info-peso")).textContent ;
	var altura = (pacientes[i].querySelector(".info-altura")).textContent;
	var tdimc = pacientes[i].querySelector(".info-imc");
	if(!validarPeso(peso)){
		tdimc.textContent = "peso invalido!";
		pacientes[i].classList.add("paciente-invalido");//adiciona uma classe a tag
	}
	else if(!validarAltura(altura)){
		tdimc.textContent = "altura invalida!";
		pacientes[i].classList.add("paciente-invalido");
	}
	else{
		var imc = calcularImc(peso,altura);
		tdimc.textContent = imc
	}	
}

function validarPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}

function validarAltura(altura){
	if(altura >= 0 && altura < 3.00){
		return true;
	}else{
		return false;
	}
}

function calcularImc(peso,altura) {
	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2);//toFixed limita o numero depois da virgula
}



