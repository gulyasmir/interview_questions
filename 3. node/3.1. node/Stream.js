// Реализуйте функцию, которая читает данные из большого текстового файла построчно, обрабатывает каждую строку и записывает результат в новый файл.

const fs = require('fs');
const readline = require('readline');

async function processFile(inputFile, outputFile) {
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);

  const rl = readline.createInterface({
    input: inputStream,
    output: outputStream,
    terminal: false,
  });

  for await (const line of rl) {
    const processedLine = line.toUpperCase(); // Пример обработки
    outputStream.write(processedLine + '\n');
  }

  console.log('File processing completed.');
}

processFile('input.txt', 'output.txt');

/*
Пояснение:

Используем модуль readline для построчного чтения файла.
Обрабатываем каждую строку (в данном случае переводим в верхний регистр).
Результаты записываются в новый файл через поток записи fs.createWriteStream.
*/