// estudos sobre a estrutura completa If + Else

/* Else funciona como um último recurso caso o If não retorne falso
exemplo: */

const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log("Aprovado, parabéns!");
    } else {
        console.log("Reprovado, se esforçe mais da próxima vez");
    }
}

imprimirResultado(10)
imprimirResultado(3)

//-----@brunomarcosluz-----//