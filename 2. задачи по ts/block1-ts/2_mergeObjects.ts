// Объединение двух объектов
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
  