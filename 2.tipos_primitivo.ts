/*
Tipos Nativos
JavaScript define 8 tipos nativos:

Type	     Explanation
Number	     um ponto flutuante de dupla precisão IEEE 754.
String	     uma string imutável UTF-16.
BigInt	     inteiros no formato de precisão arbitrário.
Boolean	     true e false.
Symbol	     um valor único usado como uma chave.
Null	     equivalente ao tipo unit.
Undefined	 também equivalente ao tipo unit.
Object	     similar aos records. 

Outros tipos importantes do Typescript
Type	     Explanation
unknown	     o tipo do topo.
never	     o tipo do final.
object       literal	eg { property: Type }
void	     um subtipo de undefined para ser usado como um tipo de retorno.
T[]	         arrays mutáveis, também escritos como Array<T>
[T, T]	     tuplas, que tem tamanho fixado mas são mutáveis
(t: T) => U	 funções
*/

// 🎯 Tipos Primitivos no TypeScript

// Tipos primitivos são os tipos mais básicos do JavaScript/TypeScript.
// Eles não são objetos, não têm métodos próprios (mesmo que pareçam ter) e representam valores simples.

// ✅ Lista dos Tipos Primitivos Principais
// 1. string: Texto.
export let nome: string = "Thiago";

// 2. number
// Qualquer número: inteiro, decimal, positivo ou negativo.
let idade: number = 24;
let altura: number = 1.73;

// 3. boolean
// Representa verdadeiro ou falso.
let logado: boolean = true;

// 4. null
// Valor propositalmente vazio.
let endereco: null = null;

// 5. undefined
// Variável que existe mas não recebeu valor.
let x: undefined;

// 6. bigint
// Números gigantes (maiores que 2⁵³ - 1).
let numeroGrande: bigint = 9007199254740993n;

// 7. symbol
// Identificador único.
let id: symbol = Symbol("id");

/* 🚀 Resumo rápido (do jeito mais simples possível)
Tipo	O que representa
string	Texto
number	Número
boolean	true/false
null	intencionalmente vazio
undefined	ainda sem valor
bigint	números enormes
symbol	identificador único */