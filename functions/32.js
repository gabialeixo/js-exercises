// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const vetor = (num) =>{
    let soma = 0

    for(let i in num){
        soma += num[i]
    }
    return `A média dos vetores é ${soma/num.length}`
}

console.log(vetor([10, 35, 4, 6, 17]))