/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const parImpar = (inicio = 0, fim = 100) =>{
    let temp = 0
    let impares = []

    if(inicio > fim){
        temp = inicio
        inicio = fim
        fim = temp
    }

    while(inicio <= fim){
        if(inicio % 2 == 1){
            impares.push(inicio)
        }
        inicio++
    }
    return impares
}

console.log(parImpar(1, 5))