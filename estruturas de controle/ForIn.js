// O For In 28/01/2021

/* O for In diferente do for tradicional é raramente 
usado, mas pode vir a calhar quando o assunto se trata 
percorrer arrays ou atributos de objetos

observe: */

// primeiro vamos ver o exemplo com array:

const notas = [2,9,8.5,10,10]

for(i in notas){
    console.log(i, notas[i]);
}
/* se você rodou o código percebeu que o for in 
retorna o restulado com o número do indice exemplo 
a nota 2 está no índice 0 do array */

// exemplo com objeto:

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Marcos',
    idade: 19,
    sexo: 'M'
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`); // atribuindo atributo a pessoa
}