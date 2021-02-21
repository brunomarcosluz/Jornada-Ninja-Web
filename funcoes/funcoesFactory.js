// estudo sobre funções factory

/* Funções factory ou funções "fábricas" basicamente retornam
uma instância de um novo objeto

exemplo com código: função criarPessoa */

function criarPessoa() {
    return {
        nome: 'Bruno',
        sobrenome: ' Marcos'
    }
}

console.log(criarPessoa());

