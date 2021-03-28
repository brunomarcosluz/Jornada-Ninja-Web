// estudo sobre a palavra reservada this em JS

/* o This pode variar de acordo com o contexto léxico o que é 
mais uma das estranhezas do javascript

dica: aqui estudaremos soluções para que o this não varie */

function f1(){
    console.log(this === window); // estritamente igual a window
}

f1() // saída no browser = true

/* agora faremos um teste que quando ao clicar no browser 
o this irá variar. */

document.getElementsByTagName('body')[0].onclick = f1()

f1() // saída no browser ao clicar na tela = false.