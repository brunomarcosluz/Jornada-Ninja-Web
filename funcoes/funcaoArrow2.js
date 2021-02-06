// Segundo estudo sobre arrow function

/* além da arrow ser menor e mais simples de ser declarada ela
possui uma particularidade em especial, ela não deixa o this variar
o contexto léxico igual vimos anteriormente.

exemplo com código:  */

let comparaComThis = function (param) { // exemplo sem arrow function
    console.log(this === param);
}

comparaComThis(global) // saída -> true (o this variou)

// exemplo com arrow function: 

let comparacomThisArrow = param => console.log(this === param);

comparacomThisArrow(global) // saída -> false (o this não variou)