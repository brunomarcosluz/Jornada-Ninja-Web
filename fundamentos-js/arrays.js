/* Estudos sobre arrays em javascript

O que é? Um lista indexada capaz de armazenas inúmeros dados de diversos tipos
o ideal é que se crie um array para cada tipo de dado para seguir as boas práticas
de desenvolvimento */

const exemplo = [1,2,3,4] // a forma como se declara um novo array

console.log(exemplo);
console.log(exemplo[1]); // aqui chamo o index do array e não o valor em sí a saída é 2.
// os arrays são indexados a partir do número 0!

exemplo.push({id: 2}, false, null, "teste"); // métodos no objeto array o push acrescenta
console.log(exemplo);
console.log(exemplo.pop()); // o pop tira
delete exemplo[3] // o delete apaga deixando o atributo vazio <empty item>
console.log(exemplo);