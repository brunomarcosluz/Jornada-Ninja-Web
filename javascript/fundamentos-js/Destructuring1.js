// Descruturing em Javascript

/* Como uma nova funcionalidade no javascript o destructuring 
exerce um papel importante no JS ele pode desestruturar um
objeto ou array e se torna muito útil por isso observe: */

const pessoa = {
    nome: 'Bruno',
    idade: 19,
    endereco: {
        logradouro: 'Rua dos Bobos,',
        numero: 'Numero 0'
    }
}

const {nome, idade} = pessoa // usando destructuring
console.log(nome, idade); // os parâmetros passados para o destructuring se tornam variáveis 

//podemos criar novos nomes para essas variáveis

const {nome: n, idade: i} = pessoa
console.log(n, i); // minhas novas variáveis derivadas do objeto pessoa

const {endereco: {logradouro, numero}} = pessoa // retirando um objeto aninhado com destructuring
console.log(logradouro, numero);