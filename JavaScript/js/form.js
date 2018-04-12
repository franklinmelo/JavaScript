var buttonAdd = document.querySelector("#adicionar-paciente");//seleciona button pela classe
buttonAdd.addEventListener("click",function(event){//captura ação de click
	
	event.preventDefault();//default no evento
	
	var form = document.querySelector("#form-add");
	var paciente = obtemDadosPaciente(form);
	var pacienteTr = montarTr(paciente);
	console.log(paciente);
	

});

function obtemDadosPaciente(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calcularImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montarTr(paciente){
	var pacienteTr = document.createElement("tr");//cria elemento(tag <tr> por exemplo)
	pacienteTr.classList.add("paciente");//atribui uma classe a tag
	
	var nomeTd = montarTd(paciente.nome,"info-nome");
	var pesoTd = montarTd(paciente.peso,"info-peso");
	var alturaTd = montarTd(paciente.altura,"info-altura");
	var gorduraTd = montarTd(paciente.gordura,"info-gordura");
	var imcTd = montarTd(paciente.imc,"info-imc");
	

	pacienteTr.appendChild(nomeTd);//torna a tag pai das outra (ex: faz as tags <td> ficar detro da <tr>) 
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tbody = document.querySelector("#tabela-pacientes");
	tbody.appendChild(pacienteTr);
}

function montarTd(info, classe){
		var td = document.createElement("td")
		td.textContent = info;
		td.classList.add(classe);
		return td;
}