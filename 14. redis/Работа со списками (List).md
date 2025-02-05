await redis.lpush('tasks', 'task1');  // Добавить в начало списка
await redis.rpush('tasks', 'task2');  // Добавить в конец списка
const task = await redis.lpop('tasks');  // Удалить и получить первый элемент
console.log(task); // "task1"
