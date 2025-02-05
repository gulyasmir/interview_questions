// worker.js
const { workerData, parentPort } = require('worker_threads');

const sharedArray = new Int32Array(workerData);

// Изменяем данные в буфере
sharedArray[0] = 42;

// Сообщаем основному потоку, что данные обновлены
parentPort.postMessage('Данные обновлены');
