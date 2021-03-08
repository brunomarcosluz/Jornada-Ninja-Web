// Funções importantes de Object

/* Todo objteto possui métodos lembra? Pois é, aqui veremos 3 muito importantes
para a linguagem e usados com certa frequencia, vamos lá:

1. Keys -> Chaves do objeto criado
2. Values -> Valores dentro das "keys" do objeto criado
3. Entries -> Entradas, é o conjunto de keys + values */

const Pessoa = {
    nome: 'Bruno',
    idade: 19,
    peso: 85
}

console.log(Object.keys(Pessoa));
console.log(Object.values(Pessoa));
console.log(Object.entries(Pessoa)); // -> cria um array e podemos percorrer com o ForEach se liga! :

Object.entries(Pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})