/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const salario = (planoTrab, salAtual) => {
    switch (planoTrab) {
        case 'A':
            return `Seu aumento é de ${(salAtual * 0.10) + salAtual}`
            break
        case 'B':
            return `Seu aumento é de ${(salAtual * 0.15) + salAtual}`
            break
        case 'C':
            return `Seu aumento é de ${(salAtual * 0.20) + salAtual}`
            break
        default:
            return 'Esse plano não é válido!'
            break
    }
}

console.log(salario('A', 1500))
console.log(salario('B', 1800))
console.log(salario('C', 2200))
console.log(salario('D', 1000))