/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const div = (a, b) => {
    let result = a / b
    let resto = a % b

    return {
        result,
        resto
    }
}

const resultado = div(10, 2)
console.log(`O resultado é: ${resultado.result}. O resto da divisão é: ${resultado.resto}.`)