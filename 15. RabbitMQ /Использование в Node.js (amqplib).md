Использование в Node.js (amqplib)

```
const amqp = require('amqplib');

async function sendMessage() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'task_queue';

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from('Hello, RabbitMQ!'), { persistent: true });

  console.log('Message sent');
  await channel.close();
  await connection.close();
}

sendMessage();

```
