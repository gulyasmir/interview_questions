//  Напишите функцию, которая подключается к Redis, устанавливает значение ключа, получает его, а затем удаляет.

const redis = require('redis');

async function redisOperations() {
  const client = redis.createClient();

  client.on('error', (err) => console.error('Redis Client Error', err));

  await client.connect();

  // Установить значение ключа
  await client.set('myKey', 'Hello Redis!');

  // Получить значение ключа
  const value = await client.get('myKey');
  console.log('Value:', value); // Value: Hello Redis!

  // Удалить ключ
  await client.del('myKey');
  console.log('Key deleted.');

  await client.disconnect();
}

redisOperations();

/*
Пояснение:

Мы используем библиотеку redis для подключения к серверу Redis.
Устанавливается соединение с Redis, после чего выполняются операции: SET, GET, DEL.
После завершения работы соединение закрывается через disconnect.
*/

