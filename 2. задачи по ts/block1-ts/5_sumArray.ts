//  Асинхронная функция с типами
async function sumArray(numbers: number[]): Promise<number> {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  sumArray([1, 2, 3, 4]).then(console.log); // 10
  