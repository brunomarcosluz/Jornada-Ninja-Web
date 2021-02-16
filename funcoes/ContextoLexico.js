// revisão sobre contexto léxico

/* Introdução a Closures;

Contexto léxico se trata de onde a variavel foi declarada, ou seja,
toda variável ou constante ela trara o contexto léxico onde foi
declarada: 

exemplo com código */

const nome = "Bruno" // declarada em contexto global fora de um bloco {}

function mostrarNome() {
    console.log(nome);   
}

mostrarNome();

function mostarNome2() {
    const nome = "Bruno Luz"
    console.log(nome);
}

mostarNome2()
