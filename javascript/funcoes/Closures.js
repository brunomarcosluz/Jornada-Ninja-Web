// estudo sobre Closures

/* Closures não é nada mais do que o contexto léxico em ação,
para saber mais sobre contexto léxico visite o arquivp ContextoLexico.js

para facilitar:

Closure = contexto léxico no uqal o código está inserido. */

const x = 'global' // => contexto léxico "Global"

function fora(){
    const x = 'local' // => contexto léxico "Local"
    function dentro() {
        return x;        
    }
    return dentro;
}

const minhaFuncao = fora()

console.log(minhaFuncao());