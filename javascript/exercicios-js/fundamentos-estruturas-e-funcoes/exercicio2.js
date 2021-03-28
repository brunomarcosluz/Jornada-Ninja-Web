// Segundo exercício sobre estruturas de controle e funções

/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */


function QualTrianguloE(a,b,c) {
    if ( a===b, a===c, b===c ){
        console.log("Equilátero");
    } 
    else if (a===b || a===c || b===c) {
        console.log("Isósceles");
    }
    else if (a != b, a!=c, b!=c){
        console.log("Escaleno");
    }
}

QualTrianguloE(10,10,10) // Equilátero
QualTrianguloE(2,0,2) //Isósceles
QualTrianguloE(5,2,3)// Escaleno
