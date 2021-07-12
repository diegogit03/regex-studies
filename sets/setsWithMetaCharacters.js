const texto = '.$*?-';

// A maioria de meta caracteres não precisam de escape dentro do conjunto
console.log(texto.match(/[+.?*$]/g));
console.log(texto.match(/[$-?]/g)); // isso é um intervalo (range)

// NÃO é intervalo [range]...
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-$]/g));

// pode precisar de um escape dentro de conjuntos: - [ ] ^
