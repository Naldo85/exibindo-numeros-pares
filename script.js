// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

let n = parseInt(gets());

// TODO: Inclua a condição de parada adequada. 
// Dica: note que o contador "i" é incrementado de 2 em 2 (sempre indo para o próximo par).

for (let i = 2; n >= i; i+=2) {
console.log(i);
}