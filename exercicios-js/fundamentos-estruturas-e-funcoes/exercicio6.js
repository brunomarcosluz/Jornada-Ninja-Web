// Seja bem vindo ao sexto desafio javascript!

/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos */

// C = Capital, i = taxa de juros, t = tempo de aplicação
function jurosSimples(C,i,t) {
    let montante 
    const juros = 200
    montante = C + juros
    t = juros / C
    return console.log("montante= ",montante, "\ntaxa de juros= ", t,'%');
}

jurosSimples(1000)

function jurosCompostos(C,i,t){
    let juros = C * i * t
    let montante = C + juros
    return console.log("montante= ",montante, "\ntaxa de juros ao mês= ",i,'%');
}

jurosCompostos(1000,0.40,12)