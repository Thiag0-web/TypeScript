//Em JavaScript, a forma fundamental de agrupar e transmitir dados é por meio de objetos. Em TypeScript, representamos esses objetos por meio de tipos de objeto .
//Como vimos, eles podem ser anônimos:
function Ola1(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
//ou podem ser nomeados usando uma interface:
interface pessoa1{
  name: string;
  age: number;
}

let infoPessoa:pessoa1 = {
  name: "a",
  age: 2,
  
}
 
function ola2(person: pessoa1) {
  return "Hello " + person.name;
}

//Tu um alias de tipo:
type pessoa2= {
  name: string;
  age: number;
};

type pessoa3 =  "vivo" | "morto"
let pessoa:pessoa3 = "morto"

function ola3(person: pessoa2) {
  return "Hello " + person.name;
}

//Em todos os três exemplos acima, escrevemos funções que recebem objetos que contêm a propriedade name(que deve ser um string) e age(que deve ser um number).

//Diferença entre interface e type:
/*
A documentação do TypeScript deixa explícito que escolher entre type e interfaces é algo muito relacionado ao gosto pessoal, 
porém sugere utilizar interfaces até que você precise de alguma funcionalidade específica do type
*/