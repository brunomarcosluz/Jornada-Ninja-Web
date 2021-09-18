const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'RTX 3080ti', preco: 10000, fragil: true},
    { nome: 'Teclado Corsair', preco: 500, fragil: true},
    { nome: 'Nokia Tijolão', preco: 100, fragil: false}
]

console.log(produtos.filter(function(p) { 
    return p.preco > 1000 
}));