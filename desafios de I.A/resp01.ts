type  Produto = {
    nome: string,
    preco: number,
    emEstoque: "Em estoque" | "Fora de estoque"
}

function info(produto: Produto): string {
    return `O produto: ${produto.nome} custa R$:${produto.preco.toFixed(2) } e está ${produto.emEstoque}`
}

console.log(info({nome:"Notebook", preco:2800, emEstoque:"Em estoque"}))