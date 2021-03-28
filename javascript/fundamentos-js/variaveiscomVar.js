// estudos sobre escopo global e apalavra reservada var

/* Uma váriavel fora de uma função tem escopo global

  Escopo global = pode ser alterada ou chamada globalmente sem restrições
  por todo o sistema, cheira a bug não é mesmo? */

{
    {
        {
            var teste = 'testando escopo global'
        }

    }
}

console.log(teste); /* essa chamada está fora dos blocos de código mas 
mesmo asism conseguiu chamar a nossa váriavel declarada lá dentro */

var teste = t => { // usando arrow function
    t = 'testando escopo global em função'
    return t
}

console.log(teste());