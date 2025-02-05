// main.js
const { Worker } = require('worker_threads');

// Создаем общий буфер
const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

// Создаем поток и передаем буфер
const worker = new Worker('./worker.js', { workerData: sharedBuffer });

worker.on('message', () => {
  console.log('Данные из потока:', sharedArray);
});
