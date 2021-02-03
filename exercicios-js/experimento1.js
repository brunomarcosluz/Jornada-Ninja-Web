// Primeiro experimento aplicando conceitos estudados

/* Este experimento em geral aborda o tema estudado sobre
parâmetros padrões, onde gostaria de coloco um teste lógico sobre ele */

function soma(a=1,b=1,c=1) {
    if (a==0,b==0,c==0){
        console.log("zero");
    }  else {
        return a + b + c
    }  
}

console.log(soma(0,0,0));

function soma1(a,b,c){
    if (a==0,b==0,c==0){
        console.log("0 (zero)");
    } else {
        a = a || 1
        b = b || 1
        c = c || 1
        return a + b + c
    }
}

console.log(soma1(0,0,0));