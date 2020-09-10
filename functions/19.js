/* 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

const real = (num) => {
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const lanchonete = (codProd, qtd) =>{
    switch (codProd) {
        case 100:
            valor = 3.00
            return `Sua compra de ${qtd} Cachorro Quente deu o valor total de ${real(qtd * valor)}.`
            break
        case 200:
            valor = 4.00
            return `Sua compra de ${qtd} Hambúrguer Simples deu o valor total de ${real(qtd * valor)}.`
            break
        case 300:
            valor = 5.50
            return `Sua compra de ${qtd} Cheeseburguer deu o valor total de ${real(qtd * valor)}.`
            break
        case 400:
            valor = 7.50
            return `Sua compra de ${qtd} Bauru deu o valor total de ${real(qtd * valor)}.`
            break
        case 500:
            valor = 3.50
            return `Sua compra de ${qtd} Refrigerante deu o valor total de ${real(qtd * valor)}.`
            break
        case 600:
            valor = 2.80
            return `Sua compra de ${qtd} Suco deu o valor total de ${real(qtd * valor)}.`
            break
        default:
            return 'Não temos esse produto'
            break;
    }
}

console.log(lanchonete(100, 5))
console.log(lanchonete(200, 15))
console.log(lanchonete(300, 2))
console.log(lanchonete(400, 7))
console.log(lanchonete(500, 11))
console.log(lanchonete(600, 4))
console.log(lanchonete(700, 5))