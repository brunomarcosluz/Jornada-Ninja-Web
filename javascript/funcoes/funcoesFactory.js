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

function criarCarro() {
    return {
        modelo: 'X1',
        fabricante: 'BMW',
        ano: '2021',
        cor: 'Branco Gelo'
    }    
}

console.log(criarCarro());