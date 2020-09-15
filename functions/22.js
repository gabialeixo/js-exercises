/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const clube = (mes) =>{
    let anuidade = 100

    if(mes === 1){
        return `Anuidade paga no mês ${mes} no valor de R$${anuidade.toFixed(2)}. Obrigada!`
    } else if(mes > 12){
        return 'Mês inválido! Por favor, insira um mês correto!'
    }
    for(let i = 2; i <= mes; i++){
        anuidade += anuidade * 0.05
    }
    return `Anuidade paga no mês ${mes} no valor de R$${anuidade.toFixed(2)}. Obrigada!`
}

console.log(clube(1))
console.log(clube(2))
console.log(clube(3))
console.log(clube(4))
console.log(clube(5))
console.log(clube(6))
console.log(clube(7))
console.log(clube(8))
console.log(clube(9))
console.log(clube(10))
console.log(clube(11))
console.log(clube(12))
console.log(clube(13))

