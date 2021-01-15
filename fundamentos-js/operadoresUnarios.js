// Estudo sobre operadores Unários e como se comportam em JS

/* Assunto simples mas fundamental
operações unárias são feitas com um único operadores
dai vem o nome.

exemplos: */

let num1 = 1
let num2 = 2

//num1++ seria o mesmo que num1 + 1
//--num2 seria o mesmo que 1 - num2

/* Forma Pré fixada tem preferência na operação exemplo: */

console.log(++num1 === num2--); // saída = true o js reduz o valor do num2 só depois
console.log(num1 === num2); // agora a saída é false
