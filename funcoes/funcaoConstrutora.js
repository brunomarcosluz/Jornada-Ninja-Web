// Vamos Coonstruir!! hehe

/* Funções construtoras são basicamente Classes em Java,
aqui no javascript Classes já são uma funcionalidade com a chegada do ES6.
Veremos mais adiante no contexto de Orientação a Objetos, por enquanto
voltemos as nossas funções:

Função Construtora = Função normal que podemos instanciar um objeto com a palavra New 

exemplo com código para facilitar a visualização em prática: */

function Carro(velocidadeMax = 220, delta=10) {
    let velocidadeAtual = 0
}

this.acelerar = function () { // função anônima, já vimos isso em!
    if (velocidadeAtual + delta <= velocidadeMax) {
        velocidadeAtual += delta
    } else {
        velocidadeAtual = velocidadeMax
    }
}

this.getVelocidadeAtual = function (){
    return velocidadeAtual
}

const Celta = new Carro