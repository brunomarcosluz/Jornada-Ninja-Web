// Se aprofundando em Call Back Function

/* Como é feito um "call back" sem call back: */

// exemplo: quero saber as notas baixas de um aluno ao cahmar a função.

// sem call back = 
let notas = [2,4,9.8,0,10,5.8]
const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
}
// perceba a quantidade de código, a leitura se torna difícil
console.log(notasBaixas1);

// o mesmo exemplo mas com call back =

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7;
})

console.log(notasBaixas2);

// @brunomarcosluz