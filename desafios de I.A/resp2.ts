type Aluno = {
  nome: string;
  nota: number;
};
const alunos: Aluno[] = [
  { nome: "Ana", nota: 8,},
  { nome: "Thiago", nota: 10 },
];

function aprovados(lista: Aluno[]): string[] {
    return lista
    .filter((alunos) => alunos.nota >= 7)
    .map((alunos) => `Nome: ${alunos.nome}, nota: ${alunos.nota}`)
}

console.log(aprovados(alunos))


interface iUser {
    nome: string,
    age: number,
    height: number;
}

const userProfile: iUser = {
    nome: "Thiago",
    age: 24,
    height: 1.73,
}