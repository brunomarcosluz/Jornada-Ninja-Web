// Estudo sobre a palavra reservada For em JS 27/01/2021

/* O for diferente do while é um pouco mais usado
por conta da sua simplicidade e que com ele podemos declarar
exatamente quantas repetições queremos 

observe:  */

for (i = 0; i <=10; i++){
    console.log(`i = ${i}`);
}

// esse código com o while ficaria assim:

let contador = 1
while(contador <= 10){
    console.log(`contador= ${contador}`);
    contador++
}