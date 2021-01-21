// aprofundando-se no if

/* Alguns cuidados.. o IF em Javascript pode ser declarado sem
o par de chaves e isso pode causar confusão em alguns programadores */

function teste1(num){
    if (num > 7) 
       console.log(num);
}

teste1(4) // false, então não mostrará no console
teste1(9) // satisfez a condição.. Mas como??

/* Em javascript caso a estrutura If tenha apenas uma *única* sentença 
de código para executar, ela não irá precisar de um par de chaves */