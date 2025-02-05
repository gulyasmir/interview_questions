function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
  /*
  Почему Set не всегда оптимален?
Set хранит уникальные значения, но при очень больших объемах данных может занимать много памяти.
Операция new Set(arr) создает весь Set сразу, что нагружает GC (Garbage Collector).
Для сверхбольших массивов могут возникать утечки памяти и нехватка RAM.

*/
  
// Оптимизированная функция для удаления дубликатов в больших массивах
// Решение с использованием итеративной обработки и Map (более экономное по памяти)

  function removeDuplicatesLarge(arr) {
    const seen = new Map();
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.set(arr[i], true);
            result.push(arr[i]);
        }
    }

    return result;
  }
/*
Почему этот вариант лучше для больших массивов?
Не требует создания огромного Set сразу. Map наполняется постепенно.
Не нагружает GC, так как мы идем по массиву один раз.
Лучше использует память, так как Map эффективнее Set при работе с огромными объемами данных.
*/


// Если массив настолько большой, что не помещается в память:
// вариант для потоковой обработки

const fs = require('fs');
const readline = require('readline');

async function removeDuplicatesFromFile(inputFile, outputFile) {
    const seen = new Set();
    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const rl = readline.createInterface({ input: readStream });

    for await (const line of rl) {
        if (!seen.has(line)) {
            seen.add(line);
            writeStream.write(line + '\n');
        }
    }

    writeStream.end();
    console.log('Duplicates removed and saved to:', outputFile);
}

// Пример вызова:
removeDuplicatesFromFile('big_input.txt', 'output.txt');

/*
Подход потоковой обработки нужен когда:
Файл слишком большой для загрузки в память (> 10GB).
Нужно обрабатывать данные в реальном времени, например, при обработке логов или больших баз данных.
Этот метод обрабатывает данные построчно и не перегружает оперативную память.
*/

/*
Вывод
Set хорош для небольших массивов (до нескольких миллионов элементов).
Map лучше для супербольших массивов (10M+).
Потоковая обработка (readline) нужна, если массив не помещается в оперативную память.
*/