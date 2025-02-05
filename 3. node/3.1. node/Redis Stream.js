// Создайте поток в Redis, добавьте несколько сообщений и прочитайте их.

const redis = require('redis');

async function redisStreamExample() {
  const client = redis.createClient();
  await client.connect();

  const streamKey = 'mystream';

  // Добавление сообщений в поток
  await client.xAdd(streamKey, '*', { user: 'Alice', action: 'login' });
  await client.xAdd(streamKey, '*', { user: 'Bob', action: 'logout' });

  console.log('Messages added to the stream.');

  // Чтение сообщений из потока
  const messages = await client.xRange(streamKey, '-', '+');
  console.log('Stream messages:', messages);

  await client.disconnect();
}

redisStreamExample();

/*
Пояснение:

Метод xAdd добавляет сообщения в поток Redis.
Метод xRange используется для чтения сообщений из потока в заданном диапазоне (здесь от начала до конца).
Redis Streams позволяет реализовать очереди сообщений, отслеживание событий и их обработку.
*/
