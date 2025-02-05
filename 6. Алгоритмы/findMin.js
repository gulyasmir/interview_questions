// Поиск минимума или максимума
// Сложность: 𝑂(𝑛), один проход по массиву.

/**
 * Поиск минимального элемента в массиве.
 * @param {number[]} arr - Исходный массив чисел
 * @returns {number} Минимальное значение
 */
function findMin(arr) {
    let minVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minVal) {
        minVal = arr[i];
      }
    }
    return minVal;
  }
  
  /**
   * Поиск максимального элемента в массиве.
   * @param {number[]} arr - Исходный массив чисел
   * @returns {number} Максимальное значение
   */
  function findMax(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  }
  
  // Пример использования:
  const arr2 = [5, 3, 8, 1, 2];
  console.log(findMin(arr2)); // 1
  console.log(findMax(arr2)); // 8
  