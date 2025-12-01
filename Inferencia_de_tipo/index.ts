const pessoa = {
    nome: "Thiago",
    velocidade: 24
}

function correr(pessoa: any, velocidade: any) {
    pessoa.velocidade = velocidade
}

correr(pessoa, 10)