// Estudos sobre a estrutura While em Javascript 

/* O While é a primeira estrutura de controle que vemos que 
se caracteriza como Laço de Repetição

While = Enquanto 

Assim como o if o While retorna um valor booleano (verdadeiro ou falso) */

function getIntAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getIntAleatorioEntre(-1, 10)
    console.log(`Número sorteado foi: ${opcao}!`);
}

console.log('Até a próxima');