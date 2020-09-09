/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const semana = (dias) => {
    switch(dias){
        case 1:
            return "Final de Semana"
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
            break
        case 7:
            return "Final de Semana"
            break
        default:
            return "Dia inválido"
    }
}

console.log(semana(20))
console.log(semana(7))
console.log(semana(3))
console.log(semana('a'))