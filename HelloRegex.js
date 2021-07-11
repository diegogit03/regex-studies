/**
 * Expressões regulares
 * 
 * Uma expressão regular é uma notação para representar padrões em strings. 
 * Serve para validar entradas de dados ou fazer busca e extração de informações em textos.
 */

const texto = 'a,b a a a a';
const regex = /a/g;

console.log(texto.match(regex));
