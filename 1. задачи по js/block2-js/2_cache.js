// Декоратор для кэширования

function cache(fn) {
    const cacheMap = new Map();
  
    return function (arg) {
      if (cacheMap.has(arg)) {
        return cacheMap.get(arg);
      }
      const result = fn(arg);
      cacheMap.set(arg, result);
      return result;
    };
  }
  
  const slowFn = (x) => {
    console.log(`Calculating for ${x}`);
    return x * x;
  };
  
  const cachedFn = cache(slowFn);
  console.log(cachedFn(5)); // "Calculating for 5", 25
console.log(cachedFn(5)); // 25 (из кэша)
  
/*
Пояснение:

Кэш создаётся в виде объекта Map, который позволяет эффективно сохранять результаты вызовов функции для уникальных аргументов.
Если результат уже есть в кэше, возвращается закэшированный результат.
Если вызов функции с таким аргументом выполняется впервые, результат сохраняется в кэше для последующего использования.
Это полезно для функций с большим количеством вычислений, чтобы избежать повторного выполнения.

*/
  
