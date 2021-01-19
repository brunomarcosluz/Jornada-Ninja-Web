// estudo sobre tratamentos de erros em Javascript

/* Em JS temos 4 palavras reservadas para fazer o
tratamento de possíveis erros em nosso código são elas:
Try (tente)
Catch (pegue)
Throw (jogue)
Finally (finalmente)  */

// exemplo em código criando um atributo e chamando por outro:

function tratarErroeLancar(erro){
    throw new Error ("...");
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch (e) {
        tratarErroeLancar(e)
    }
}

const obj = {nome: 'Bruno' } // perceba que aqui eu utilizei nome ao invés de 'name'
imprimirNomeGritado(obj)

/*o código gerou um erro pois declarei anteriormente com name e depois fiz a */  