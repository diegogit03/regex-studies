const texto = 'Lista telefonica: (19) 99721-3109, (02)18741-8098, 99612-7309';

console.log(texto.match(/\(?\d{0,2}?\)?\s?\d{4,5}-\d{4}/g));
