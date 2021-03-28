// exercício 2 - fundamentos do javascript

/* Escreva uma função que receba a idade de uma pessoa em anos e
a retorne em dias. */

let idade = 0

function IdadeEmDias(idade) {
        IdadeEmDias = idade*365
        return IdadeEmDias;
}

console.log(IdadeEmDias(20)); // uma pessoa com 20 anos vivei 7300 dias.