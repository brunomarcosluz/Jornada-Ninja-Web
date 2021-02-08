// estudo sobre funções call back

/* Funções call back se dão mais pelo seu conceito do que
por sua sintaxe em sí. 

Call Back = Chamar de volta

exemplo com código: */

const fabricantes = ["Mercedes","Ferrari","BMW"]

function imprimir(nome,indice) {
    console.log(`${indice + 1}. ${nome}`);    
}

fabricantes.forEach(imprimir) // chamando de volta a função.