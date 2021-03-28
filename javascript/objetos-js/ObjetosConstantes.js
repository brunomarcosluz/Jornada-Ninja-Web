// Afinal Objetos são constantes?

/* uma pergunta que vem a nossa mente é como um objeto é constante
se podemos alterá-lo a partir de outras funções e métodos.

A verdade é que só podemos alterar os atributos desses objetos,
acompanhe o exemplo com código */

const Pessoa = {
    nome: 'Bruno'
}

Pessoa.nome = 'Marcos' // altereando o atributo (nome) não o Objeto (Pessoa)!
console.log(Pessoa)