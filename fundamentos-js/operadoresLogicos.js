// estudos sobre operadores lógicos e como funcionam em JS

/* Possuem a famosa tabela verdade, conhecida pela maioria dos
programdores:

(v= verdadeiro e f= falso)

v + v = v
v + f = f
f + f = f 

basta um único atributo ser falso para dar falso

exemplo: v + v + v + v + f = false 

Os operadores:

 || (ou)
 && (e)
 != (xor) "só faça isso se esse não der"
 !atributo (operador únario para negação) */

// exercício prático: 

function compras(trabalho1,trabalho2){
    const ComprarPS5 = trabalho1 && trabalho2;
    const TomarSorvete = trabalho1 || trabalho2;
    const ComprarPS2 = trabalho1 != trabalho2;
    const Saudavel = !TomarSorvete

    return {ComprarPS5, TomarSorvete, ComprarPS2, Saudavel}
}

console.log(compras(true, true));
console.log(compras(false, true));
console.log(compras(false, false));