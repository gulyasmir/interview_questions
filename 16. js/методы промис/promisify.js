// сделать 
//  callback-функцию асинхронной?

const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

readFileAsync('file.txt', 'utf8')
  .then(data => console.log('Содержимое файла:', data))
  .catch(err => console.error('Ошибка чтения:', err));
