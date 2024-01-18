let listaDeNumeros = [];
let numeroLimite = 10;

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = listaDeNumeros.length;

    if (quantidadeLista == numeroLimite){
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');    
}

mensagemInicial() 

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativa + '!';
    
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas += 1;
        limparCampo()
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}