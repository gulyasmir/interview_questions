// Создайте систему Pub/Sub с Redis. Один клиент должен публиковать сообщения, а другой — подписываться и получать их.

const redis = require('redis');

// Publisher
async function publisher() {
  const client = redis.createClient();

  await client.connect();

  setInterval(async () => {
    const message = `Message at ${new Date().toISOString()}`;
    await client.publish('myChannel', message);
    console.log('Published:', message);
  }, 2000);
}

// Subscriber
async function subscriber() {
  const client = redis.createClient();

  await client.connect();

  await client.subscribe('myChannel', (message) => {
    console.log('Received:', message);
  });
}

// Запуск
publisher();
subscriber();

/*
Пояснение:

Используется метод publish для публикации сообщений в канал Redis.
Метод subscribe позволяет подписаться на канал и обрабатывать входящие сообщения.
Код демонстрирует, как настроить взаимодействие через Pub/Sub в Redis.
*/

