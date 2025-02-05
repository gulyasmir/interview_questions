// Создайте очередь задач с Redis. Один процесс добавляет задачи, а другой обрабатывает их.

const redis = require('redis');

async function taskProducer() {
  const client = redis.createClient();
  await client.connect();

  for (let i = 1; i <= 5; i++) {
    await client.rPush('taskQueue', `Task ${i}`);
    console.log(`Added: Task ${i}`);
  }

  await client.disconnect();
}

async function taskConsumer() {
  const client = redis.createClient();
  await client.connect();

  while (true) {
    const task = await client.lPop('taskQueue');
    if (task) {
      console.log(`Processing: ${task}`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Эмуляция работы
    } else {
      console.log('No tasks. Waiting...');
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

// Запуск
taskProducer();
taskConsumer();

/*
Пояснение:

rPush добавляет задачи в конец списка Redis (очереди).
lPop извлекает задачу из начала списка для обработки.
Обработчик (taskConsumer) работает в бесконечном цикле, извлекая задачи по мере их появления.
*/