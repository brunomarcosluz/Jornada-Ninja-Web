// segundo estudo referente as funções "fabricadoras ou fábricas"

/* O exemplo atual utiliza uma função factory com parametros
ou seja variaveis que podem mudar, ela ainda continua retornando um objeto
mas os parametros mudarão toda vez que chamarmos: */

function criarProduto (produto,preco){
    return {
        produto,
        preco,
        desconto: 0.1
    }
}
console.log("=== CRIANDO PRODUTOS ===");
console.log(criarProduto("Mac Book",10000));
console.log(criarProduto("PS5", 5000));
console.log(criarProduto("Você", "impagável"));

console.log("=========================================");
// factory funciton (criarAnimal)

function criarAnimal (nome,especie){
    return {
        nome,
        especie
    }
}
console.log("=== CRIANDO ANIMAIS ===");
console.log(criarAnimal("Geraldo", "Tamanduá"));
console.log(criarAnimal("Denis", "Mico-Leão-Dourado"));
console.log(criarAnimal("Nino","Cachorro"));