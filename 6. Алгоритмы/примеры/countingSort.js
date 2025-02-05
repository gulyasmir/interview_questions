// Counting Sort (при небольшом диапазоне значений)
// Классический пример, когда значения в массиве лежат в диапазоне  [0..𝑘]

// Сложность: O(n+k), где n — количество элементов, k — размер диапазона значений. 
// При условии, что k не слишком велико по сравнению с n, можно считать это линейным временем.

/**
 * Алгоритм сортировки подсчётом (Counting Sort).
 * @param {number[]} arr - Исходный массив чисел
 * @param {number} k - Максимально возможное значение в arr
 * @returns {number[]} Отсортированный массив
 */
function countingSort(arr, k) {
    // Создаём массив подсчёта
    const count = new Array(k + 1).fill(0);
  
    // Считаем, сколько раз встречается каждое значение
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
  
    // Формируем отсортированный результат
    const result = [];
    for (let value = 0; value <= k; value++) {
      // добавляем value count[value] раз
      for (let j = 0; j < count[value]; j++) {
        result.push(value);
      }
    }
  
    return result;
  }
  
  // Пример использования:
  const arr4 = [4, 2, 4, 3, 1, 2, 0];
  const maxVal = 4; // максимальное значение в массиве
  console.log(countingSort(arr4, maxVal));
  // [0, 1, 2, 2, 3, 4, 4]
  