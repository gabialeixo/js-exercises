/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const contas = (x, y) => {
    console.log(`Soma: ${x + y}.`)
    console.log(`Subtração: ${x - y}.`)
    console.log(`Multiplicação: ${x * y}.`)
    console.log(`Divisão: ${ x / y}.`)
}

contas(10, 45)
contas(4, 3)
