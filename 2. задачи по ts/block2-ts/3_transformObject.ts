// Трансформация объекта

type TransformObject<T> = {
    [K in keyof T]: T[K][];
  };
  
  type ExampleObject = { a: number; b: string };
  type Transformed = TransformObject<ExampleObject>; 
  // { a: number[]; b: string[] }
  

/**
 * Результат:
 * type Transformed = {
 *   a: number[];
 *   b: string[];
 * }
 */

  /*
  Пояснение:

TransformObject<T> изменяет каждый ключ объекта T так, чтобы его значение стало массивом того же типа.
Используется mapped types для создания нового типа с преобразованными значениями.
Это полезно для задач, где данные должны быть конвертированы, например, при массовых операциях с базами данных или API.
*/