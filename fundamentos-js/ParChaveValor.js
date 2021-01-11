// Estudo sobre Par/Chave/Valor (contexto léxico)

const jogoFav = 'Red Dead' // contexto léxico 1

function game(){
    const jogoFav = 'Civilization VI' // contexto léxico 2
    return jogoFav
}

console.log(jogoFav); 
console.log(game());

/* as constantes não se conflitaram mesmo com o nome idêntico,
pois não estão no mesmo contexto léxico já que uma 
se encontra na função game() */

var game = 'Mortal Kombat'

function jogo() {
    var game = 'Street Fighter'
    return game    
}

console.log(game);
console.log(jogo());