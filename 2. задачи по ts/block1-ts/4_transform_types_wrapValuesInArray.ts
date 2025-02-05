// Трансформация типов
function wrapValuesInArray<T>(obj: T): { [K in keyof T]: T[K][] } {
    const result = {} as { [K in keyof T]: T[K][] };
    for (const key in obj) {
      result[key] = [obj[key]];
    }
    return result;
  }
  
  const myObj = { name: "John", age: 30 };
  console.log(wrapValuesInArray(myObj)); // { name: ["John"], age: [30] }
  