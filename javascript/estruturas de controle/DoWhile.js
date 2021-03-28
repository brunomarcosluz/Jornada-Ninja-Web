// Estudo sobre Do / While em javascript dia 26/01/21

/* o Do While é uma forma alternativa do While
um tanto estranha (e rara) de ser vista com essa forma alternativa
o ele executará primeiro o bloco de código e depois verifica
se há alguma condição para que ele continue 

acompanhe: */

function getIntAleatorioEntre (min, max){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getIntAleatorioEntre (-1, 10)
    console.log(`Número sorteado foi: ${opcao}.`)
} while (opcao != -1)

console.log("Já era hora de acabar!");