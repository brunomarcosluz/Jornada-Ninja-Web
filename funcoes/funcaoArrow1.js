// Aprofundando-se em Arrow Function

/* No capítulo de fundamentos já tivemos contato com a 
nova função em javascript implementada no ECMAscript 2015

a arrow function é uma maneira de diminiur a sintaxe do código,
mas pode dificultar a legibilidade por não programadores de javascript */

// como é uma função comum:

function soma(a,b,c) {
    return a + b + c
}

console.log(soma(1,1,1));

// o mesmo código mas com arrow function:

soma1 = (a,b,c) => {
    return a + b + c
}

console.log(soma1(2,2,0));

// podemos remover o bloco da arrow function: