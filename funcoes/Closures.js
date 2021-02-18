// estudo sobre Closures

/* Closures não é nada mais do que o contexto léxico em ação,
para saber mais sobre contexto léxico visite o arquivp ContextoLexico.js

para facilitar:

Closure = contexto léxico no uqal o código está inserido. */

const x = 'global'

function fora(){
    const x = 'local'
    function dentro() {
        return x;        
    }
    return dentro;
}

