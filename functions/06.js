/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (cap, tx, tempo) => {
    jurosUm = (cap + (cap * tx * tempo))
    return jurosUm
}
const jurosComposto = (cap2, tx2, tempo2) => {
    jurosDois = (cap2 * (1 + tx2) ** tempo2)
    return jurosDois
}

console.log(jurosSimples(100, 20, 5))
console.log(jurosComposto(100, 30, 2))