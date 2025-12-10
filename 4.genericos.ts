// Genéricos permitem que você crie componentes reutilizáveis que funcionam com vários tipos, mantendo segurança de tipos.
// Eles deixam seu código flexível, tipado e reutilizável.

// Sem genéricos:
function identidadeAny(valor: any) {
  return valor;
}

// any tira toda a segurança. Você perde o tipo original.
// Com genéricos:
function identidade<T>(valor: T): T {
  return valor;
}