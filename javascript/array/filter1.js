const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'RTX 3080ti', preco: 10000, fragil: true},
    { nome: 'Teclado Corsair', preco: 500, fragil: true},
    { nome: 'Nokia Tijolão', preco: 100, fragil: false}
]

console.log(produtos.filter(function(p) { 
    return p.preco > 1000 
}));

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))