// Estudo sobre template string

/* Template string é uma forma para reduzir concatenações
implementado na versão 2015 do ECMAScript 

com ele podemos fazer literalmente templates
utilizando a interpolação ${valor} outro recurso novo também!

vamos para exemplos: */

var nome = "Bruno"
const template = `Olá ${nome}, você está usando template strings!` // perceba que o conteúdo é fechado por crases `conteúdo`
console.log(template);

/* como ficaria essa sentença sem o template string: 

const concatenacao = 'Olá ' + nome + 'Você não está usando template strings??'
*/

console.log(`1 + 2 =  ${1 + 2} `); // Fora da interpolação o JS interpreta como texto comum