// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const vetor = (num) =>{
    let max = Math.max(...num)
    let min = Math.min(...num)

    return `Maior número: ${max}. Menor número: ${min}.`
}

console.log(vetor([5, 3, 2, 57, 20, 1]))
