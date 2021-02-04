// estudo sobre a função Bind.

/* A função bind ira amarrar o this em seu contexto
léxico devido, e não vai permitir que ele varie */

// exemplo sme Bind

const pessoa = {
    saudacao: "Bom dia!",

    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar() 

const falar = pessoa.falar // armazenando o atributo do objeto à uma variável.
falar() // undefined o this variou, safado!
