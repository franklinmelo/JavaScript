var button = document.querySelector("#buscar-pacientes");
button.addEventListener("click",function(){
	
	var xhr = new XMLHttpRequest();//cria objeto que vai fazer o request no endereço
	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");//(tipo do request, endereço)
	xhr.send();//envia o request ao server
	xhr.addEventListener("load",function(){//adiciona evento pra escutar se foi carregado o request
		
		if(xhr.status == 200){//status do request(status 200 significa que deu tudo certo)
			var pacientes = JSON.parse(xhr.responseText);//JSON.parse = pega o conteudo e coloca em um array(responseText pega o texto da respota)
			pacientes.forEach(function(pacientes){
				montarTr(pacientes);
			});
		}else{
			alert(xhr.status);
			alert(xhr.responseText);
		}
		
	});

});