// Estudo sobre como as funçoes se comportam dentro do Javascript

/* O Javascript é uma linguagem multiparadigma ou seja
com ela podemos programar de forma estruturada, orientada a objetos etc.

Olha aqui em baixo o que as funções podem fazer: */

// como é uma função declarada literalmente:

function nome() {}

// como é uma função armazenada em uma variável:

var func = function() {}

// podemos armazenar em um array também:

const array = [function(a,b){return a + b}]
console.log(array[0](2,2));

// armazenar em um atributo de um objeto:

const obj = {} // lembra que é assim que cria um obj né? (= {})

obj.falar = function(){return 'Eaeee!'}
console.log(obj.falar());

// podemos passar uma função como parâmetro de outra função:

function run(fun){
    fun()
}
run(function(){console.log('Executando função')})

// uma função pode retornar/conter outra função:

function soma(a,b) {
    return function(c){
        console.log(a + b + c);
    }    
}
soma(2,3)(4) // o (4) é a variável (c)