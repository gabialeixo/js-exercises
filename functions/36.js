/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

const conta01 = (num01, num02) =>{
    let resultado = []


    for(let i = 0; i < num01.length; i++){
        resultado.push(num01[i] * num02)
    }
    return resultado
}

console.log(conta01([1, 0.50, 7, 4, 1.45], 3))

const conta02 = (num01, num02) =>{
    let resultado =[]

    for(let i = 0; i < num01.length; i++){
        if(num01[i] >= 5){
            resultado.push(num01[i] * num02)
        } else {
            resultado.push(num01[i])
        }
    }
    return resultado
}

console.log(conta02([1, 2, 7, 4, 1.45], 3))
console.log(conta02([8, 9.5, 10.8, 6, 5], 3))
console.log(conta02([0.2, 1, 4, 2.4, 1.5], 3))