// Introdução a Orientação a Objetos

/* Orientação a Objetos é um paradigma muito importate para a história
da computação, e como microcomputadores eram programados, a ideia principal do 
paradigma é abstrair coisas físicas ou não do mundo real e transformá-las em
cóigo fonte.

Observe a seguir como eu Me transformei em um Objeto colocando poucas 
características minhas como atributos: */

const Bruno = {
    nomeCompleto: 'Bruno Marcos Luz de Macedo',
    graduacao: 'Ciência da Computação 5/8',
    linguagens: ['Javascript', 'Java', 'PHP', 'C'],
    idiomas: ['Inglês', 'Português-BR', 'Francês Básico']
}

console.log(Bruno.graduacao)
console.log(Bruno.idiomas)
console.log(Bruno.linguagens)

const Carro = {
    fabricante: ['bmw','mercedes','ford','ferrari'],
    modelo: ['X1','AMG-GT Coupé','Mustang','f488'],
    cor: ['vermelho','prata', 'preto', 'chumbo'],
    velMax: [280,350,400,250],
    qtdBancos: [4,2]
}
console.log(Carro.fabricante);
console.log(Carro.modelo);
