// Estudos sobre a palavra reservada Let

/* Em JS let declara uma variável assim como var
mas diferente de sua prima ela possui 1 escopo a mais o de blocos

observe com detalhes a seguir: */

var nome = 'Bruno'

{
    let nome = 'Marcos' // variável com o mesmo nome mas não altera o conteúdo da de fora.
    console.log(nome);
}

console.log(nome);

//observe o que acontece se eu usar var

var n = 'Luz'

{
    var n = 'de Macedo' // aqui o var irá sobrescrever a nossa variável declarada ali em cima
    console.log(n);
}

console.log(n);