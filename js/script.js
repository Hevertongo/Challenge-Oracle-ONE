// Variáveis
var botao1 = document.querySelector('button.botao1');
var botao2 = document.querySelector('button.botao2');
var botaoCopia = document.getElementById('botaoCopia')


// Interações
botao1.onclick = criptografa;
botao2.onclick = descriptografa;
botaoCopia.onclick = copiaTexto;


// Funções
function criptografa() {
	// body...
	alert("criptografa");
}

function descriptografa() {
	// body...
	alert("descriptografa");
}

function copiaTexto() {
	alert("copiaTexto");
}