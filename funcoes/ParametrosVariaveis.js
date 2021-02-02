// Parâmetros Variáveis em Javascript

/* Em javascript podemos ter funções sem nenhum parâmetro declarado,
quando fazemos isso uma propriedade da função fica inicializada vazia,
essa propriedade é chamada de arguments.

Neste exemplo utilizei o arguments para criar uma função
que me permite ter parâmetros voláteis/variantes */

function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3));
console.log(soma(1, 'Bruno'));