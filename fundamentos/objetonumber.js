// Aula sobre Números

/* Nesta aula aprendemos sobre como o Javascript trata os números e quais as
possibilidades que o objeto Number nos dá. Para continuar precisamos entender o que 
é o Number.

Number um objeto encapsulado em javascript que nos permite trabalhar com números.. óbvio!

seu construtor é segue o exeplo: */

new Number(50);

// console.log(10.toString); essa sentença de código não ira funcionar o 10 não está declarado entre ()

console.log((10).toString);

// Todo objeto possui métodos com o Number existem vários para chamar esses métodos usamos o "." (ponto):

console.log((5).toString);

/* NaN = Not a Number 

Outra particularidade do JS é que os números divididos por 0 não retornam erro e sim um tipo
diferente no javascript o infinity engraçado né? kkk */

console.log((7) / 0);

// o JS também pode converter automaticamente uma string para número e realizar um cálculo observa:

console.log("20" / 2);

// verifica o resultado ai menó! Muito massa né?!

//-----------------Bruno Marcos Luz de Macedo---------------------//