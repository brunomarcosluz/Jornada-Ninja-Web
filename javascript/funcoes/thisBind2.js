// se aprofundando no This e Bind

/* neste estudo você irá ver mais duas formas de amarrar o this
para que ele não saia do contexto léxico

existem duas maneiras sendo elas:

- usar o bind dentro do contexto
- criar uma constante que armazene o this */

// exemplos com código!

function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade);
    }/*.bind(this) */,1000) // basta descomentar este trecho para arrumar o problema com o bind
}

new Pessoa // aqui o this sai do contexto e referencia outra idade sabe la da onde..

// com a constante é um pouco diferente:

function Pessoa2(){
    this.idade = 0
    const self = this // amarrando o this a uma constante

    setInterval(function(){
        self.idade++
        console.log(self.idade);        
    },1000)
}

new Pessoa2 

/* com o this amarrado a uma constante garantimos que ele nunca irá
variar independente da onde for chamado. */
