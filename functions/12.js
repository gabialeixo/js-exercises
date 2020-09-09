/* 12) Faça um algoritmo que calcule o fatorial de um número. */

const fatorial = (num) => {
    let resultado = 1

    for(var count=1 ; count<=num ; count++)
        resultado *= count;
        return resultado
}

console.log(fatorial(5))
console.log(fatorial(7))