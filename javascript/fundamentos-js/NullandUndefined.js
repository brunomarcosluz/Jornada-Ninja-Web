// Estudos sobre Null e Undefined diferenças e boas práticas

var exemplo // variável não inicializada, valor undefined.
console.log(exemplo);
/* a sentença: console.log(exemplo.toString); vai gerar erro, como não foi inicializada o JS entende que não vai ser usada.
*/

var exemplo = null // variável inicializada, com o valor nulo.
console.log(exemplo);

/* a principal diferença está no conceito teórico da coisa

Null = valor nulo ou seja neutro/inexistente
Undefined = valor indefinido/ não inicializado

*/ 