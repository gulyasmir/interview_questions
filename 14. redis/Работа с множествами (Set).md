await redis.sadd('users', 'Alice', 'Bob');  // Добавить элементы
const users = await redis.smembers('users');  // Получить все элементы множества
console.log(users); // ['Alice', 'Bob']
await redis.srem('users', 'Alice');  // Удалить элемент
