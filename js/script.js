// Variáveis
var botao1 = document.querySelector('button.botao1');
var botao2 = document.querySelector('button.botao2');
var botaoCopia = document.getElementById('botaoCopia');
var entrada = document.getElementById('entrada');
var saida = document.getElementById("saida");
// Coloca o cursor dentro da caixa de entrada
entrada.focus();

// Interações
botao1.onclick = criptografa;
botao2.onclick = descriptografa;
// Não funciona colocando ação onclick aqui, a linha com o botão ainda não existe no HTML
// botaoCopia.onclick = copiaTexto;


// Funções
function criptografa() {

	// Verifica se houve entrada de caracteres
	if (entrada.value.length == 0) {
		// Mostra a imagem, mensagem de erro e placeholder do erro de entrada sem caracteres
		erroAreaResultado();
		// Limpa o conteúdo da saída para aparecer o placeholder
		saida.value = '';
		entrada.focus();

	} else {
		// limpa a entrada de acentos acidentais (minúsculas controlado pelo CSS) e coloca o resultado dentro da variável
		var textoEntrada = removeAcento();
		// Substitui as vogais pelas chaves pre definidas
        var textoCriptografado = textoEntrada.split(/e/igm).join("enter").split(/i/igm).join("imes").split(/a/igm).join("ai").split(/o/igm).join("ober").split(/u/igm).join("ufat");
        // Remove imagem e mensagem de erro, adiciona também o botão de copiar mensagem criptografada.
		limpaAreaResultado();
		// Coloca o texto criptografado na área de saída
		document.getElementById("saida").value = textoCriptografado;
		// Coloca o foco na área de entrada
		entrada.focus();
	}
}

function descriptografa() {

	// Verifica se houve entrada de caracteres
	if (entrada.value.length == 0) {
		erroAreaResultado();
		saida.value = '';
		entrada.focus();
	} else {
		var textoEntrada = removeAcento();
		var textoDescriptografado = textoEntrada.replace(/enter/igm, "e").replace(/imes/igm, "i").replace(/ai/igm, "a").replace(/ober/igm, "o").replace(/ufat/igm, "u");
		limpaAreaResultado();
		document.getElementById('saida').value = textoDescriptografado;
		entrada.focus();
	}
}

function copiaTexto() {
	saida.select();
	document.execCommand('copy');
	alert("Copiado para área de Transferência.");
}

function removeAcento() {
	var semAcento = entrada.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	return semAcento;
}

// Função para remover imagem e mensagem de erro, adiciona também o botão de copiar mensagem criptografada.
function limpaAreaResultado () {
	document.getElementById('msgNone').innerHTML = '<h2 id="msgNone" class="naoEncontrado"></h2>';
	// document.getElementById('msgDigiteTexto') =;
	document.getElementById('imgLupa').style.display = 'none';
	// O botão é criado quando clica em um dos botões quando há caracteres
	document.getElementById('areaBotao').innerHTML = '<button id="botaoCopia" class="botao2" onclick="copiaTexto()"><h4>Copiar</h4></button>';
	// Coloca um valor diferente de nulo para remover a mensagem do placeholder
	document.getElementById("msgDigiteTexto").innerHTML = '&nbsp';
}

function erroAreaResultado () {
	// remove o display = none
	document.getElementById('imgLupa').style.display = '';
	// apresenta mensagem de erro
	document.getElementById('msgNone').innerHTML = '<h2 id="msgNone" class="naoEncontrado">Nenhuma mensagem encontrada</h2>';
	// Exibe novamente o texto do placeholder
	document.getElementById('msgDigiteTexto').innerHTML = '';
	document.getElementById('areaBotao').innerHTML = '';
}