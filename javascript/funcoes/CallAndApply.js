// Estudo sobre o método Call e Apply

/* Ambos são métodos similares utilizados para 
fornecer um valor de this específico par auma função

o conceito é mais imsples olhando o código.

"Show me the code!" -Linus Torvalds */

function jogoFav() {
    console.log('Meu jogo fav é ', this.name);
}

const jogo = {
    name: 'Red Dead',
    developer: 'Rockstar Games'
}

jogoFav.call(jogo) // saída = Meu jogo fav é Red Dead
