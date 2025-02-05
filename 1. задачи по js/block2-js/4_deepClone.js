// Глубокое клонирование объекта

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
  
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }
  
    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
  const cloned = deepClone(obj);
  console.log(cloned); // { a: 1, b: { c: 2, d: { e: 3 } } }
console.log(cloned.b === obj.b); // false
  
/*
Пояснение:

Функция рекурсивно проходит по объекту или массиву:
Если значение является объектом или массивом, оно клонируется.
Если это примитивное значение, оно возвращается без изменений.
Это решение работает для произвольного уровня вложенности.
Не использует сторонние библиотеки, такие как lodash, что может быть важно в средах с ограничениями на внешние зависимости.
*/
  