var campoFiltro =  document.querySelector("#filtro");

campoFiltro.addEventListener("input",function (){//add evento de digitar
	var pacientes = document.querySelectorAll(".paciente");
	if(this.value.length > 0){
		for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var nome = paciente.querySelector(".info-nome");
			var expressao = new RegExp(this.value,"i");//cria um objeto de expressao regular (valor da variavel, se é caseSensitive (sem nada depois da virgula)ou caseInsentive(i))
			if(!expressao.test(nome.textContent)){//.test função que testa a variavel pra ver se tem dentro da expressão
				paciente.classList.add("ocultar");
			}else{
				paciente.classList.remove("ocultar");//remove classe
			}
		}	
	}else{
		for(var i = 0; i < pacientes.length; i++){
		 	pacientes[i].classList.remove("ocultar");
		}
		
	}
	

});