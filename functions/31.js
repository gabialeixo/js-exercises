/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

const vetor = (num) =>{
    let contador = 0

    for(let i = 0; i < num.length; i++){
        if((num[i] < 0) ? -1 : 0 ){
            Math.sign(num[i])
            contador++
        }
    }
    return `Números negativos: ${contador}.`
}

console.log(vetor([10, -4, 3, 6 -10, 24, -56]))