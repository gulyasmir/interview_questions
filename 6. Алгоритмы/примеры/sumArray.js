// Подсчёт суммы элементов массива
// Сложность:  𝑂(𝑛), один линейный проход.

/**
 * Суммирование элементов массива.
 * @param {number[]} arr - Исходный массив чисел
 * @returns {number} Сумма всех элементов
 */
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Пример использования:
  const arr3 = [1, 2, 3, 4];
  console.log(sumArray(arr3)); // 10
  