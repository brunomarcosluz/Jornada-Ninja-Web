// Estudos sobre parâmetros e retornos em Javascript

/* Parâmetros e retornos em javascript são opcionais, isso nos 
da uma flexibilidade grande na linguagem, podemos escrever diferentes
padrões ou fazer grandes cagadas

aqui em baixo vou mostrar um exemplo bem maluco
de uma função que não é válida na prática */

function area(largura, altura) {
    const area= largura * altura
    if (area > 20){
        console.log(`Acima do valor permitido: ${area}m2.`); // perceba que aqui eu não usei o return
    } else {
        return area
    }
}

console.log(area(5,5));
console.log(area());

