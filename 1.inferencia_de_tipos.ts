/*Inferência de tipos é quando o TypeScript descobre automaticamente 
o tipo de uma variável sem você precisar escrever. */

let nome = "Thiago";
// Você não escreveu : string, mas o TypeScript faz isso internamente:
// let nome: string

/* 
Tipagem Contextual
É quando o TypeScript descobre o tipo de algo pelo contexto onde ele está sendo usado, mesmo que você não escreva o tipo.
Ou seja:
➡️ O tipo vem do lugar onde a função/variável é usada.
✅ Exemplo simples:*/

window.addEventListener("click", (event) => {
  console.log(event.clientX);
});
/* O que aconteceu aqui? Você não tipou event Mesmo assim o TS sabe que ele é um MouseEvent
Porque o contexto ("click") diz ao TS:
“Se o evento é de clique, o parâmetro deve ser um MouseEvent”.*/

// Outro exemplo: 
const numeros = [1, 2, 3]; 
numeros.forEach((n) => {
  console.log(n.toFixed(2));
});

/*Você não escreveu n: number
Mas o TS sabe que n é número
Porque ele vê que numeros é um number[]
Essa é a tipagem contextual funcionando.*/