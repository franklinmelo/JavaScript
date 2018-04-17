var buttonAdd = document.querySelector("#adicionar-paciente");//seleciona button pela classe
buttonAdd.addEventListener("click",function(event){//captura ação de click
	
	event.preventDefault();//default no evento
	
	var form = document.querySelector("#form-add");
	var paciente = obtemDadosPaciente(form);
	var erros = validarPaciente(paciente);
	
	if(erros.length == 0){
		montarTr(paciente);//add nova linha na tabela
		form.reset();//limpa os campos do formulario
		var ul = document.querySelector("#mensagem-erro");
		ul.innerHTML = "";//limpa a ul(insere vazio a um conteudo html)	
	}else{
		exibirErros(erros);
	}

});

function obtemDadosPaciente(form){
	var paciente = {//objeto
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
	
	pacienteTr.appendChild(montarTd(paciente.nome,"info-nome"));//torna a tag pai das outra (ex: faz as tags <td> ficar detro da <tr>) 
	pacienteTr.appendChild(montarTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montarTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(montarTd(paciente.gordura,"info-gordura"));
	pacienteTr.appendChild(montarTd(paciente.imc,"info-imc"));

	var tbody = document.querySelector("#tabela-pacientes");
	tbody.appendChild(pacienteTr)
};

function montarTd(info, classe){
		var td = document.createElement("td")
		td.textContent = info;
		td.classList.add(classe);
		return td;
}

function validarPaciente(paciente){

	var erros = [];
	if(paciente.nome.length == 0){
		erros.push("Nome do paciente em branco");//push adiciona dentro de um arrei
	}
	if(!validarPeso(paciente.peso) || paciente.peso.length == 0){
		erros.push("Peso inválido!");
	}
	if(!validarAltura(paciente.altura) || paciente.altura.length == 0){
		erros.push("Altura inválida!");
	}
	if(paciente.gordura.length == 0){
		erros.push("% de gordura invalido!");
	}
	return erros;
}

function exibirErros(erros){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";
	erros.forEach(function(erros){//forEach vai do começo ate o fim de um array
		var li = document.createElement("li");
		li.textContent = erros;
		ul.appendChild(li);
	});
}