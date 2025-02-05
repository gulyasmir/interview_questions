// Consumer

const amqp = require('amqplib');

async function receiveMessage() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'task_queue';

  await channel.assertQueue(queue, { durable: true });

  console.log('Waiting for messages...');
  channel.consume(queue, (msg) => {
    console.log('Received:', msg.content.toString());
    channel.ack(msg); // Подтверждение обработки сообщения
  }, { noAck: false });
}

receiveMessage();
