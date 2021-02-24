// Comparando funções factory com Classes em java script

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Bruno")
p1.falar()