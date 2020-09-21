/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

const vetor = (num) =>{
    let contadorDentro = 0
    let contadorFora = 0

    for(let i = 0; i < num.length; i++){
        if(num[i] >= 10 && num[i] <=20){
            contadorDentro++
        } else {
            contadorFora++
        }
    }
    return `Dentro do intervalo: ${contadorDentro}. Fora do Intervalo: ${contadorFora}.`
}

console.log(vetor([10, 3, 5, 8, 11, 24]))