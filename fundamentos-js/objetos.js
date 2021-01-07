/* Tipos em Javascript: Objetos

Objetos são presentes na maioria das linguagens de programação JS não é diferente,
este é mais um dos meus estudos em Javascript é permitido a cóppia a alteração
e a distribuição deste material de livre forma seguindo a licença GNU */

// exemplos

var produto1 = { // forma tradicional de se declarar um objeto passando os atributos
    nome : 'iPhone 11', // aqui usa-se o : ao invés do =
    price : 'Sua alma'
}

console.log(produto1);

const jogoFav = {} // forma diferente gera mais dinâmica no código podemos declarar os atributos depois.

jogoFav.nome = 'Red Dead' // eis aqui um exemplo de atributo declarado depois no caso o ".nome" do jogo
console.log("Meu jogo favorito é ", jogoFav);