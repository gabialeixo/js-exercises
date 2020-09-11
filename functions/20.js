/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const banco = (valorCedulas) =>{
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorTotal = calculoCedulas(valorCedulas)

    while (valorCedulas >= valorTotal){
        switch(valorTotal){
            case 100:
                valorCedulas -= 100
                contador100++
                break
            case 50:
                valorCedulas -= 50
                contador50++
                break
            case 10:
                valorCedulas -= 10
                contador10++
                break
            case 5:
                valorCedulas -= 5
                contador5++
                break
            case 1:
                valorCedulas -= 1
                contador1++
                break
        }
        valorTotal = calculoCedulas(valorCedulas)
    }
    return resultado(contador100, contador50, contador10, contador5, contador1)
}

function calculoCedulas(valorCedulas){
    if(valorCedulas >= 100){
        return 100
    } else if(valorCedulas >= 50) {
        return 50
    } else if(valorCedulas >= 10){
        return 10
    } else if(valorCedulas >= 5){
        return 5
    } else if(valorCedulas >= 1){
        return 1
    }
}

function resultado(contador100, contador50, contador10, contador5, contador1){
    let resultCedulas = ''

    if(contador100 > 0){
        resultCedulas += `${contador100} nota(s) de R$100,00.`
    } 
    if(contador50 > 0){
        resultCedulas += `${contador50} nota(s) de R$50,00.`
    }
    if(contador10 > 0){
        resultCedulas += `${contador10} nota(s) de R$10,00.`
    }
    if(contador5 > 0){
        resultCedulas += `${contador5} nota(s) de R$5,00.`
    }
    if(contador1 > 0){
        resultCedulas += `${contador1} nota(s) de R$1,00`
    }
    return resultCedulas
}

console.log(banco(37))
console.log(banco(150))
console.log(banco(5))
console.log(banco(274))