// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const matriz = (num) =>{
    let par = 0
    let impar = 0

    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 == 0){
            par++
        }  else {
            impar++
        }
    }
        return `Quantidade de Pares: ${par}. Quantidade de Ímpares: ${impar}`
}
    
console.log(matriz([3, 4, 6, 22, 47, 44, 0, 98]))
    
    
    
    
    /*num.forEach(element => {
        if(element % 2 == 0){
            par = 0
            par++
        }  else {
            let impar = 0
            impar++
        }
    });*/
    
    /* const matriz = ([num]) =>{
    let par = 0
    let impar = 1

    if(num % 2 == 0){
            console.log(`Pares: ${num}`)
        }  else if(num.indexOf(impar) % 3 == 1) {
            console.log(`Ímpares: ${num}`)
    }
}

console.log(matriz[2, 34, 65, 3, 0, 27]) */