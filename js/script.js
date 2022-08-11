// Variáveis
var botao1 = document.querySelector('button.botao1');
var botao2 = document.querySelector('button.botao2');
var botaoCopia = document.getElementById('botaoCopia');
var entrada = document.getElementById('entrada');

// Interações
botao1.onclick = criptografa;
botao2.onclick = descriptografa;
botaoCopia.onclick = copiaTexto;


// Funções
function criptografa() {
	// body...
	// alert("criptografa");
	if (entrada.value.length == 0) {
		erroAreaResultado();
	} else {
		limpaAreaResultado();
	}
}

function descriptografa() {
	// body...
	alert("descriptografa");
}

function copiaTexto() {
	alert("copiaTexto");
}

function limpaAreaResultado () {
	document.getElementById('msgNone').innerHTML = '<h2 id="msgNone" class="naoEncontrado"></h2>';
	document.getElementById('imgLupa').style.display = 'none';
	document.getElementById('areaBotao').innerHTML = '<button id="botaoCopia" class="botao2"><h4>Copiar</h4></button>';
}

function erroAreaResultado () {
	document.getElementById('imgLupa').style.display = '';
	document.getElementById('msgNone').innerHTML = '<h2 id="msgNone" class="naoEncontrado">Nenhuma mensagem encontrada</h2>';

}