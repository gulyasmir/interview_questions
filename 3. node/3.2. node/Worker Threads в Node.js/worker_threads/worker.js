// worker.js
const { parentPort } = require('worker_threads');

// Получаем сообщение от основного потока
parentPort.on('message', (message) => {
  console.log(`Сообщение из основного потока: ${message}`);
  
  // Отправляем ответ
  parentPort.postMessage(`Получено: ${message}`);
});

/*
Сообщение из основного потока: Привет, поток!
Сообщение из потока: Получено: Привет, поток!
Поток завершился с кодом: 0
*/
