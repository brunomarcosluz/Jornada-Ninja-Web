// estudo sobre get e set em javascript

/* Esses métodos nos garantem encapsulamento em um bloco de código
você pode ver como o objeto sequência foi estruturado, eu não
posso acessar o atributo _valor e alteralo sem o método get */


const sequencia = {
    _valor: 1,
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);