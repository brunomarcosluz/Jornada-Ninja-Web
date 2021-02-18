// terceiro exercício - fundamentos javascript

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.  */

function calcularSalario(QtdHoras,ValorHora) {
    calcularSalario = QtdHoras * ValorHora
    console.log(`Salário igual a R$: ${calcularSalario}`);
}

calcularSalario(220,20)