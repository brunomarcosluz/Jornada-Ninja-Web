// Comparando funções factory com Classes em java script

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    
    falar() {
        console.log(`Hi my name is ${this.nome}`)
    }
}

const p1 = new Pessoa("Bruno")
p1.falar()

// Função Factory

const Pessoa2 = nome => {
    return {
        falar: () => console.log(`Hi Bruno my name is ${nome}`)
    }
}

const p2 = Pessoa2("Bernard")
p2.falar()