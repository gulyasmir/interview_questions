// Параллельное выполнение промисов с ограничением

async function limitedParallel(tasks, limit) {
    const results = [];
    const executing = new Set();
  
    for (const task of tasks) {
      const promise = task().then((result) => {
        executing.delete(promise);
        return result;
      });
      results.push(promise);
      executing.add(promise);
  
      if (executing.size >= limit) {
        await Promise.race(executing);
      }
    }
  
    return Promise.all(results);
  }
  
  const tasks = [
    () => new Promise((res) => setTimeout(() => res(1), 1000)),
    () => new Promise((res) => setTimeout(() => res(2), 500)),
    () => new Promise((res) => setTimeout(() => res(3), 1500)),
    () => new Promise((res) => setTimeout(() => res(4), 700)),
  ];
  
  limitedParallel(tasks, 2).then(console.log); // [1, 2, 3, 4]
  
    /*
  Пояснение:

Используем массив executing для отслеживания текущих промисов, которые выполняются.
Для каждой задачи мы создаём новый промис, добавляем его в executing и удаляем после выполнения.
Если количество выполняющихся задач достигает лимита, вызывается Promise.race,
 чтобы дождаться завершения одного из промисов перед добавлением нового.
Это обеспечивает ограничение на количество одновременно выполняемых задач.
*/