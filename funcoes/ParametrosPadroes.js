// Como atribuir valores padrões em javascript

/* O parâmetro padrão é muito utilizado em JS 
a nova versão ECMAscript trouxe uma forma mais simples e
elegante de fazê-lo 

vamos aos códigos:  */

function soma(a,b,c){ // forma antiga mais ainda utilizada para fazer parâmetros padrões
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(2)); 
/* Essa forma de fazer param padrões pode gerar um erro, quando passado o 
valor 0 para a função o operador que implementamos retornará falso fazendo com
que o parâmetro padrão não seja atualizado. */

console.log(soma(0,0,0)); // saída = 3 (bug)

// Nova forma ECMAscript de se realizar parâmetros padrões:

function soma2(a=1,b=1,c=1){
    return a + b + c
}

console.log(soma2()); 

// a nova forma é mais rápida simples e direto ao ponto

// @brunomarcosluz