// Создание ленивых вычислений

function lazy<T>(fn: () => T): () => T {
    let result: T | undefined;
    let executed = false;
  
    return () => {
      if (!executed) {
        result = fn();
        executed = true;
      }
      return result!;
    };
  }
  
  const computation = lazy(() => {
    console.log("Computing...");
    return 42;
  });
  
  console.log(computation()); // "Computing...", 42
  console.log(computation()); // 42 (результат кэшируется)
  
  /*
  Пояснение:

lazy откладывает выполнение функции до момента её вызова.
Результат вычисления сохраняется в переменной result, а флаг executed предотвращает повторное выполнение функции.
Это полезно для оптимизации вычислений, которые могут быть дорогостоящими и не всегда требуются.
Пример: загрузка данных только тогда, когда они действительно нужны.
*/