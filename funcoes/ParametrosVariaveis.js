// Parâmetros Variáveis em Javascript

/* Em javascript podemos ter funções sem nenhum parâmetro declarado,
quando fazemos isso uma propriedade da função fica inicializada vazia,
essa propriedade é chamada de arguments.

Neste exemplo utilizei o arguments para criar uma função
que me permite ter parâmetros voláteis/variantes */

function soma() {
    let soma = 0 // inicializando uma variável soma.
    for(i in arguments){ // aqui o for percorre o array para somar os índices.
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3));
console.log(soma(1, 'Bruno'));


// @brunomarcosluz