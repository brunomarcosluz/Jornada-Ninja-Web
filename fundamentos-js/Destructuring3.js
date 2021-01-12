// Mais fundo em Destructuring 

/* Podemos fazer uma função e passar um objeto destructuring para ela
segue o exemplo: */

function rand({min=0, max=1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min:60, max:80}));

/* com basicamente o mesmo código podemos fazer com array, basta trocar o 
par de chaves {} por colchetes [] */

// function rand([min=0, max=1000])