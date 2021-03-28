// Estudo sobre a palavra reservado Else if

/* ainda em estruturas de controle temos o primo do If o Else if
traduzindo bem porcamente significa "Então se..""

com ele podemos criar uma estrutura de com várias condições

observe: */

Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre (9, 10)){
        console.log('Quadro de Honra, parabéns');
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado!');
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação');
    } else if (nota.entre(0, 3)){
        console.log('Reprovado, se esforçe mais da próxima vez.');
    } else {
        console.log('Nota inserida é inválida');
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(1)