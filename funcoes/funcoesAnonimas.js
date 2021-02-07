// Estudo sobre funções anônimas e como se comportam

/* Em javascript podemos fazer funções anônimas que
basicamente são: funções sem nome

segue exemplo com código: */

// armazenando uma função em uma constante
const soma = function (a,b) {
    return a + b
}

const imprimirResultado = function(x,y, operacao=soma){
    console.log(x,y);
}

// criando uma função em uma chamada:
imprimirResultado(3,4, function (a,b){
    return a - b
})

// podemos criar funções dentro de atributos de objetos:

const Pessoa = {
    falar: function () {
        console.log("Eae mano!");
    }
}

Pessoa.falar()