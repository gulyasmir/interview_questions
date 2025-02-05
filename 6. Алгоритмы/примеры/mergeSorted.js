// Слияние двух отсортированных массивов (Merge)
// Сложность: 𝑂(𝑛+𝑚), где 𝑛  и 𝑚  — размеры двух массивов, что в сумме всё равно линейно относительно общего количества элементов.

/**
 * Слияние двух отсортированных массивов.
 * @param {number[]} arrA - Отсортированный массив A
 * @param {number[]} arrB - Отсортированный массив B
 * @returns {number[]} Новый массив, содержащий элементы A и B в отсортированном виде
 */
function mergeSorted(arrA, arrB) {
    const result = [];
    let i = 0;
    let j = 0;
  
    // пока в обоих массивах есть элементы
    while (i < arrA.length && j < arrB.length) {
      if (arrA[i] <= arrB[j]) {
        result.push(arrA[i]);
        i++;
      } else {
        result.push(arrB[j]);
        j++;
      }
    }
  
    // если остались элементы в arrA
    while (i < arrA.length) {
      result.push(arrA[i]);
      i++;
    }
  
    // если остались элементы в arrB
    while (j < arrB.length) {
      result.push(arrB[j]);
      j++;
    }
  
    return result;
  }
  
  // Пример использования:
  const sortedA = [1, 3, 5, 7];
  const sortedB = [2, 4, 6, 8];
  console.log(mergeSorted(sortedA, sortedB));
  // [1, 2, 3, 4, 5, 6, 7, 8]
  