```
await redis.zadd('scores', 100, 'Alice', 200, 'Bob');  // Добавить элементы с весом
const topUsers = await redis.zrevrange('scores', 0, -1, 'WITHSCORES');  // Топ по убыванию
console.log(topUsers); // ['Bob', '200', 'Alice', '100']

```
