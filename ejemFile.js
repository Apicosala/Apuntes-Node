import fs from 'fs';
/*
fs.writeFileSync('./ejemFile.txt', 'Hello World');
const file = fs.readFileSync('./ejemFile.txt', 'utf8');
*/
fs.appendFileSync('./ejemFile.txt', '¿Cómo estás?');/* con el appendFileSync se agrega al final del archivo , con writeFileSync se carga loque esta escrito y escribe encima */