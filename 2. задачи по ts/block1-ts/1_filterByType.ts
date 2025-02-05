// Фильтр массива по типу
function filterByType<T>(arr: unknown[], type: string): T[] {
    return arr.filter((item) => typeof item === type) as T[];
  }
  
  console.log(filterByType<string>([1, "hello", true, "world"], "string")); // ["hello", "world"]
  