let listaComNumerosSorteados = [];
let numeroDeNumerosJogo = 3;
let numeroSecreto = numeroAleatorio();
tentativas = 1;

function exibirTextoNaTela(tag, texto){
   let paragrafo = document.querySelector(tag);
   paragrafo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 a ' + numeroDeNumerosJogo);
}

exibirMensagemInicial();
 
function verificarChute() {
   
   let numeroChute = document.querySelector('input').value
   
   if (numeroSecreto == numeroChute){

    // reativando o botao de novo jogo
   document.getElementById('reiniciar').removeAttribute('disabled');


    let palaravraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = (`Parabéns, voce acertou ${numeroSecreto} em ${tentativas} ${palaravraTentativa}`)

    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativas);

   } else if (numeroChute > numeroSecreto) {

    exibirTextoNaTela('h1', 'Errou!');
    exibirTextoNaTela('p', 'Seu chute está maior do que o número secreto.');

   } else {

    exibirTextoNaTela('h1', 'Errou!');
    exibirTextoNaTela('p', 'Seu chute está menor do que o número secreto.');

   }

   tentativas++;

   // limpando campo quando erra
   function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
   }

   limparCampo();

}

// numero aleatorio de 1 a 10
function numeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroDeNumerosJogo + 1);
   let tamanhoLista = listaComNumerosSorteados.length;

   if (tamanhoLista == numeroDeNumerosJogo){
    listaComNumerosSorteados = [];
   }

   if (listaComNumerosSorteados.includes(numeroEscolhido)){
    return numeroAleatorio()
   } else {
    listaComNumerosSorteados.push(numeroEscolhido);
    console.log(listaComNumerosSorteados);
    return numeroEscolhido;
   }
}

function reiniciarJogo(){

    numeroSecreto = numeroAleatorio()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
