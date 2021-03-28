// TIpos de Declaração de funções em javascript

// function declaration

/* Ou Funções declaradas, é a forma padrão de se declarar funções
em javascript é bem comum, e na minha opinião mais formal.  */

function soma(a,b) {
    return a + b
}

// function expression (funções anônimas)

/* Possuem uma única desvantagem, temos que declarar o output depois que a função
foi declarada, o que não acontece com a `Function Declaration` */

const sub = function (a,b) {
    return a - b    
}

// named function expression

/* Eu as nomeei de funções anônimas nomeadas, a única diferença
é que esse trem possui nome, uma vantagem na hora do debug */

const mult = function mult(a,b) {
    return a * b    
}

console.log(soma(2,2));
console.log(sub(10,6));
console.log(mult(2,2));