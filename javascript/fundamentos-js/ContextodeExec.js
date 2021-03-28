// Contexto de execução Browser vs Node

/* Esta aula foi baseada e serviu como um
reforçodo que o professor vem comentando ao longo
do curso o contexto global e o objeto window */

// dentro do Node cada arquivo é um módulo diferente
// nossa aplicação fica toda modularizada

let a = 3 
globalThis.b = 123
this.c = 456

console.log(a);
console.log(this.a);
console.log(global.b);
console.log(module.exports.c);