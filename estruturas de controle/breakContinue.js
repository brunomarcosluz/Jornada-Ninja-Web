// estudos sobre as palavras reservadas Break e Continue em JS

/* Break = quebra o código, interrompe o fluxo normal do
programa
   Continue = continua, para mas não interrompe o fluxo do
programa */

const nums = [1,2,3,4,5,6,7,8]

for(a in nums){
    if (a == 5){ // quando chegar a 5 ele interrompe o laço
        break // quebrou o fluxo do programa aqui
    }
    console.log(`${a}= ${nums[a]}`);
}

console.log("---------");

for(b in nums){
    if(b == 4){ // quando chegar no indice 4 pare e continue no próximo
        continue
    }
    console.log(`${b}= ${nums[b]}`);
}