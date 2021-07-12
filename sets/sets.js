const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// Para definir uma classe de (ou conjuntos) caracteres usa []
const regexPares = /[02468]/g;
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]/g;
console.log(texto2.match(regexComESemAcento));
