// Сравнение двух объектов

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) return false;
  
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  
  console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
  console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
  
  /*
  Пояснение:

Если объекты равны по ссылке, сразу возвращается true.
Если хотя бы одно из значений — не объект или является null, возвращается false.
Проверяются ключи обоих объектов: если количество ключей или их значения различаются, объекты не равны.
Рекурсивно сравниваются вложенные объекты и массивы.
Это решение универсально для сравнения сложных структур данных.
*/