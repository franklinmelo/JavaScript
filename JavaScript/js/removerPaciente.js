var table = document.querySelector("table");
table.addEventListener("dblclick",function(event){//recebe o evento (tipo duplo click ou click por exemplo)
	var alvoDoEvento = event.target; // alvo do evento(onde o evento ocorreu)
	var paiDoAlvo = alvoDoEvento.parentNode // pai do alvo do evento(quem ta acima)
	paiDoAlvo.classList.add("fadeOut");
	setTimeout(function(){
		paiDoAlvo.remove();//remove o elemento do html
	},500);
		
});
