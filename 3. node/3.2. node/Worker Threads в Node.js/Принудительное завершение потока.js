const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');

// Принудительное завершение потока
setTimeout(() => {
  worker.terminate();
  console.log('Поток принудительно завершен');
}, 5000);
