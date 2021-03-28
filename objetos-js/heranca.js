// introdução a herança parte fundamental da orientação de objetos

/* Herança assim como seu nome propriamente diz, é quando se herda 
atributos de uma classe pai (ou mãe)

Em javascript herança se da pelo atributo [[prototype]] */

const BMW = {
    modelo: '320i',
    velMax: 240
}

console.log(BMW.__proto__);