// introdução a herança parte fundamental da orientação de objetos

/* Herança assim como seu nome propriamente diz, é quando se herda 
atributos de uma classe pai (ou mãe)

Em javascript herança se da pelo atributo [[prototype]] */

const CarroLuxo = {
    velMax: '240Km/h',
    qtdRodas: 4,
    arCondicionado: true,
    vidroEletrico: true
}

const BMW = {
    modelo: '320i',
    cor: 'preto',
    __proto__: CarroLuxo // definindo o objeto que herdaremos
}

console.log("modelo:", BMW.modelo, ", Ar-Condicionado:", BMW.arCondicionado, ", Velocidade Máxima:", BMW.velMax);

// Herança 2

// cadeia de protótipos (prototype chain)

Object.prototype.Attr0 = 'Zero'
const avo = { Attr1: 'A' }
const pai = {__proto__: avo, Attr2: 'B'}
const filho = {__proto__:pai, Attr3: 'C'}
console.log(filho.Attr1, filho.Attr0)