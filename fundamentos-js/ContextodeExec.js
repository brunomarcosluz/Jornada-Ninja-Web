// Contexto de execução Browser vs Node

/* Esta aula foi baseada e serviu como um
reforçodo que o professor vem comentando ao longo
do curso o contexto global e o objeto window */

let a = 3 
globalThis.b = 123
this.c = 456

console.log(this.a);
console.log(global.b);