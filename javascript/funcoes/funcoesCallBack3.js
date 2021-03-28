// Ja vimos funções call Backs 2 vezes a terceira é da sorte não é?

/* Você deve ter percebido a importância desse assunto devido a quantidade de exemplos
e coisas que eu digito aqui, bem vamos lá para mais um!

o contexto no qual eu executava os outros 2 exemplos eram no runtime do Node.js
agora você verá como funciona uma callback no contexto principal da onde o javascript 
nasceu o Browser! */

// no browser o contexto global é o document portanto..

document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('o evento ocorreu!');
}

// saída no browser ao clicar no body da página = "o evento ocorreu!"