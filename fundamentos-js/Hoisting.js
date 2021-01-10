// entendendo Hoisting no javascript

/* Hoisting é um efeito de içamento
que move a declaração para o topo exemplo: */

console.log("a= ", a); // chamando a variável sem estar declarada
var a = 1 // declarei a variável, aqui o JS fará o efeito de Hoisting
console.log("a= ", a); //chamando depois de declarar a variável

// lembre-se que o hoisting ocorre apenas com a var, com let isso não acontece

console.log("b = ", b); // aqui irá gerar um erro!
let b = 2
console.log("b= ", b);