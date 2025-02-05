console.log("Начало");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("Конец");

/*
Вывод будет:

javascript
Copy
Edit
Начало
Конец
nextTick
Promise
setTimeout
setImmediate

Сначала выполняется синхронный код: console.log("Начало") и console.log("Конец").
Затем обрабатываются задачи из очереди nextTick, потом из очереди Promise.
После этого обрабатываются задачи из фазы timers (setTimeout), а затем из фазы check (setImmediate).

*/
