// main.js
const { Worker } = require('worker_threads');

// Создаем новый поток
const worker = new Worker('./worker.js');

// Отправляем сообщение в поток
worker.postMessage('Привет, поток!');

// Обрабатываем сообщения от потока
worker.on('message', (message) => {
  console.log(`Сообщение из потока: ${message}`);
});

// Обрабатываем ошибки
worker.on('error', (error) => {
  console.error('Ошибка в потоке:', error);
});

// Когда поток завершен
worker.on('exit', (code) => {
  console.log(`Поток завершился с кодом: ${code}`);
});
