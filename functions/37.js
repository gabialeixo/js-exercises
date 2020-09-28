/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

const progAritimetica = (n, a1, r) =>{
    for(let i = 0; i < n; i++){
        console.log(a1 + r*i)
    }
    console.log('Resultado P.A.: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)  
}

const progGeometrica = (n, a1, r) =>{
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Resultado P.G.: ' + (a1 * ((r**n)-1))/(r-1))
}

console.log(progAritimetica(10, 10, 15))
console.log('----------------')
console.log(progGeometrica(10, 5, 3))