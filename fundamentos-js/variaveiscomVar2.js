// exemplo do conceito global na prática


var numero = 1 //declaramos no escopo global fora de um bloco de código

{
    var numero = 2 // mesmo dentro de um bloco a variavel sobrescreve a nossa fora do bloco
    console.log('dentro do bloco = ', numero);
}

console.log("fora do bloco = ", numero); // saída = 2 