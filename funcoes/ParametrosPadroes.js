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