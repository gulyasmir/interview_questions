//Линейный поиск (Linear Search)
// Сложность:  𝑂(𝑛), так как в худшем случае придётся проверить каждый элемент массива.

/**
 * Линейный поиск в массиве.
 * @param {Array} arr - Исходный массив
 * @param {*} target - Искомое значение
 * @returns {number} Индекс найденного элемента или -1, если не найден
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // нашли элемент
      }
    }
    return -1; // не нашли элемент
  }
  
  // Пример использования:
  const arr1 = [10, 20, 30, 40, 50];
  console.log(linearSearch(arr1, 30)); // 2
  console.log(linearSearch(arr1, 99)); // -1
  