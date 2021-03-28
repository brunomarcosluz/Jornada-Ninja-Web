/* O Ecmascript revolucionou de diversas maneiras como se programa em javascript,
antes era necessário declarar objetos de forma literal atribuindo as váriaveis
aos atributos agora isso não se faz necessário: */

const a = 1
const b = 1
const c = 1

const obj = {a: a, b: b, c : c} // Antes
console.log(obj);

const obj2 = {a,b,c} // Após Ecmascript
console.log(obj2);