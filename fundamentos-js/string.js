/* Tipos em Javascript: String (um estudo por Bruno Marcos Luz) 

"nem só de número viverá o homem" com a String podemos tratar caracteres não números
no Javascript

acompanhe: */

const escola = "Cod3r"

console.log(escola.charAt(4)); // pega um determinado caractere dentro da string usando índices
console.log(escola.charAt(5)); // nessa linha retornará um valor nulo já que não existe índice de número 5
console.log(escola.charCodeAt(2)); // nos mostra o código da tabela ASC do caractere.

/* o substring retorna parte da string entre os índices inicial e final, ou até o final da string */
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

// como faz concatenação em JS ?

console.log("escola".concat(escola).concat(" é top!"));
// ou
console.log("escola" + escola + " é top mermão!");

// aprendendo a substituir caracteres com o replace:

console.log(escola.replace(3, "e")); // primeiro declaramos o índice que queremos depois o valor

// função split útil para fazer arrays:

console.log("Bruno,Maria,Pedro".split(',')); //a função split quebra uma linha de string em um array

//-----------------------------JS-------------------------------//

//------------------Bruno Marcos Luz de Macedo-----------------//