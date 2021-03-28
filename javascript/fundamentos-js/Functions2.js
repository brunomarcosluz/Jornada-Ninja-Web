// Segundo estudo sobre funções em javascript

// dessa vez aplicando os conceitos aprendidos sobre arrow function e + 

var jogoFav = function(gamefav){ // atribuindo uma função em uma váriavel
    gamefav = "Red Dead"
    return gamefav
}
console.log("Meu jogo favorito é", jogoFav()); 

// como posso usar arrow function?

var jogoFav2 = (gamefav) => { // a arrow (=>) substitui a palavra function
    gamefav2 = "Civilization VI"
    return gamefav2
}
console.log("Meu segundo jogo favorito é", jogoFav2());

/* podemos ainda diminuir ainda mais o tamanho da arrow function
utilizando o conceito de return implícito!

Lembre-se que ele só pode ser usado se a função retornar apenas
uma linha de código, observe: */

const soma = (a, b) => a + b // return implícito
console.log(soma(2, 2)); //passando os parâmetros e somando..

//-------------@brunomarcosluz------------------//
