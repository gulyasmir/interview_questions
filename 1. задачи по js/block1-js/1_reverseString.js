function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  
  /* < 100MB
  небольших строк, но если строка очень большая (например, 1GB+), она может вызвать нехватку памяти, так как:

split('') создает массив всех символов, что удваивает потребление памяти.
reverse() также создает копию массива.
join('') снова создает новую строку, что утрояет потребление памяти.


Оптимизированное решение: посимвольная обработка
Для очень больших строк лучше использовать итеративную обработку через потоковый алгоритм:
100MB - 500MB
*/

function reverseLargeString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]; // Посимвольное добавление
  }
  return result;
}

/*
Плюсы:

Не создает лишних массивов, только финальную строку.
Работает лучше для средне-больших строк (до 500MB).
Минусы:

Всё ещё использует двойное количество памяти (исходная строка + result).
Медленнее из-за конкатенации строк (но лучше, чем split('').reverse().join('')).
*/

/*
Потоковая обработка для огромных данных (1GB+)
Если строка настолько большая, что не влезает в память, можно читать её частями из файла и записывать в обратном порядке:

> 500MB или файл
*/

const fs = require('fs');

async function reverseLargeFile(inputFile, outputFile) {
    const CHUNK_SIZE = 1024 * 1024; // 1MB куски
    const stats = fs.statSync(inputFile);
    const fd = fs.openSync(inputFile, 'r');

    const writeStream = fs.createWriteStream(outputFile, { flags: 'w' });

    for (let pos = stats.size; pos > 0; pos -= CHUNK_SIZE) {
        const size = Math.min(CHUNK_SIZE, pos);
        const buffer = Buffer.alloc(size);
        fs.readSync(fd, buffer, 0, size, pos - size);
        writeStream.write(buffer.reverse());
    }

    fs.closeSync(fd);
    writeStream.end();
    console.log('Reverse completed:', outputFile);
}

// Пример вызова:
reverseLargeFile('big_input.txt', 'reversed_output.txt');
/*
Почему этот метод лучше для огромных данных?
✅ Читает и записывает файл частями, не загружая всё в память.
✅ Обрабатывает данные напрямую, без массивов и строк.
✅ Может работать с 10GB+ файлами.
*/