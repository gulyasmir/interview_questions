await redis.hset('user:1', 'name', 'Alice', 'age', 25);  // Добавить поля в хеш
const name = await redis.hget('user:1', 'name');  // Получить значение по ключу
console.log(name); // "Alice"
const user = await redis.hgetall('user:1');  // Получить все поля хеша
console.log(user); // { name: 'Alice', age: '25' }
